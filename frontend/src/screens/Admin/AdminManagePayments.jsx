import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AdminManagePayments({
  styles,
  isAdminDark,
  adminPaymentStats,
  adminRevenue,
  adminPaymentOptions,
  toggleAdminPaymentOption,
  adminOrders,
  adminActiveOrders,
  adminPayments,
  adminPaymentsBusy,
  adminPaymentsMsg,
  loadAdminPayments,
  reviewRefundRequest,
  directRefundPayment,
  markAdminOrderPaid,
  createAdminPayment,
  formatOrderType,
  formatDateTime
}) {
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("cash");
  const [taxPercent, setTaxPercent] = useState("0");
  const [offerType, setOfferType] = useState("fixed");
  const [offerValue, setOfferValue] = useState("0");
  const [paymentError, setPaymentError] = useState("");
  const [refundBusyId, setRefundBusyId] = useState("");
  const [refundMsg, setRefundMsg] = useState("");

  const selectedOrder = useMemo(
    () => adminOrders.find((order) => String(order._id) === String(selectedOrderId)),
    [adminOrders, selectedOrderId]
  );

  const paidOrders = useMemo(
    () =>
      adminOrders.filter(
        (order) => String(order.paymentStatus || "").toLowerCase() === "paid"
      ),
    [adminOrders]
  );

  const refundRequests = useMemo(() => {
    return (adminPayments || []).filter(
      (payment) => String(payment?.refundStatus || "").toLowerCase() === "requested"
    );
  }, [adminPayments]);

  const paymentByOrderId = useMemo(() => {
    const map = new Map();
    (adminPayments || []).forEach((payment) => {
      const orderId = payment?.orderId?._id || payment?.orderId || "";
      if (orderId) map.set(String(orderId), payment);
    });
    return map;
  }, [adminPayments]);

  useEffect(() => {
    if (!selectedOrder) return;
    const available = ["cash", "card", "online"].find(
      (key) => adminPaymentOptions[key]
    );
    setSelectedMethod(available || "cash");
    setTaxPercent("0");
    setOfferType("fixed");
    setOfferValue("0");
    setPaymentError("");
  }, [selectedOrder, adminPaymentOptions]);

  const resolveOrderTotal = (order) => {
    if (!order) return 0;
    if (typeof order.totalAmount === "number") return order.totalAmount;
    return (order.items || []).reduce(
      (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
      0
    );
  };

  const getBreakdown = () => {
    if (!selectedOrder) return { subtotal: 0, discount: 0, tax: 0, total: 0 };
    const subtotal = resolveOrderTotal(selectedOrder);
    const taxValue = Math.max(Number(taxPercent || 0), 0);
    const offerValueNum = Math.max(Number(offerValue || 0), 0);
    const discount =
      offerType === "percent"
        ? Math.min(subtotal * (offerValueNum / 100), subtotal)
        : Math.min(offerValueNum, subtotal);
    const taxable = Math.max(subtotal - discount, 0);
    const tax = taxable * (taxValue / 100);
    const total = taxable + tax;
    return { subtotal, discount, tax, total };
  };

    const handleRefundReview = async (paymentId, action) => {
    if (!reviewRefundRequest) return;
    setRefundMsg("");
    setRefundBusyId(paymentId);
    try {
      await reviewRefundRequest(paymentId, action);
      if (loadAdminPayments) await loadAdminPayments();
    } catch (err) {
      setRefundMsg(err.message || "Failed to review refund request.");
    } finally {
      setRefundBusyId("");
    }
  };

  const handleDirectRefund = async (paymentId) => {
    if (!directRefundPayment) return;
    setRefundMsg("");
    setRefundBusyId(paymentId);
    try {
      await directRefundPayment(paymentId);
      if (loadAdminPayments) await loadAdminPayments();
    } catch (err) {
      setRefundMsg(err.message || "Failed to refund payment.");
    } finally {
      setRefundBusyId("");
    }
  };

  return (
    <View style={styles.adminSection}>
      <View style={styles.adminStatsRow}>
        {[
          { label: "Paid Orders", value: adminPaymentStats.paid },
          { label: "Unpaid Orders", value: adminPaymentStats.unpaid },
          { label: "Refunded", value: adminPaymentStats.refunded },
          { label: "Revenue", value: `LKR ${adminRevenue.toFixed(2)}` }
        ].map((item) => (
          <View key={item.label} style={[styles.adminStatCard, isAdminDark && styles.adminStatCardDark]}>
            <Text style={[styles.adminStatLabel, isAdminDark && styles.adminStatLabelDark]}>{item.label}</Text>
            <Text style={[styles.adminStatValue, isAdminDark && styles.adminStatValueDark]}>{item.value}</Text>
          </View>
        ))}
      </View>

      <Modal
        visible={paymentModalVisible && Boolean(selectedOrder)}
        animationType="slide"
        transparent
        onRequestClose={() => setPaymentModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Payment Details</Text>
              <TouchableOpacity
                onPress={() => {
                  setPaymentModalVisible(false);
                  setSelectedOrderId("");
                }}
              >
                <Text style={styles.modalClose}>Close</Text>
              </TouchableOpacity>
            </View>
            {selectedOrder ? (
              <ScrollView contentContainerStyle={styles.modalContent}>
                <View style={styles.adminCard}>
                  <Text style={styles.adminCardTitle}>
                    {selectedOrder.orderNumber || "Order"} • {formatOrderType(selectedOrder.orderType)}
                  </Text>
                  <Text style={styles.adminCardMeta}>
                    Customer: {selectedOrder.customerName || selectedOrder.createdBy || "-"}
                  </Text>
                  <Text style={styles.adminCardMeta}>
                    Phone: {selectedOrder.phone || "-"}
                  </Text>
                  <Text style={styles.adminCardMeta}>
                    Created: {formatDateTime(selectedOrder.createdAt)}
                  </Text>
                </View>

                <View style={styles.adminCard}>
                  <Text style={styles.adminCardTitle}>Order Items</Text>
                  {(selectedOrder.items || []).length ? (
                    (selectedOrder.items || []).map((item, index) => (
                      <View key={`${selectedOrder._id}-${index}`} style={styles.adminActionRow}>
                        <Text style={styles.adminCardMeta}>
                          {item.name || "Item"} x{item.quantity || 0}
                        </Text>
                        <Text style={styles.adminCardMeta}>
                          LKR {(Number(item.price || 0) * Number(item.quantity || 0)).toFixed(2)}
                        </Text>
                      </View>
                    ))
                  ) : (
                    <Text style={styles.adminCardMeta}>No items</Text>
                  )}
                </View>

                <Text style={styles.profileLabel}>Tax Percentage</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Tax %"
                  placeholderTextColor="#8F98A8"
                  value={taxPercent}
                  onChangeText={setTaxPercent}
                />

                <Text style={styles.profileLabel}>Discount Type</Text>
                <View style={styles.adminOptionRow}>
                  {[
                    { key: "fixed", label: "Fixed (LKR)" },
                    { key: "percent", label: "Percent (%)" }
                  ].map((option) => (
                    <TouchableOpacity
                      key={option.key}
                      style={[
                        styles.adminOptionChip,
                        offerType === option.key && styles.adminOptionChipActive,
                        isAdminDark && styles.adminOptionChipDark,
                        isAdminDark && offerType === option.key && styles.adminOptionChipActiveDark
                      ]}
                      onPress={() => setOfferType(option.key)}
                    >
                      <Text
                        style={[
                          styles.adminOptionText,
                          offerType === option.key && styles.adminOptionTextActive,
                          isAdminDark && styles.adminOptionTextDark,
                          isAdminDark && offerType === option.key && styles.adminOptionTextActiveDark
                        ]}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <Text style={styles.profileLabel}>Discount Value</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder={offerType === "percent" ? "0 - 100" : "LKR"}
                  placeholderTextColor="#8F98A8"
                  value={offerValue}
                  onChangeText={setOfferValue}
                />

                <Text style={styles.profileLabel}>Payment Method</Text>
                <View style={styles.adminOptionRow}>
                  {[
                    { key: "cash", label: "Cash" },
                    { key: "card", label: "Card" }
                  ].map((option) => {
                    const enabled = Boolean(adminPaymentOptions[option.key]);
                    const active = selectedMethod === option.key;
                    return (
                      <TouchableOpacity
                        key={option.key}
                        style={[
                          styles.adminOptionChip,
                          active && styles.adminOptionChipActive,
                          isAdminDark && styles.adminOptionChipDark,
                          isAdminDark && active && styles.adminOptionChipActiveDark,
                          !enabled && { opacity: 0.4 }
                        ]}
                        onPress={() => {
                          if (enabled) setSelectedMethod(option.key);
                        }}
                        disabled={!enabled}
                      >
                        <Text
                          style={[
                            styles.adminOptionText,
                            active && styles.adminOptionTextActive,
                            isAdminDark && styles.adminOptionTextDark,
                            isAdminDark && active && styles.adminOptionTextActiveDark
                          ]}
                        >
                          {option.label}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>

                <View style={styles.adminCard}>
                  <Text style={styles.adminCardTitle}>Payment Summary</Text>
                  {(() => {
                    const breakdown = getBreakdown();
                    return (
                      <>
                        <Text style={styles.adminCardMeta}>
                          Subtotal: LKR {breakdown.subtotal.toFixed(2)}
                        </Text>
                        <Text style={styles.adminCardMeta}>
                          Discount: - LKR {breakdown.discount.toFixed(2)}
                        </Text>
                        <Text style={styles.adminCardMeta}>
                          Tax: LKR {breakdown.tax.toFixed(2)}
                        </Text>
                        <Text style={[styles.adminCardTitle, { marginTop: 6 }]}>
                          Total: LKR {breakdown.total.toFixed(2)}
                        </Text>
                      </>
                    );
                  })()}
                </View>

                {paymentError ? (
                  <Text style={styles.error}>{paymentError}</Text>
                ) : null}

                <TouchableOpacity
                  style={[styles.adminPrimaryButton, isAdminDark && styles.adminPrimaryButtonDark]}
                  onPress={async () => {
                    if (!selectedOrder) return;
                    try {
                      setPaymentError("");
                      await createAdminPayment({
                        orderId: selectedOrder._id,
                        paymentMethod: selectedMethod,
                        taxPercent,
                        offerType,
                        offerValue
                      });
                      setPaymentModalVisible(false);
                      setSelectedOrderId("");
                    } catch (err) {
                      setPaymentError(err.message || "Failed to create payment.");
                    }
                  }}
                >
                  <Text style={[styles.adminPrimaryText, isAdminDark && styles.adminPrimaryTextDark]}>
                    Make Payment
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            ) : null}
          </View>
        </View>
      </Modal>
      <View style={[styles.adminCard, isAdminDark && styles.adminCardDark]}>
        <View style={styles.adminCardHeader}>
          <Text style={[styles.adminCardTitle, isAdminDark && styles.adminCardTitleDark]}>
            Active Orders
          </Text>
          <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
            {adminActiveOrders.length} open orders
          </Text>
        </View>
        {adminActiveOrders.length ? (
          adminActiveOrders.map((order) => {
            const total =
              typeof order.totalAmount === "number"
                ? order.totalAmount
                : resolveOrderTotal(order);
            const isPaid = String(order.paymentStatus || "").toLowerCase() === "paid";
            return (
              <View key={String(order._id)} style={styles.adminActionRow}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.adminCardTitle, isAdminDark && styles.adminCardTitleDark]}>
                    {order.orderNumber || "Order"} • {formatOrderType(order.orderType)}
                  </Text>
                  <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
                    Customer: {order.customerName || order.createdBy || "-"}
                  </Text>
                  <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
                    Total: LKR {Number(total || 0).toFixed(2)} • {formatDateTime(order.createdAt)}
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    styles.adminActionButton,
                    isAdminDark && styles.adminActionButtonDark,
                    isPaid && { opacity: 0.5 }
                  ]}
                  onPress={() => {
                    if (!isPaid) {
                      setSelectedOrderId(order._id);
                      setPaymentModalVisible(true);
                    }
                  }}
                  disabled={isPaid}
                >
                  <Text style={[styles.adminActionText, isAdminDark && styles.adminActionTextDark]}>
                    {isPaid ? "Paid" : "Pay"}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
            No active orders right now.
          </Text>
        )}
      </View>

      <View style={[styles.adminCard, isAdminDark && styles.adminCardDark]}>
        <View style={styles.adminCardHeader}>
          <Text style={[styles.adminCardTitle, isAdminDark && styles.adminCardTitleDark]}>
            Refund Requests
          </Text>
          <TouchableOpacity
            style={[styles.adminGhostButton, isAdminDark && styles.adminGhostButtonDark]}
            onPress={loadAdminPayments}
            disabled={adminPaymentsBusy}
          >
            <Text style={[styles.adminGhostText, isAdminDark && styles.adminGhostTextDark]}>
              {adminPaymentsBusy ? "Refreshing..." : "Refresh"}
            </Text>
          </TouchableOpacity>
        </View>
        {adminPaymentsMsg ? (
          <Text style={styles.error}>{adminPaymentsMsg}</Text>
        ) : null}
        {adminPaymentsBusy && refundRequests.length === 0 ? (
          <View style={styles.centeredInline}>
            <ActivityIndicator size="small" color={isAdminDark ? "#F5F7FB" : "#0A0A0A"} />
            <Text style={styles.helperText}>Loading refunds...</Text>
          </View>
        ) : null}
        {refundMsg ? <Text style={styles.error}>{refundMsg}</Text> : null}
        {refundRequests.length ? (
          refundRequests.map((payment) => (
            <View key={String(payment._id)} style={styles.adminActionRow}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.adminCardTitle, isAdminDark && styles.adminCardTitleDark]}>
                  {payment.orderNumber || payment.orderId?.orderNumber || "Order"} •{" "}
                  {formatOrderType(payment.orderId?.orderType)}
                </Text>
                <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
                  Customer: {payment.customerName || payment.orderId?.customerName || "-"}
                </Text>
                <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
                  Total: LKR {Number(payment.totalAmount || 0).toFixed(2)} •{" "}
                  {formatDateTime(payment.refundRequestedAt || payment.createdAt)}
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.adminActionButton, isAdminDark && styles.adminActionButtonDark]}
                onPress={() => handleRefundReview(payment._id, "approve")}
                disabled={refundBusyId === String(payment._id)}
              >
                <Text style={[styles.adminActionText, isAdminDark && styles.adminActionTextDark]}>
                  {refundBusyId === String(payment._id) ? "..." : "Approve"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.adminDangerButton, isAdminDark && styles.adminDangerButtonDark]}
                onPress={() => handleRefundReview(payment._id, "reject")}
                disabled={refundBusyId === String(payment._id)}
              >
                <Text style={[styles.adminDangerText, isAdminDark && styles.adminDangerTextDark]}>
                  Reject
                </Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
            No refund requests right now.
          </Text>
        )}
      </View>

            <View style={[styles.adminCard, isAdminDark && styles.adminCardDark]}>
        <View style={styles.adminCardHeader}>
          <Text style={[styles.adminCardTitle, isAdminDark && styles.adminCardTitleDark]}>
            Paid Orders
          </Text>
          <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
            {paidOrders.length} paid
          </Text>
        </View>
        {paidOrders.length ? (
          paidOrders.map((order) => {
            const payment = paymentByOrderId.get(String(order._id));
            const refundStatus = String(payment?.refundStatus || "").toLowerCase();
            const isRefunded = refundStatus === "approved";
            const canRefund = Boolean(payment) && !isRefunded;
            return (
              <View key={String(order._id)} style={styles.adminActionRow}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.adminCardTitle, isAdminDark && styles.adminCardTitleDark]}>
                    {order.orderNumber || "Order"} â€¢ {formatOrderType(order.orderType)}
                  </Text>
                  <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
                    Customer: {order.customerName || order.createdBy || "-"}
                  </Text>
                  <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
                    Total: LKR {resolveOrderTotal(order).toFixed(2)} â€¢ {formatDateTime(order.createdAt)}
                  </Text>
                </View>
                {isRefunded ? (
                  <Text style={[styles.adminStatusText, isAdminDark && styles.adminStatusTextDark]}>
                    REFUNDED
                  </Text>
                ) : (
                  <TouchableOpacity
                    style={[
                      styles.adminActionButton,
                      isAdminDark && styles.adminActionButtonDark,
                      !canRefund && { opacity: 0.5 }
                    ]}
                    onPress={() => {
                      if (payment?._id) handleDirectRefund(payment._id);
                    }}
                    disabled={!canRefund || refundBusyId === String(payment?._id)}
                  >
                    <Text style={[styles.adminActionText, isAdminDark && styles.adminActionTextDark]}>
                      {refundBusyId === String(payment?._id) ? "..." : "Refund"}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })
        ) : (
          <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
            No paid orders yet.
          </Text>
        )}
      </View>
<View style={[styles.adminCard, isAdminDark && styles.adminCardDark]}>
        <View style={styles.adminCardHeader}>
          <Text style={[styles.adminCardTitle, isAdminDark && styles.adminCardTitleDark]}>
            Payment Options
          </Text>
          <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
            Toggle accepted methods
          </Text>
        </View>
        <View style={styles.adminOptionRow}>
          {[
            { key: "cash", label: "Cash" },
            { key: "card", label: "Card" },
            { key: "online", label: "Online" }
          ].map((option) => {
            const enabled = Boolean(adminPaymentOptions[option.key]);
            return (
              <TouchableOpacity
                key={option.key}
                style={[
                  styles.adminOptionChip,
                  enabled && styles.adminOptionChipActive,
                  isAdminDark && styles.adminOptionChipDark,
                  isAdminDark && enabled && styles.adminOptionChipActiveDark
                ]}
                onPress={() => toggleAdminPaymentOption(option.key)}
              >
                <Text
                  style={[
                    styles.adminOptionText,
                    enabled && styles.adminOptionTextActive,
                    isAdminDark && styles.adminOptionTextDark,
                    isAdminDark && enabled && styles.adminOptionTextActiveDark
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={[styles.adminCard, isAdminDark && styles.adminCardDark]}>
        <View style={styles.adminCardHeader}>
          <Text style={[styles.adminCardTitle, isAdminDark && styles.adminCardTitleDark]}>
            Method Breakdown
          </Text>
          <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
            Orders by method
          </Text>
        </View>
        {Object.keys(adminPaymentStats.methods).length ? (
          Object.entries(adminPaymentStats.methods).map(([method, count]) => (
            <View key={method} style={styles.adminOptionRow}>
              <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
                {method.toUpperCase()}
              </Text>
              <Text style={[styles.adminStatusText, isAdminDark && styles.adminStatusTextDark]}>
                {count}
              </Text>
            </View>
          ))
        ) : (
          <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
            No payment data yet.
          </Text>
        )}
      </View>
    </View>
  );
}












