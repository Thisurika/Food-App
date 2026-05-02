import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Modal,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function AdminManageDeliveries({
  adminDeliveries,
  adminDeliveriesBusy,
  adminDeliveriesMsg,
  loadAdminDeliveries,
  updateAdminDelivery,
  deleteAdminDelivery,
  formatDateTime,
  styles,
  isAdminDark
}) {
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [assignModalVisible, setAssignModalVisible] = useState(false);
  const [form, setForm] = useState({
    riderName: "",
    riderPhone: "",
    estimatedTime: "",
    notes: "",
    status: ""
  });

  const openAssignModal = (delivery) => {
    setSelectedDelivery(delivery);
    setForm({
      riderName: delivery.riderName || "",
      riderPhone: delivery.riderPhone || "",
      estimatedTime: delivery.estimatedTime || "",
      notes: delivery.notes || "",
      status: delivery.status || "Pending"
    });
    setAssignModalVisible(true);
  };

  const handleUpdate = async () => {
    if (!selectedDelivery) return;
    await updateAdminDelivery(selectedDelivery._id, form);
    setAssignModalVisible(false);
    setSelectedDelivery(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "#FFB100";
      case "Assigned": return "#3498DB";
      case "Out for Delivery": return "#9B59B6";
      case "Delivered": return "#2ECC71";
      case "Cancelled": return "#E74C3C";
      default: return "#95A5A6";
    }
  };

  return (
    <View style={styles.adminSection}>
      <View style={styles.adminSectionHeader}>
        <Text style={[styles.adminSectionTitle, isAdminDark && styles.adminSectionTitleDark]}>
          Manage Deliveries
        </Text>
        <TouchableOpacity
          style={[styles.adminGhostButton, isAdminDark && styles.adminGhostButtonDark]}
          onPress={loadAdminDeliveries}
          disabled={adminDeliveriesBusy}
        >
          <Text style={[styles.adminGhostText, isAdminDark && styles.adminGhostTextDark]}>
            {adminDeliveriesBusy ? "Refreshing..." : "Refresh"}
          </Text>
        </TouchableOpacity>
      </View>

      {adminDeliveriesMsg ? <Text style={styles.error}>{adminDeliveriesMsg}</Text> : null}

      {adminDeliveriesBusy && !adminDeliveries.length ? (
        <ActivityIndicator size="large" color="#0B5D49" style={{ marginTop: 20 }} />
      ) : adminDeliveries.length === 0 ? (
        <Text style={[styles.adminMutedText, { textAlign: "center", marginTop: 40 }]}>
          No delivery records found.
        </Text>
      ) : (
        adminDeliveries.map((delivery) => (
          <View key={String(delivery._id)} style={[styles.adminCard, isAdminDark && styles.adminCardDark]}>
            <View style={styles.adminCardHeader}>
              <View>
                <Text style={[styles.adminCardTitle, isAdminDark && styles.adminCardTitleDark]}>
                  {delivery.deliveryNumber}
                </Text>
                <Text style={[styles.adminCardMeta, isAdminDark && styles.adminCardMetaDark]}>
                  Order: {delivery.orderId?.orderNumber || "Unknown"}
                </Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(delivery.status) + "22" }]}>
                <Text style={[styles.statusBadgeText, { color: getStatusColor(delivery.status) }]}>
                  {delivery.status}
                </Text>
              </View>
            </View>

            <View style={styles.deliveryInfoBlock}>
              <View style={styles.deliveryInfoRow}>
                <Ionicons name="person-outline" size={14} color={isAdminDark ? "#A0ADB8" : "#64748B"} />
                <Text style={[styles.deliveryInfoText, isAdminDark && styles.deliveryInfoTextDark]}>
                  Rider: {delivery.riderName}
                </Text>
              </View>
              <View style={styles.deliveryInfoRow}>
                <Ionicons name="location-outline" size={14} color={isAdminDark ? "#A0ADB8" : "#64748B"} />
                <Text style={[styles.deliveryInfoText, isAdminDark && styles.deliveryInfoTextDark]}>
                  To: {delivery.deliveryAddress}
                </Text>
              </View>
              {delivery.estimatedTime ? (
                <View style={styles.deliveryInfoRow}>
                  <Ionicons name="time-outline" size={14} color={isAdminDark ? "#A0ADB8" : "#64748B"} />
                  <Text style={[styles.deliveryInfoText, isAdminDark && styles.deliveryInfoTextDark]}>
                    Est: {delivery.estimatedTime}
                  </Text>
                </View>
              ) : null}
            </View>

            <View style={styles.adminActionRow}>
              <TouchableOpacity
                style={[styles.adminActionButton, isAdminDark && styles.adminActionButtonDark]}
                onPress={() => openAssignModal(delivery)}
              >
                <Text style={[styles.adminActionText, isAdminDark && styles.adminActionTextDark]}>
                  Manage / Assign
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.adminDangerButton, isAdminDark && styles.adminDangerButtonDark, { paddingHorizontal: 12 }]}
                onPress={() => deleteAdminDelivery(delivery._id)}
              >
                <Ionicons name="trash-outline" size={16} color="#FF4D4D" />
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}

      {/* Assign Rider Modal */}
      <Modal
        visible={assignModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setAssignModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.adminModalSheet, isAdminDark && styles.adminModalSheetDark, { height: '70%' }]}>
            <View style={[styles.adminModalHeader, isAdminDark && styles.adminModalHeaderDark]}>
              <Text style={[styles.adminModalTitle, isAdminDark && styles.adminModalTitleDark]}>
                Manage Delivery
              </Text>
              <TouchableOpacity onPress={() => setAssignModalVisible(false)}>
                <Text style={[styles.adminModalClose, isAdminDark && styles.adminModalCloseDark]}>Close</Text>
              </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.adminModalContent}>
              <Text style={[styles.adminFieldLabel, isAdminDark && styles.adminFieldLabelDark]}>Rider Name</Text>
              <TextInput
                style={[styles.adminInput, isAdminDark && styles.adminInputDark]}
                placeholder="Enter rider name"
                placeholderTextColor="#8B8B8B"
                value={form.riderName}
                onChangeText={(val) => setForm({ ...form, riderName: val })}
              />

              <Text style={[styles.adminFieldLabel, isAdminDark && styles.adminFieldLabelDark]}>Rider Phone</Text>
              <TextInput
                style={[styles.adminInput, isAdminDark && styles.adminInputDark]}
                placeholder="Enter rider phone"
                placeholderTextColor="#8B8B8B"
                value={form.riderPhone}
                onChangeText={(val) => setForm({ ...form, riderPhone: val })}
              />

              <Text style={[styles.adminFieldLabel, isAdminDark && styles.adminFieldLabelDark]}>Status</Text>
              <View style={styles.adminFilterRow}>
                {["Pending", "Assigned", "Out for Delivery", "Delivered", "Cancelled"].map((s) => (
                  <TouchableOpacity
                    key={s}
                    style={[
                      styles.adminPill,
                      form.status === s && styles.adminPillActive,
                      isAdminDark && styles.adminPillDark,
                      isAdminDark && form.status === s && styles.adminPillActiveDark
                    ]}
                    onPress={() => setForm({ ...form, status: s })}
                  >
                    <Text style={[styles.adminPillText, isAdminDark && styles.adminPillTextDark]}>{s}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={[styles.adminFieldLabel, isAdminDark && styles.adminFieldLabelDark]}>Est. Time</Text>
              <TextInput
                style={[styles.adminInput, isAdminDark && styles.adminInputDark]}
                placeholder="e.g. 30 mins"
                placeholderTextColor="#8B8B8B"
                value={form.estimatedTime}
                onChangeText={(val) => setForm({ ...form, estimatedTime: val })}
              />

              <TouchableOpacity
                style={[styles.adminPrimaryButton, isAdminDark && styles.adminPrimaryButtonDark, { marginTop: 20 }]}
                onPress={handleUpdate}
              >
                <Text style={[styles.adminPrimaryText, isAdminDark && styles.adminPrimaryTextDark]}>
                  Save Changes
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
