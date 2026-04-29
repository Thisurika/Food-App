import { StyleSheet } from "react-native";

const darkTheme = {
  bg: "#08100E",
  overlay: "rgba(8, 16, 14, 0.85)",
  text: "#FFFFFF",
  textMuted: "#8E9E99",
  accent: "#118A6D",
  accentStrong: "#0E755C",
  accentSoft: "rgba(17, 138, 109, 0.2)",
  accentTint: "rgba(17, 138, 109, 0.12)",
  accentFade: "rgba(17, 138, 109, 0.08)",
  border: "rgba(255, 255, 255, 0.12)",
  borderStrong: "rgba(255, 255, 255, 0.25)",
  borderAccent: "rgba(17, 138, 109, 0.4)",
  inputBg: "rgba(255, 255, 255, 0.05)",
  helperBg: "rgba(10, 10, 10, 0.7)",
  panelBg: "#121A18",
  panelItemBg: "rgba(255, 255, 255, 0.02)",
  chipBg: "rgba(0, 0, 0, 0.2)",
  cardBg: "rgba(20, 26, 24, 0.85)",
  tabsBg: "rgba(20, 26, 24, 0.7)",
  navBg: "#0B5D49",
  navActive: "#FFFFFF",
  navBubbleBorder: "transparent",
  modalOverlay: "rgba(0, 0, 0, 0.6)",
  primaryText: "#FFFFFF"
};

const lightTheme = {
  bg: "#F2F6F5",
  overlay: "rgba(242, 246, 245, 0.9)",
  text: "#102A22",
  textMuted: "#627A73",
  accent: "#0B5D49",
  accentStrong: "#064D3B",
  accentSoft: "rgba(11, 93, 73, 0.15)",
  accentTint: "rgba(11, 93, 73, 0.08)",
  accentFade: "rgba(11, 93, 73, 0.04)",
  border: "#E0E8E6",
  borderStrong: "#C9D6D2",
  borderAccent: "rgba(11, 93, 73, 0.35)",
  inputBg: "#FFFFFF",
  helperBg: "#E8F0EE",
  panelBg: "#FFFFFF",
  panelItemBg: "#FFFFFF",
  chipBg: "#FFFFFF",
  cardBg: "#FFFFFF",
  tabsBg: "#E8F0EE",
  navBg: "#0B5D49",
  navActive: "#FFFFFF",
  navBubbleBorder: "transparent",
  modalOverlay: "rgba(16, 42, 34, 0.2)",
  primaryText: "#FFFFFF"
};

const createStyles = (theme) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.bg
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.bg
  },
  background: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.overlay
  },
  authContainer: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    gap: 12
  },
  selectedDishCard: {
    backgroundColor: theme.cardBg,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    overflow: "hidden",
    marginTop: 8,
    marginBottom: 12
  },
  selectedDishImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover"
  },
  selectedDishBody: {
    padding: 12,
    gap: 6
  },
  adminDishList: {
    marginTop: 6,
    marginBottom: 12,
    gap: 10
  },
  adminDishRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 0,
    borderRadius: 12,
    borderWidth: 0,
    borderColor: "transparent",
    backgroundColor: "transparent"
  },
  adminDishCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    padding: 12,
    shadowColor: theme.accent,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    gap: 8
  },
  adminDishCardDark: {
    backgroundColor: "rgba(24, 14, 9, 0.92)",
    borderColor: "rgba(11, 93, 73, 0.25)"
  },
  adminDishRowDark: {
    borderColor: "rgba(255, 255, 255, 0.12)",
    backgroundColor: "rgba(20, 20, 20, 0.85)"
  },
  adminDishThumb: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  adminDishThumbLarge: {
    width: 52,
    height: 52,
    borderRadius: 12
  },
  adminDishThumbPlaceholderLarge: {
    width: 52,
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FFFFFF"
  },
  adminDishInfo: {
    flex: 1
  },
  adminDishTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  adminDishIconWrap: {
    width: 18,
    height: 18,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FFFFFF"
  },
  adminDishIconWrapDark: {
    backgroundColor: "rgba(11, 93, 73, 0.18)",
    borderColor: "rgba(11, 93, 73, 0.45)"
  },
  adminDishName: {
    fontWeight: "700",
    color: "#2D201A"
  },
  adminDishNameDark: {
    color: "#FFFFFF"
  },
  adminDishPrice: {
    color: "#7D5B4A",
    fontSize: 12
  },
  adminDishPriceDark: {
    color: "#BFBFBF"
  },
  adminDishActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  adminAddButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: theme.accent
  },
  adminAddButtonDark: {
    backgroundColor: theme.accent
  },
  adminAddText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12
  },
  adminAddTextDark: {
    color: "#FFFFFF"
  },
  authCard: {
    backgroundColor: theme.cardBg,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 16,
    gap: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4
  },
  brand: {
    fontSize: 20,
    letterSpacing: 1,
    color: theme.accent,
    fontWeight: "700"
  },
  heroTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: theme.text
  },
  heroSubtitle: {
    fontSize: 25,
    color: theme.accentStrong,
    marginBottom: 7
  },
  authBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: theme.borderAccent,
    backgroundColor: theme.accentTint,
    color: theme.accent,
    fontWeight: "700",
    fontSize: 11,
    marginBottom: 8
  },
  sectionLabel: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 4,
    marginBottom: 6
  },
  switchRow: {
    flexDirection: "row",
    backgroundColor: theme.cardBg,
    borderRadius: 12,
    padding: 4,
    marginBottom: 10
  },
  switchButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10
  },
  switchActive: {
    backgroundColor: theme.accentSoft
  },
  switchText: {
    fontWeight: "600",
    color: theme.text
  },
  row: {
    flexDirection: "row",
    gap: 10
  },
  input: {
    borderWidth: 1,
    borderColor: theme.borderStrong,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: theme.inputBg,
    color: theme.text
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: "top"
  },
  half: {
    flex: 1
  },
  fieldLabel: {
    color: theme.textMuted,
    fontWeight: "600",
    fontSize: 12,
    marginBottom: 6
  },
  genderRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12
  },
  genderButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.borderStrong,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: theme.inputBg
  },
  genderButtonActive: {
    borderColor: theme.borderAccent,
    backgroundColor: theme.accentSoft
  },
  genderText: {
    color: theme.textMuted,
    fontWeight: "600"
  },
  genderTextActive: {
    color: theme.accent
  },
  primaryButton: {
    backgroundColor: theme.accent,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
    marginTop: 6
  },
  primaryText: {
    color: theme.primaryText,
    fontWeight: "700"
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: theme.borderAccent,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10
  },
  secondaryText: {
    color: theme.accent,
    fontWeight: "600"
  },
  error: {
    color: "#FCA5A5",
    marginBottom: 8
  },
  info: {
    color: "#86EFAC",
    marginBottom: 8
  },
  helperBlock: {
    marginTop: 18,
    padding: 12,
    backgroundColor: theme.helperBg,
    borderRadius: 12
  },
  helperLabel: {
    fontWeight: "700",
    color: theme.accent,
    marginBottom: 4
  },
  helperText: {
    color: theme.textMuted,
    fontSize: 12
  },
  authLinkRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  authLinkLabel: {
    color: theme.textMuted,
    fontSize: 12
  },
  centeredInline: {
    alignItems: "center",
    gap: 8,
    paddingVertical: 12
  },
  adminSafeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  adminSafeAreaDark: {
    backgroundColor: "#0F0A07"
  },
  adminBackgroundImage: {
    opacity: 0.08
  },
  adminBackgroundImageDark: {
    opacity: 0.2
  },
  adminBackgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.bg
  },
  adminBackgroundOverlayDark: {
    backgroundColor: "rgba(12, 8, 6, 0.92)"
  },
  adminLayout: {
    flex: 1,
    flexDirection: "row"
  },
  adminWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16
  },
  adminSidebar: {
    width: 120,
    backgroundColor: "rgba(20, 12, 8, 0.94)",
    borderRightWidth: 1,
    borderRightColor: "rgba(11, 93, 73, 0.18)",
    paddingHorizontal: 12,
    paddingVertical: 20
  },
  adminBrand: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 16
  },
  adminNav: {
    gap: 8
  },
  adminNavItem: {
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 2
  },
  adminNavPill: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FFD2B3"
  },
  adminNavPillActive: {
    backgroundColor: "#FFFFFF",
    borderColor: theme.accent
  },
  adminNavText: {
    color: theme.textMuted,
    fontWeight: "700",
    fontSize: 11
  },
  adminNavDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "transparent"
  },
  adminNavDotActive: {
    backgroundColor: theme.accent
  },
  adminScroll: {
    flex: 1
  },
  adminContent: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 110,
    gap: 12,
    flexGrow: 1
  },
  adminTopbarLight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    borderLeftWidth: 4,
    borderLeftColor: theme.accent,
    shadowColor: theme.accent,
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 4
  },
  adminTopbarDark: {
    backgroundColor: "rgba(18, 12, 8, 0.94)",
    borderColor: "rgba(11, 93, 73, 0.22)"
  },
  adminTitle: {
    fontSize: 20,
    color: theme.text,
    fontWeight: "700"
  },
  adminTitleDark: {
    color: "#FFFFFF"
  },
  adminSubtitle: {
    color: theme.textMuted,
    fontWeight: "600",
    fontSize: 12
  },
  adminSubtitleDark: {
    color: theme.textMuted
  },
  adminLink: {
    color: theme.textMuted,
    fontWeight: "700"
  },
  adminLinkDark: {
    color: theme.accent
  },
  adminTopbarActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  adminTopbarLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  adminTopbarAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(108, 92, 231, 0.12)",
    borderWidth: 1.5,
    borderColor: "rgba(108, 92, 231, 0.35)",
    alignItems: "center",
    justifyContent: "center"
  },
  adminIconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(108, 92, 231, 0.3)",
    backgroundColor: "rgba(108, 92, 231, 0.08)",
    alignItems: "center",
    justifyContent: "center"
  },
  adminIconButtonDark: {
    borderColor: "rgba(253, 203, 110, 0.35)",
    backgroundColor: "rgba(253, 203, 110, 0.08)"
  },
  adminIconButtonDanger: {
    borderColor: "rgba(214, 48, 49, 0.3)",
    backgroundColor: "rgba(214, 48, 49, 0.08)"
  },
  adminStatIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4
  },
  adminDashQuickGrid: {
    gap: 10,
    marginTop: 4
  },
  adminDashQuickItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderLeftWidth: 3,
    borderLeftColor: theme.accent,
    paddingHorizontal: 16,
    paddingVertical: 14,
    shadowColor: theme.accent,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3
  },
  adminDashQuickItemDark: {
    backgroundColor: "rgba(24, 14, 9, 0.9)",
    borderColor: "rgba(11, 93, 73, 0.25)"
  },
  adminDashQuickIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center"
  },
  adminDashQuickLabel: {
    flex: 1,
    fontWeight: "700",
    fontSize: 15,
    color: "#1F1A14"
  },
  adminDashQuickLabelDark: {
    color: "#F5EFE6"
  },
  adminSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 8,
    paddingLeft: 10,
    borderLeftWidth: 4,
    borderLeftColor: theme.accent
  },
  adminSectionActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center"
  },
  adminSectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: theme.textMuted
  },
  adminSectionTitleDark: {
    color: "#FFFFFF"
  },
  adminStatsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 6
  },
  adminFilterRow: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 8,
    marginBottom: 12
  },
  adminStatCard: {
    flexGrow: 1,
    flexBasis: "48%",
    minWidth: 140,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderTopColor: "#FFFFFF",
    borderBottomColor: "#FFFFFF",
    padding: 12,
    gap: 6,
    shadowColor: theme.accent,
    shadowOpacity: 0.14,
    shadowRadius: 14,
    elevation: 4
  },
  adminStatCardDark: {
    backgroundColor: "rgba(24, 14, 9, 0.92)",
    borderColor: "rgba(11, 93, 73, 0.2)"
  },
  adminStatGreen: {
    backgroundColor: "#FFFFFF",
    borderColor: "rgba(11, 93, 73, 0.2)"
  },
  adminStatBlue: {
    backgroundColor: "#FFFFFF",
    borderColor: "rgba(11, 93, 73, 0.2)"
  },
  adminStatRed: {
    backgroundColor: "#FFFFFF",
    borderColor: "rgba(11, 93, 73, 0.2)"
  },
  adminStatOrange: {
    backgroundColor: "#FFFFFF",
    borderColor: "rgba(11, 93, 73, 0.2)"
  },
  adminStatGreenDark: {
    backgroundColor: "rgba(8, 16, 14, 0.8)",
    borderColor: "rgba(17, 138, 109, 0.35)"
  },
  adminStatBlueDark: {
    backgroundColor: "rgba(8, 16, 14, 0.8)",
    borderColor: "rgba(17, 138, 109, 0.35)"
  },
  adminStatRedDark: {
    backgroundColor: "rgba(8, 16, 14, 0.8)",
    borderColor: "rgba(17, 138, 109, 0.35)"
  },
  adminStatOrangeDark: {
    backgroundColor: "rgba(8, 16, 14, 0.8)",
    borderColor: "rgba(17, 138, 109, 0.35)"
  },
  adminStatLabel: {
    color: theme.textMuted,
    fontSize: 12
  },
  adminStatLabelDark: {
    color: theme.textMuted
  },
  adminStatValue: {
    color: theme.text,
    fontWeight: "700",
    fontSize: 18
  },
  adminStatValueDark: {
    color: "#FFFFFF"
  },
  adminMutedText: {
    color: theme.textMuted,
    fontSize: 12
  },
  adminMutedTextDark: {
    color: theme.textMuted
  },
  adminPanel: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    shadowColor: theme.accent,
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    gap: 10
  },
  adminPanelDark: {
    backgroundColor: "rgba(24, 14, 9, 0.92)",
    borderColor: "rgba(11, 93, 73, 0.2)"
  },
  adminOrderSummary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderTopColor: "#FFFFFF",
    borderBottomColor: "#FFFFFF",
    backgroundColor: "#FFFFFF"
  },
  adminOrderSummaryDark: {
    backgroundColor: "rgba(11, 93, 73, 0.12)",
    borderColor: "rgba(11, 93, 73, 0.28)"
  },
  adminOrderSummaryItem: {
    flex: 1,
    alignItems: "center",
    gap: 4
  },
  adminOrderSummaryDivider: {
    width: 1,
    height: 36,
    backgroundColor: "rgba(0, 0, 0, 0.08)"
  },
  adminOrderSummaryDividerDark: {
    backgroundColor: "rgba(255, 255, 255, 0.12)"
  },
  adminOrderSummaryLabel: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: theme.textMuted
  },
  adminOrderSummaryLabelDark: {
    color: "#E7C7AD"
  },
  adminOrderSummaryValue: {
    fontSize: 16,
    fontWeight: "700",
    color: theme.text
  },
  adminOrderSummaryValueDark: {
    color: "#FFFFFF"
  },
  adminProfileHero: {
    alignItems: "center",
    marginBottom: 16,
    gap: 6
  },
  adminProfileIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: theme.accent,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  adminProfileIconDark: {
    borderColor: "rgba(11, 93, 73, 0.7)",
    backgroundColor: "rgba(11, 93, 73, 0.16)"
  },
  adminProfileIconText: {
    color: "#C2410C",
    fontWeight: "700",
    fontSize: 20
  },
  adminProfileIconTextDark: {
    color: theme.accent
  },
  adminProfileName: {
    color: theme.text,
    fontWeight: "700",
    fontSize: 16
  },
  adminProfileNameDark: {
    color: "#FFFFFF"
  },
  adminProfileMeta: {
    color: theme.textMuted,
    fontSize: 12
  },
  adminProfileMetaDark: {
    color: "#E1C2A8"
  },
  adminProfileRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6
  },
  adminProfileKey: {
    color: theme.textMuted,
    fontSize: 12,
    fontWeight: "700"
  },
  adminProfileKeyDark: {
    color: "#E7C7AD"
  },
  adminProfileValue: {
    color: theme.text,
    fontSize: 12,
    fontWeight: "600"
  },
  adminProfileValueDark: {
    color: "#FFFFFF"
  },
  adminCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderTopColor: "#FFFFFF",
    borderBottomColor: "#FFFFFF",
    shadowColor: theme.accent,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    gap: 8
  },
  adminCardDark: {
    backgroundColor: "rgba(24, 14, 9, 0.92)",
    borderColor: "rgba(11, 93, 73, 0.2)"
  },
  adminCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  adminCardTitle: {
    color: theme.text,
    fontWeight: "700"
  },
  adminCardTitleDark: {
    color: "#FFFFFF"
  },
  adminCardMeta: {
    color: theme.textMuted,
    fontSize: 12
  },
  adminCardMetaDark: {
    color: "#D8B99E"
  },
  adminOptionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
    marginTop: 6
  },
  adminOptionChip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FFFFFF"
  },
  adminOptionChipActive: {
    backgroundColor: "#FFFFFF",
    borderColor: theme.accent
  },
  adminOptionChipDark: {
    backgroundColor: "rgba(11, 93, 73, 0.12)",
    borderColor: "rgba(11, 93, 73, 0.3)"
  },
  adminOptionChipActiveDark: {
    backgroundColor: "rgba(11, 93, 73, 0.3)",
    borderColor: "rgba(11, 93, 73, 0.85)"
  },
  adminOptionText: {
    color: theme.textMuted,
    fontWeight: "700",
    fontSize: 12
  },
  adminOptionTextActive: {
    color: theme.text
  },
  adminOptionTextDark: {
    color: "#FADFC6"
  },
  adminOptionTextActiveDark: {
    color: "#FFFFFF"
  },
  adminStatusText: {
    color: theme.textMuted,
    fontWeight: "700",
    fontSize: 12
  },
  adminStatusTextDark: {
    color: theme.accent
  },
  adminActionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
    marginTop: 6
  },
  adminActionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FFFFFF"
  },
  adminActionButtonDark: {
    backgroundColor: "rgba(11, 93, 73, 0.16)",
    borderColor: "rgba(11, 93, 73, 0.45)"
  },
  adminActionText: {
    color: theme.textMuted,
    fontWeight: "700",
    fontSize: 12
  },
  adminActionTextDark: {
    color: theme.accent
  },
  adminPrimaryButton: {
    backgroundColor: theme.accent,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center"
  },
  adminPrimaryButtonDark: {
    backgroundColor: "#FB923C"
  },
  adminPrimaryText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12
  },
  adminPrimaryTextDark: {
    color: "#1B0F07"
  },
  adminGhostButton: {
    borderWidth: 1,
    borderColor: theme.accent,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#FFFFFF"
  },
  adminGhostButtonDark: {
    borderColor: "rgba(11, 93, 73, 0.45)",
    backgroundColor: "rgba(11, 93, 73, 0.16)"
  },
  adminGhostText: {
    color: theme.textMuted,
    fontWeight: "700",
    fontSize: 12
  },
  adminGhostTextDark: {
    color: theme.accent
  },
  adminDangerButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#DC2626"
  },
  adminDangerButtonDark: {
    backgroundColor: "#991B1B"
  },
  adminDangerText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12
  },
  adminDangerTextDark: {
    color: "#FEE2E2"
  },
  adminFieldLabel: {
    color: theme.textMuted,
    fontWeight: "600",
    fontSize: 12,
    marginTop: 4
  },
  adminFieldLabelDark: {
    color: "#E1C2A8"
  },
  adminInput: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    color: theme.text
  },
  adminInputDark: {
    borderColor: "rgba(11, 93, 73, 0.28)",
    backgroundColor: "rgba(24, 14, 9, 0.9)",
    color: "#FFFFFF"
  },
  adminDropdown: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#FFFFFF"
  },
  adminDropdownDark: {
    borderColor: "rgba(11, 93, 73, 0.28)",
    backgroundColor: "rgba(24, 14, 9, 0.9)"
  },
  adminDropdownText: {
    color: theme.text,
    fontWeight: "600"
  },
  adminDropdownTextDark: {
    color: "#FFFFFF"
  },
  adminDropdownMenu: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#FFFFFF"
  },
  adminDropdownMenuDark: {
    borderColor: "rgba(11, 93, 73, 0.28)",
    backgroundColor: "rgba(24, 14, 9, 0.95)"
  },
  adminDropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.06)"
  },
  adminDropdownItemText: {
    color: theme.text,
    fontWeight: "600"
  },
  adminDropdownItemTextDark: {
    color: "#FFFFFF"
  },
  adminPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: theme.accent,
    backgroundColor: "#FFFFFF",
    flexGrow: 0,
    minWidth: 0,
    alignItems: "center"
  },
  adminPillDark: {
    borderColor: "rgba(11, 93, 73, 0.45)",
    backgroundColor: "rgba(11, 93, 73, 0.16)"
  },
  adminPillActive: {
    borderColor: theme.accent,
    backgroundColor: "#FFFFFF"
  },
  adminPillActiveDark: {
    borderColor: "rgba(11, 93, 73, 0.9)",
    backgroundColor: "rgba(11, 93, 73, 0.32)"
  },
  adminPillText: {
    color: theme.textMuted,
    fontWeight: "700",
    fontSize: 10
  },
  adminPillTextDark: {
    color: theme.accent
  },
  adminModalSheet: {
    backgroundColor: "#FFF7F0",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "92%",
    paddingBottom: 24,
    borderWidth: 1,
    borderColor: "#FFFFFF"
  },
  adminModalSheetDark: {
    backgroundColor: "#130B07",
    borderColor: "rgba(11, 93, 73, 0.28)"
  },
  adminModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF"
  },
  adminModalHeaderDark: {
    borderBottomColor: "rgba(11, 93, 73, 0.2)"
  },
  adminModalTitle: {
    color: theme.text,
    fontWeight: "700",
    fontSize: 16
  },
  adminModalTitleDark: {
    color: "#FFFFFF"
  },
  adminModalClose: {
    color: theme.textMuted,
    fontWeight: "700"
  },
  adminModalCloseDark: {
    color: theme.accent
  },
  adminModalContent: {
    padding: 20
  },
  adminModalContentDark: {
    padding: 18
  },
  adminSeatCard: {
    backgroundColor: "#FFF7F0",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    padding: 14,
    marginBottom: 12,
    shadowColor: theme.accent,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    gap: 6
  },
  adminSeatCardDark: {
    backgroundColor: "rgba(24, 14, 9, 0.92)",
    borderColor: "rgba(11, 93, 73, 0.2)"
  },
  adminSeatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  adminSeatTitle: {
    color: theme.text,
    fontWeight: "700"
  },
  adminSeatTitleDark: {
    color: "#FFFFFF"
  },
  adminSeatBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999
  },
  adminSeatBadgeOpen: {
    backgroundColor: "#DFF4E4"
  },
  adminSeatBadgeFull: {
    backgroundColor: "#F8D7D7"
  },
  adminSeatBadgeText: {
    color: "#2F2A24",
    fontWeight: "700",
    fontSize: 11
  },
  adminSeatBadgeTextDark: {
    color: "#0A0A0A"
  },
  adminSeatMeta: {
    color: theme.textMuted,
    fontSize: 12
  },
  adminSeatMetaDark: {
    color: "#D8B99E"
  },
  adminBottomNav: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderTopColor: "#FFFFFF",
    borderBottomColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: 12,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3
  },
  adminBottomNavDark: {
    backgroundColor: "#1B120B",
    borderColor: "rgba(11, 93, 73, 0.3)"
  },
  adminNavScroll: {
    gap: 6,
    paddingVertical: 0,
    paddingHorizontal: 4
  },
  adminNavItemDark: {
    backgroundColor: "transparent"
  },
  adminNavItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 10,
    minWidth: 40
  },
  adminNavItemActive: {
    backgroundColor: "rgba(11, 93, 73, 0.12)"
  },
  adminNavItemActiveDark: {
    backgroundColor: "rgba(11, 93, 73, 0.2)"
  },
  adminNavIconWrap: {
    width: 36,
    height: 26,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  adminNavIconWrapActive: {
    backgroundColor: theme.accent,
    shadowColor: theme.accent,
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4
  },
  adminNavActiveDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: theme.accent,
    marginTop: 0
  },
  adminNavText: {
    color: theme.textMuted,
    fontWeight: "600",
    fontSize: 9,
    textAlign: "center"
  },
  adminNavTextActive: {
    color: theme.accent
  },
  adminNavTextDark: {
    color: "#FADFC6"
  },
  adminNavTextActiveDark: {
    color: theme.accent
  },
  compactBottomNav: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 12,
    backgroundColor: "rgba(10, 10, 10, 0.92)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5
  },
  compactNavScroll: {
    gap: 8,
    paddingVertical: 2
  },
  compactNavItem: {
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 2
  },
  compactNavPill: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)"
  },
  compactNavPillActive: {
    backgroundColor: "rgba(11, 93, 73, 0.24)",
    borderColor: "rgba(11, 93, 73, 0.65)"
  },
  compactNavText: {
    color: "#F5F5F5",
    fontWeight: "600",
    fontSize: 11
  },
  compactNavDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "transparent"
  },
  compactNavDotActive: {
    backgroundColor: theme.accent
  },
  adminContainer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 16
  },
  adminTabs: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
  adminTabButton: {
    width: 140,
    height: 88,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.18)",
    backgroundColor: "rgba(12, 12, 12, 0.55)",
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: "space-between"
  },
  adminTabActive: {
    borderColor: theme.accent,
    backgroundColor: "rgba(11, 93, 73, 0.18)",
    shadowColor: theme.accent,
    shadowOpacity: 0.15,
    shadowRadius: 8
  },
  adminTabText: {
    color: "#F5F5F5",
    fontWeight: "700",
    fontSize: 12
  },
  adminTopNav: {
    gap: 10,
    paddingTop: 0,
    paddingBottom: 0
  },
  adminContentTight: {
    marginTop: -6
  },
  adminSection: {
    gap: 12
  },
  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 6
  },
  statsCard: {
    flex: 1,
    minWidth: 140,
    backgroundColor: "rgba(20, 20, 20, 0.85)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    padding: 12,
    gap: 6
  },
  statsLabel: {
    color: "#BFBFBF",
    fontSize: 12
  },
  statsValue: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 18
  },
  adminChipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8
  },
  adminChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DCCBB1",
    backgroundColor: "#FFF8EE"
  },
  adminChipDark: {
    borderColor: "rgba(11, 93, 73, 0.35)",
    backgroundColor: "rgba(11, 93, 73, 0.12)"
  },
  adminChipActive: {
    borderColor: theme.accentStrong,
    backgroundColor: "#E7CFA7"
  },
  adminChipActiveDark: {
    borderColor: "rgba(11, 93, 73, 0.8)",
    backgroundColor: "rgba(11, 93, 73, 0.28)"
  },
  adminChipText: {
    color: "#6B4B1E",
    fontWeight: "600",
    fontSize: 12
  },
  adminChipTextDark: {
    color: "#E2C28B"
  },
  staffContainer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 16
  },
  staffHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  staffBadgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  staffTitle: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "700"
  },
  staffBadge: {
    backgroundColor: "rgba(11, 93, 73, 0.25)",
    color: theme.accent,
    fontWeight: "700",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    overflow: "hidden"
  },
  staffCard: {
    backgroundColor: "rgba(20, 20, 20, 0.85)",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    gap: 8
  },
  staffCardTitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16
  },
  staffCardText: {
    color: theme.textMuted,
    fontSize: 12
  },
  staffOrderCard: {
    backgroundColor: theme.cardBg,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: theme.border,
    marginBottom: 12,
    gap: 6
  },
  staffOrderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  staffOrderTitle: {
    color: theme.text,
    fontWeight: "700"
  },
  staffOrderStatus: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 12
  },
  staffOrderMeta: {
    color: theme.textMuted,
    fontSize: 12
  },
  staffActionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 6,
    alignItems: "center"
  },
  staffActionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: theme.accent
  },
  staffActionText: {
    color: theme.primaryText,
    fontWeight: "700",
    fontSize: 12
  },
  dangerButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#7F1D1D"
  },
  dangerButtonText: {
    color: "#FEE2E2",
    fontWeight: "700",
    fontSize: 12
  },
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 8
  },
  topbarFixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(11, 93, 73, 0.25)"
  },
  topbarFixedDark: {
    backgroundColor: "rgba(18, 18, 18, 0.96)",
    borderBottomColor: "rgba(11, 93, 73, 0.25)"
  },
  topbarSpacer: {
    height: 62
  },
  topbarLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1
  },
  topbarRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  cartIconButton: {
    borderWidth: 1,
    borderColor: "rgba(11, 93, 73, 0.6)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(11, 93, 73, 0.12)",
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  cartIconText: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 12
  },
  cartBadge: {
    minWidth: 18,
    height: 18,
    borderRadius: 999,
    backgroundColor: "#DC2626",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4
  },
  cartBadgeText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 10
  },
  menuButton: {
    borderWidth: 1,
    borderColor: "rgba(11, 93, 73, 0.6)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(11, 93, 73, 0.12)"
  },
  menuButtonText: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 12
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.borderAccent,
    alignItems: "center",
    justifyContent: "center"
  },
  profileIconText: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 12
  },
  profileHero: {
    alignItems: "center",
    marginBottom: 16,
    gap: 6
  },
  paymentNotice: {
    marginBottom: 10
  },
  cardBlock: {
    marginBottom: 12
  },
  savedCardItem: {
    backgroundColor: theme.cardBg,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 12,
    marginBottom: 10
  },
  savedCardItemActive: {
    borderColor: theme.accent,
    backgroundColor: theme.accentTint
  },
  expiryRow: {
    flexDirection: "row",
    gap: 10
  },
  expiryInput: {
    flex: 1
  },
  profileTabs: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
    backgroundColor: theme.tabsBg,
    borderRadius: 14,
    padding: 6,
    borderWidth: 1,
    borderColor: theme.border
  },
  profileTabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center"
  },
  profileTabButtonActive: {
    backgroundColor: "rgba(11, 93, 73, 0.25)"
  },
  profileTabText: {
    color: theme.textMuted,
    fontWeight: "700",
    fontSize: 11
  },
  profileTabTextActive: {
    color: theme.accent
  },
  profileIconLarge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: theme.borderAccent,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.accentTint
  },
  profileIconTextLarge: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 20
  },
  profileName: {
    color: theme.text,
    fontWeight: "700",
    fontSize: 16
  },
  profileMeta: {
    color: theme.textMuted,
    fontSize: 12
  },
  profileSectionHeader: {
    marginBottom: 8
  },
  link: {
    color: theme.accent,
    fontWeight: "600"
  },
  catalogList: {
    paddingHorizontal: 24,
    paddingBottom: 30
  },
  heroBlock: {
    marginTop: 30,
    marginBottom: 18
  },
  bottomNavSpace: {
    paddingBottom: 110
  },
  bottomNavWrap: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 24,
    alignItems: "center"
  },
  bottomNav: {
    width: "100%",
    backgroundColor: theme.navBg,
    borderRadius: 999,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10
  },
  bottomNavItem: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomNavItemActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.navActive,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    gap: 6
  },
  bottomNavTextActive: {
    color: theme.navBg,
    fontWeight: "700",
    fontSize: 13
  },
  heroSidebarToggle: {
    alignSelf: "center",
    marginTop: 0,
    borderWidth: 1,
    borderColor: theme.borderAccent,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: theme.accentTint
  },
  heroSidebarToggleText: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 1
  },
  profileCard: {
    backgroundColor: theme.cardBg,
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: theme.border
  },
  profileLabel: {
    color: theme.textMuted,
    fontSize: 11,
    letterSpacing: 1,
    marginTop: 8
  },
  profileValue: {
    color: theme.text,
    fontWeight: "700"
  },
  orderSummary: {
    backgroundColor: theme.cardBg,
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: theme.border
  },
  openOrderButton: {
    backgroundColor: theme.accent,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: theme.modalOverlay,
    justifyContent: "flex-end"
  },
  modalSheet: {
    backgroundColor: theme.panelBg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "90%",
    paddingBottom: 24
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.border
  },
  modalTitle: {
    color: theme.text,
    fontWeight: "700",
    fontSize: 16
  },
  modalClose: {
    color: theme.accent,
    fontWeight: "700"
  },
  modalContent: {
    padding: 20
  },
  drawerOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    zIndex: 20
  },
  drawerBackdrop: {
    flex: 1
  },
  drawerPanel: {
    width: 220,
    backgroundColor: theme.panelBg,
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 10,
    borderRightWidth: 1,
    borderRightColor: theme.border,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6
  },
  drawerTitle: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 8,
    letterSpacing: 1
  },
  drawerItem: {
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: theme.panelItemBg
  },
  drawerItemActive: {
    borderColor: theme.accent,
    backgroundColor: "rgba(11, 93, 73, 0.2)"
  },
  drawerItemDanger: {
    borderColor: "rgba(239, 68, 68, 0.5)"
  },
  drawerItemText: {
    color: theme.text,
    fontWeight: "700",
    fontSize: 13
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  sectionActions: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },
  filterRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: theme.border,
    backgroundColor: theme.chipBg
  },
  filterChipActive: {
    borderColor: theme.accent,
    backgroundColor: theme.accent
  },
  filterChipText: {
    color: theme.textMuted,
    fontWeight: "700",
    fontSize: 12
  },
  filterChipTextActive: {
    color: theme.primaryText
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: theme.accent
  },
  trendingRow: {
    gap: 12,
    paddingBottom: 10
  },
  trendingCard: {
    width: 240,
    backgroundColor: theme.cardBg,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: theme.border,
    overflow: "hidden"
  },
  trendingBody: {
    padding: 12,
    gap: 6
  },
  trendingTitle: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 15
  },
  trendingMeta: {
    color: theme.textMuted,
    fontSize: 12
  },
  orderMiniButton: {
    marginTop: 8,
    alignItems: "flex-start"
  },
  orderMiniText: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 12
  },
  seatMapLegend: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10
  },
  seatMapChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  seatMapChipDot: {
    width: 8,
    height: 8,
    borderRadius: 4
  },
  seatMapChipText: {
    color: "#7B6D61",
    fontSize: 11,
    fontWeight: "600"
  },
  seatMapGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12
  },
  seatMapTile: {
    flexGrow: 1,
    flexBasis: "48%",
    minWidth: 130,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E7D9C2",
    padding: 12,
    gap: 6
  },
  seatMapTileFree: {
    backgroundColor: "#F2FBF6",
    borderColor: "#34D399"
  },
  seatMapTilePending: {
    backgroundColor: "#FFF6E5",
    borderColor: "#FCD34D"
  },
  seatMapTileBooked: {
    backgroundColor: "#FFF1F1",
    borderColor: "#F87171"
  },
  seatMapTitleFree: {
    color: "#15803D"
  },
  seatMapTitlePending: {
    color: "#B45309"
  },
  seatMapTitleBooked: {
    color: "#B91C1C"
  },
  seatMapMetaFree: {
    color: "#2F855A"
  },
  seatMapMetaPending: {
    color: "#B7791F"
  },
  seatMapMetaBooked: {
    color: "#C53030"
  },
  seatMapCard: {
    backgroundColor: "rgba(20, 20, 20, 0.85)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    padding: 14,
    marginBottom: 12,
    gap: 6
  },
  seatMapHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  seatMapTitle: {
    color: "#2D201A",
    fontWeight: "700"
  },
  seatMapMeta: {
    color: "#7D5B4A",
    fontSize: 12
  },
  seatMapBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999
  },
  seatMapBadgeOpen: {
    backgroundColor: "rgba(34, 197, 94, 0.2)"
  },
  seatMapBadgeFull: {
    backgroundColor: "rgba(239, 68, 68, 0.2)"
  },
  seatMapBadgeText: {
    color: theme.text,
    fontWeight: "700",
    fontSize: 11
  },
  menuCard: {
    backgroundColor: theme.cardBg,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.border,
    shadowColor: "#000000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3
  },
  cardImage: {
    width: "100%",
    height: 160
  },
  cardImagePlaceholder: {
    height: 160,
    backgroundColor: "#1F1F1F",
    alignItems: "center",
    justifyContent: "center"
  },
  cardImageText: {
    color: "#9CA3AF",
    fontSize: 12
  },
  menuMetaStrip: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F6EAD8",
    paddingVertical: 6,
    paddingHorizontal: 10
  },
  menuMetaText: {
    color: "#7B4F1F",
    fontSize: 11,
    fontWeight: "700"
  },
  menuContent: {
    padding: 12,
    gap: 6
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: theme.text
  },
  menuDescription: {
    fontSize: 12,
    color: theme.textMuted
  },
  menuRating: {
    fontSize: 12,
    color: theme.textMuted
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999
  },
  statusOk: {
    backgroundColor: "#D1FAE5"
  },
  statusNo: {
    backgroundColor: "#FEE2E2"
  },
  statusText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1F2937"
  },
  orderCard: {
    backgroundColor: theme.cardBg,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.border
  },
  orderTypeRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12
  },
  orderTypeButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.borderAccent
  },
  orderTypeActive: {
    backgroundColor: theme.accentSoft
  },
  orderTypeText: {
    color: theme.text,
    fontWeight: "600",
    fontSize: 12
  },
  orderDropdown: {
    borderWidth: 1,
    borderColor: theme.borderAccent,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: theme.inputBg
  },
  orderDropdownOpen: {
    borderColor: theme.accent
  },
  orderDropdownText: {
    color: theme.text,
    fontWeight: "600"
  },
  orderDropdownList: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 12,
    padding: 8,
    gap: 6
  },
  orderDropdownOption: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.border,
    backgroundColor: theme.inputBg
  },
  orderDropdownOptionActive: {
    borderColor: theme.accent,
    backgroundColor: theme.accentFade
  },
  orderDropdownOptionText: {
    color: theme.text,
    fontWeight: "600"
  },
  orderDropdownOptionTextActive: {
    color: theme.accent
  },
  tableRow: {
    gap: 10,
    paddingBottom: 10
  },
  tableChip: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
    backgroundColor: theme.chipBg,
    minWidth: 120
  },
  tableChipActive: {
    borderColor: theme.accent
  },
  tableChipTitle: {
    color: theme.text,
    fontWeight: "700"
  },
  tableChipMeta: {
    color: theme.textMuted,
    fontSize: 11
  },
  cartBox: {
    marginTop: 8,
    gap: 10
  },
  cartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.cardBg,
    padding: 10,
    borderRadius: 10
  },
  cartInfo: {
    flex: 1
  },
  cartName: {
    color: theme.text,
    fontWeight: "600"
  },
  cartMeta: {
    color: theme.textMuted,
    fontSize: 11
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  qtyButton: {
    backgroundColor: theme.accent,
    borderWidth: 1,
    borderColor: theme.borderAccent,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    minWidth: 32,
    alignItems: "center"
  },
  qtyText: {
    color: theme.primaryText,
    fontWeight: "700"
  },
  qtyValue: {
    color: theme.text,
    fontWeight: "700"
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6
  },
  totalLabel: {
    color: theme.text,
    fontWeight: "700"
  },
  totalValue: {
    color: theme.accent,
    fontWeight: "700"
  },
  placeOrderButton: {
    backgroundColor: theme.accent,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 6
  },
  cardActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
    alignItems: "center"
  },
  orderActionRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10
  },
  actionGhost: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.borderAccent,
    backgroundColor: theme.accentTint,
    minWidth: 120,
    alignItems: "center",
    justifyContent: "center"
  },
  actionGhostActive: {
    backgroundColor: theme.accent,
    borderColor: theme.accent
  },
  actionGhostText: {
    color: theme.accent,
    fontWeight: "700",
    fontSize: 12
  },
  actionGhostActiveText: {
    color: "#FFFFFF"
  },
  actionPrimary: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: theme.accent,
    minWidth: 120,
    alignItems: "center",
    justifyContent: "center"
  },
  actionPrimaryText: {
    color: theme.primaryText,
    fontWeight: "700",
    fontSize: 12
  },
  addButton: {
    marginTop: 8,
    backgroundColor: theme.accent,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center"
  },
  addButtonText: {
    color: "#0A0A0A",
    fontWeight: "700",
    fontSize: 12
  }
});

export { lightTheme, darkTheme, createStyles };
