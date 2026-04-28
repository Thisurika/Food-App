import React, { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function PaymentsScreen({
  styles,
  accentColor,
  savedCards,
  setDefaultSavedCard,
  deleteSavedCard,
  addCardOpen,
  setAddCardOpen,
  savedCardForm,
  setSavedCardForm,
  addSavedCard,
  customerPaymentsFilter,
  setCustomerPaymentsFilter,
  customerPaymentsMsg,
  customerPaymentsBusy,
  filteredPayments,
  loadCustomerPayments,
  formatDateTime
}) {
  const [brandOpen, setBrandOpen] = useState(false);
  const brandOptions = ["Visa", "Mastercard", "Amex", "Discover", "UnionPay", "Other"];

  const formatCardNumber = (value) => {
    const digits = String(value || "").replace(/\D/g, "").slice(0, 16);
    const groups = digits.match(/.{1,4}/g) || [];
    return groups.join(" ");
  };

  return (
    <View style={styles.orderCard}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Payments</Text>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={loadCustomerPayments}
          disabled={customerPaymentsBusy}
        >
          <Text style={styles.secondaryText}>
            {customerPaymentsBusy ? "Refreshing..." : "Refresh"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileSectionHeader}>
        <Text style={styles.sectionTitle}>Saved Cards</Text>
      </View>
      {savedCards.length ? (
        savedCards.map((card) => (
          <View key={String(card._id)} style={styles.savedCardItem}>
            <View style={styles.seatMapHeader}>
              <Text style={styles.staffOrderTitle}>
                {card.brand || "Card"} **** {card.last4}
              </Text>
              {card.isDefault ? <Text style={styles.helperText}>Default</Text> : null}
            </View>
            <Text style={styles.staffOrderMeta}>
              Exp {card.expiryMonth}/{card.expiryYear}
            </Text>
            <View style={styles.orderActionRow}>
              {!card.isDefault ? (
                <TouchableOpacity
                  style={styles.actionGhost}
                  onPress={() => setDefaultSavedCard(card._id)}
                >
                  <Text style={styles.actionGhostText}>Set Default</Text>
                </TouchableOpacity>
              ) : null}
              <TouchableOpacity
                style={styles.actionGhost}
                onPress={() => deleteSavedCard(card._id)}
              >
                <Text style={styles.actionGhostText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.helperText}>No saved cards yet.</Text>
      )}

      <View style={styles.profileSectionHeader}>
        <Text style={styles.sectionTitle}>Add Card</Text>
      </View>
      <TouchableOpacity
        style={styles.actionPrimary}
        onPress={() => setAddCardOpen((current) => !current)}
      >
        <Text style={styles.actionPrimaryText}>
          {addCardOpen ? "Close Card Form" : "Add Card"}
        </Text>
      </TouchableOpacity>
      {addCardOpen ? (
        <View style={styles.cardBlock}>
          <TextInput
            style={styles.input}
            placeholder="Cardholder name"
            placeholderTextColor="#8F98A8"
            value={savedCardForm.cardHolderName}
            onChangeText={(value) => setSavedCardForm((s) => ({ ...s, cardHolderName: value }))}
          />
          <TouchableOpacity
            style={[styles.orderDropdown, brandOpen && styles.orderDropdownOpen]}
            onPress={() => setBrandOpen((current) => !current)}
          >
            <Text style={styles.orderDropdownText}>
              {savedCardForm.brand || "Select card brand"}
            </Text>
          </TouchableOpacity>
          {brandOpen ? (
            <View style={styles.orderDropdownList}>
              {brandOptions.map((brand) => {
                const isActive = String(savedCardForm.brand) === String(brand);
                return (
                  <TouchableOpacity
                    key={brand}
                    style={[
                      styles.orderDropdownOption,
                      isActive && styles.orderDropdownOptionActive
                    ]}
                    onPress={() => {
                      setSavedCardForm((s) => ({ ...s, brand }));
                      setBrandOpen(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.orderDropdownOptionText,
                        isActive && styles.orderDropdownOptionTextActive
                      ]}
                    >
                      {brand}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Card number"
            placeholderTextColor="#8F98A8"
            value={formatCardNumber(savedCardForm.cardNumber)}
            onChangeText={(value) =>
              setSavedCardForm((s) => ({
                ...s,
                cardNumber: String(value || "").replace(/\D/g, "").slice(0, 16)
              }))
            }
            keyboardType="number-pad"
          />
          <View style={styles.expiryRow}>
            <TextInput
              style={[styles.input, styles.expiryInput]}
              placeholder="MM"
              placeholderTextColor="#8F98A8"
              value={savedCardForm.expiryMonth}
              onChangeText={(value) => setSavedCardForm((s) => ({ ...s, expiryMonth: value }))}
              keyboardType="number-pad"
            />
            <TextInput
              style={[styles.input, styles.expiryInput]}
              placeholder="YYYY"
              placeholderTextColor="#8F98A8"
              value={savedCardForm.expiryYear}
              onChangeText={(value) => setSavedCardForm((s) => ({ ...s, expiryYear: value }))}
              keyboardType="number-pad"
            />
          </View>
          <TouchableOpacity style={styles.placeOrderButton} onPress={() => addSavedCard(savedCardForm)}>
            <Text style={styles.primaryText}>Save Card</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
        {[
          { key: "paid", label: "PAID" },
          { key: "refunds", label: "REFUNDS" }
        ].map((option) => (
          <TouchableOpacity
            key={option.key}
            style={[
              styles.filterChip,
              customerPaymentsFilter === option.key && styles.filterChipActive
            ]}
            onPress={() => setCustomerPaymentsFilter(option.key)}
          >
            <Text style={styles.filterChipText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {customerPaymentsMsg ? <Text style={styles.error}>{customerPaymentsMsg}</Text> : null}
      {customerPaymentsBusy && filteredPayments.length === 0 ? (
        <View style={styles.centeredInline}>
          <ActivityIndicator size="small" color={accentColor || "#F58A3B"} />
          <Text style={styles.helperText}>Loading payments...</Text>
        </View>
      ) : null}
      {filteredPayments.length ? (
        filteredPayments.map((payment) => {
          const totalAmount =
            typeof payment.totalAmount === "number"
              ? payment.totalAmount.toFixed(2)
              : payment.totalAmount || "-";
          const refundStatus = payment.refundStatus || "none";
          return (
            <View
              key={String(payment._id || payment.paymentId || payment.orderId?._id)}
              style={styles.seatMapCard}
            >
              <View style={styles.seatMapHeader}>
                <Text style={styles.staffOrderTitle}>
                  {payment.orderNumber || payment.orderId?.orderNumber || "Payment"}
                </Text>
                <Text style={styles.staffOrderMeta}>{payment.paymentId || "ID pending"}</Text>
              </View>
              <Text style={styles.staffOrderMeta}>Amount: {totalAmount}</Text>
              <Text style={styles.staffOrderMeta}>
                Method: {String(payment.paymentMethod || "cash").toUpperCase()}
              </Text>
              <Text style={styles.staffOrderMeta}>Paid: {formatDateTime(payment.createdAt)}</Text>
              <Text style={styles.staffOrderMeta}>Refund: {refundStatus}</Text>
              {payment.refundRequestedAt ? (
                <Text style={styles.staffOrderMeta}>
                  Requested: {formatDateTime(payment.refundRequestedAt)}
                </Text>
              ) : null}
              {payment.refundedAt ? (
                <Text style={styles.staffOrderMeta}>
                  Refunded: {formatDateTime(payment.refundedAt)}
                </Text>
              ) : null}
            </View>
          );
        })
      ) : (
        <Text style={styles.helperText}>
          {customerPaymentsFilter === "refunds" ? "No refunds yet." : "No paid payments yet."}
        </Text>
      )}
    </View>
  );
}


