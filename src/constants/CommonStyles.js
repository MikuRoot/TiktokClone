import { LocalColors } from "./Colors";

const CommonStyles = {
  // ——————————————————— FLEX ———————————————————
  f1: { flex: 1 },
  f1_5: { flex: 1.5 },
  f2: { flex: 2 },
  f3: { flex: 3 },
  f4: { flex: 4 },
  flexGrow_1: { flexGrow: 1 },
  flexShrink_1: { flexShrink: 1 },
  flexWrap: { flexWrap: "wrap" },
  flexRow: { flexDirection: "row" },

  // ——————————————————— GLOW BACKGROUND EFFECTS ———————————————————

  // ——————————————————— GLOW BACKGROUND EFFECTS ———————————————————
  // Tương ứng với 2 div blur ở cuối HTML của bạn

  bgGlowYellow: {
    position: "absolute",
    top: 80, // top-20 (20 * 4px)
    left: -80, // -left-20
    width: 256, // w-64 (64 * 4px)
    height: 256, // h-64
    backgroundColor: "rgba(254, 240, 138, 0.2)", // bg-yellow-200/20
    borderRadius: 128, // rounded-full
    opacity: 0.3, // Giả lập hiệu ứng blur nếu không dùng thư viện blur
    zIndex: -1,
  },

  bgGlowBlue: {
    position: "absolute",
    top: 160, // top-40
    right: -80, // -right-20
    width: 288, // w-72
    height: 288, // h-72
    backgroundColor: "rgba(191, 219, 254, 0.2)", // bg-blue-200/20
    borderRadius: 144,
    opacity: 0.3,
    zIndex: -1,
  },

  gradientBackground: {
    backgroundColor: LocalColors.background_light, // Màu mặc định (Light mode) theo HTML của bạn
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: LocalColors.white,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20, // Cho Android
  },

  // ——————————————————— JUSTIFY CONTENT ———————————————————
  justifyContentToSpaceBetween: { justifyContent: "space-between" },
  justifyContentToCenter: { justifyContent: "center" },
  justifyContentEvenly: { justifyContent: "space-evenly" },
  justifyContentToEnd: { justifyContent: "flex-end" },

  // ——————————————————— ALIGNMENT ———————————————————
  alignSelfToCenter: { alignSelf: "center" },
  alignSelfToStart: { alignSelf: "flex-start" },
  alignSelfToEnd: { alignSelf: "flex-end" },
  alignSelfStretch: { alignSelf: "stretch" },
  alignItemsToCenter: { alignItems: "center" },
  alignItemsToStart: { alignItems: "flex-start" },
  alignItemsToEnd: { alignItems: "flex-end" },
  alignItemsToStretch: { alignItems: "stretch" },

  // ——————————————————— BACKGROUND COLOR ———————————————————
  // gray
  backgroundColor_appTheme: { backgroundColor: LocalColors.appTheme },
  backgroundColor_white: { backgroundColor: LocalColors.white },
  backgroundColor_defaultWhite: { backgroundColor: LocalColors.defaultWhite },
  backgroundColor_black: { backgroundColor: LocalColors.dark },
  backgroundColor_gray: { backgroundColor: LocalColors.gray },
  backgroundColor_extreme_lightgray: {
    backgroundColor: LocalColors.extremeLightGray,
  },
  backgroundColor_extreme_lightgray2: {
    backgroundColor: LocalColors.extremeLightGray2,
  },
  backgroundColor_lightGray: { backgroundColor: LocalColors.lightGray },
  backgroundColor_dimGray: { backgroundColor: LocalColors.dimgray },
  backgroundColor_lightDimGray: { backgroundColor: LocalColors.lightDimGray },

  // Blues
  backgroundColor_blue: { backgroundColor: LocalColors.blue },
  backgroundColor_deepBlue: { backgroundColor: LocalColors.deepBlue },
  backgroundColor_royalBlue: { backgroundColor: LocalColors.deepRoyalBlue },
  backgroundColor_royalBlue_blurry: {
    backgroundColor: LocalColors.blurryDeepRoyalBlue,
  },
  backgroundColor_lightBlue: { backgroundColor: LocalColors.lightBlue },
  backgroundColor_lightBlue2: { backgroundColor: LocalColors.lightBlue2 },
  backgroundColor_lightBlue3: { backgroundColor: LocalColors.lightBlue3 },
  backgroundColor_lightBlue4: { backgroundColor: LocalColors.lightBlue4 },
  backgroundColor_lightBlue5: { backgroundColor: LocalColors.lightBlue5 },

  // Reds
  backgroundColor_red: { backgroundColor: LocalColors.red },
  backgroundColor_boldRed: { backgroundColor: LocalColors.brickRed },
  backgroundColor_lightRed: {
    backgroundColor: LocalColors.slightlyBrighterRed,
  },
  backgroundColor_lightRed1: { backgroundColor: LocalColors.lightRed1 },
  backgroundColor_blurry_red: { backgroundColor: LocalColors.lightRed },

  // Greens
  backgroundColor_green: { backgroundColor: LocalColors.lightGreen },
  backgroundColor_blurry_green: {
    backgroundColor: LocalColors.blurryLightGreen,
  },

  // Mint
  backgroundColor_paleMint: { backgroundColor: LocalColors.paleMint },

  // Violets & Others
  backgroundColor_violet: { backgroundColor: LocalColors.violet },
  backgroundColor_lightViolet: { backgroundColor: LocalColors.lightViolet },

  // Blurry Whites
  backgroundColor_blurry_white: { backgroundColor: LocalColors.blurryWhite },
  backgroundColor_blurry_white2: { backgroundColor: LocalColors.blurryWhite2 },

  // yellow
  backgroundColor_yellow: { backgroundColor: LocalColors.yellow },

  // Transparent Shades
  backgroundColor_transparent: {
    black_shade: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
    medium_black_shade: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
    light_black_shade: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
    invisible: { backgroundColor: "transparent" },
  },

  // ——————————————————— TEXT & FONT ———————————————————
  textColor_appTheme: { color: LocalColors.appTheme },
  textColor_black: { color: LocalColors.dark },
  textColor_white: { color: LocalColors.white },
  textColor_gray: { color: LocalColors.gray },
  textColor_light_gray: { color: LocalColors.lightGray },
  textColor_red: { color: LocalColors.slightlyBrighterRed },
  textColor_blue: { color: LocalColors.blue },
  textColor_deepBlue: { color: LocalColors.deepBlue },
  textColor_royalBlue: { color: LocalColors.deepRoyalBlue },
  textColor_green: { color: LocalColors.lightGreen },

  fontBold: { fontWeight: "bold" },
  fontWeight_800: { fontWeight: 800 },
  fontWeight_700: { fontWeight: 700 },
  fontWeight_600: { fontWeight: 600 },
  fontWeight_500: { fontWeight: 500 },

  fontSize_40: { fontSize: 40 },
  fontSize_34: { fontSize: 34 },
  fontSize_28: { fontSize: 28 },
  fontSize_24: { fontSize: 24 },
  fontSize_22: { fontSize: 22 },
  fontSize_20: { fontSize: 20 },
  fontSize_18: { fontSize: 18 },
  fontSize_16: { fontSize: 16 },
  fontSize_14: { fontSize: 14 },
  fontSize_12: { fontSize: 12 },
  fontSize_11: { fontSize: 11 },
  fontSize_6: { fontSize: 6 },

  lineHeight_35: { lineHeight: 35 },
  lineHeight_26: { lineHeight: 26 },
  lineHeight_24: { lineHeight: 24 },
  lineHeight_20: { lineHeight: 20 },
  letterSpacing_2: { letterSpacing: 2 },

  textAlign_center: { textAlign: "center" },
  textAlign_left: { textAlign: "left" },
  textAlign_right: { textAlign: "right" },

  textDecorationLine: {
    underline: { textDecorationLine: "underline" },
    lineThrough: { textDecorationLine: "line-through" },
    underline_lineThrough: { textDecorationLine: "underline line-through" },
  },

  // ——————————————————— MARGIN ———————————————————
  mrgn_30: { margin: 30 },
  mrgn_20: { margin: 20 },
  mrgn_0: { margin: 0 },

  mrgn_top_100: { marginTop: 100 },
  mrgn_top_80: { marginTop: 80 },
  mrgn_top_60: { marginTop: 60 },
  mrgn_top_40: { marginTop: 40 },
  mrgn_top_30: { marginTop: 30 },
  mrgn_top_20: { marginTop: 20 },
  mrgn_top_10: { marginTop: 10 },
  mrgn_top_8: { marginTop: 8 },
  mrgn_top_5: { marginTop: 5 },
  mrgn_top_neg_170: { marginTop: -170 },
  mrgn_top_neg_60: { marginTop: -60 },
  mrgn_top_neg_20: { marginTop: -20 },
  mrgn_top_ne_5: { marginTop: -5 },

  mrgn_bottom_40: { marginBottom: 40 },
  mrgn_bottom_30: { marginBottom: 30 },
  mrgn_bottom_20: { marginBottom: 20 },
  mrgn_bottom_15: { marginBottom: 15 },
  mrgn_bottom_10: { marginBottom: 10 },
  mrgn_bottom_5: { marginBottom: 5 },

  mrgn_left_50: { marginLeft: 50 },
  mrgn_left_20: { marginLeft: 20 },
  mrgn_left_10: { marginLeft: 10 },
  mrgn_left_5: { marginLeft: 5 },
  mrgn_left_0: { marginLeft: 0 },
  mrgn_left_neg_30: { marginLeft: -40 },
  mrgn_left_neg_20: { marginLeft: -20 },

  mrgn_right_90: { marginRight: 90 },
  mrgn_right_20: { marginRight: 20 },
  mrgn_right_10: { marginRight: 10 },
  mrgn_right_5: { marginRight: 5 },
  mrgn_right_neg_20: { marginRight: -20 },

  mrgn_horizontal_70: { marginHorizontal: 70 },
  mrgn_horizontal_30: { marginHorizontal: 30 },
  mrgn_horizontal_20: { marginHorizontal: 20 },
  mrgn_horizontal_15: { marginHorizontal: 15 },
  mrgn_horizontal_10: { marginHorizontal: 10 },
  mrgn_horizontal_5: { marginHorizontal: 5 },
  mrgn_horizontal_neg_20: { marginHorizontal: -20 },
  mrgn_horizontal_neg_10: { marginHorizontal: -10 },

  mrgn_vertical_40: { marginVertical: 40 },
  mrgn_vertical_30: { marginVertical: 30 },
  mrgn_vertical_20: { marginVertical: 20 },
  mrgn_vertical_15: { marginVertical: 15 },
  mrgn_vertical_12: { marginVertical: 12 },
  mrgn_vertical_10: { marginVertical: 10 },
  mrgn_vertical_5: { marginVertical: 5 },
  mrgn_vertical_neg_20: { marginVertical: -20 },

  // ——————————————————— PADDING ———————————————————
  pd_10: { padding: 10 },
  pd_5: { padding: 5 },

  pd_top_40: { paddingTop: 40 },
  pd_top_20: { paddingTop: 20 },
  pd_top_10: { paddingTop: 10 },

  pd_bottom_140: { paddingBottom: 140 },
  pd_bottom_80: { paddingBottom: 80 },
  pd_bottom_60: { paddingBottom: 60 },
  pd_bottom_40: { paddingBottom: 40 },
  pd_bottom_30: { paddingBottom: 30 },
  pd_bottom_20: { paddingBottom: 20 },
  pd_bottom_10: { paddingBottom: 10 },

  pd_left_20: { paddingLeft: 20 },
  pd_left_10: { paddingLeft: 10 },
  pd_left_5: { paddingLeft: 5 },

  pd_right_5: { paddingRight: 5 },
  pd_right_10: { paddingRight: 10 },

  pd_horizontal_30: { paddingHorizontal: 30 },
  pd_horizontal_20: { paddingHorizontal: 20 },
  pd_horizontal_15: { paddingHorizontal: 15 },
  pd_horizontal_10: { paddingHorizontal: 10 },
  pd_horizontal_5: { paddingHorizontal: 5 },
  pd_horizontal_0: { paddingHorizontal: 0 },

  pd_vertical_40: { paddingVertical: 40 },
  pd_vertical_30: { paddingVertical: 30 },
  pd_vertical_20: { paddingVertical: 20 },
  pd_vertical_15: { paddingVertical: 15 },
  pd_vertical_10: { paddingVertical: 10 },
  pd_vertical_5: { paddingVertical: 5 },
  pd_vertical_2: { paddingVertical: 2 },
  pd_vertical_0: { paddingVertical: 0 },

  // ——————————————————— BORDER ———————————————————
  borderWidth_1: { borderWidth: 1, borderColor: LocalColors.dark },

  border: {
    style: {
      dash: { borderStyle: "dashed" },
      dot: { borderStyle: "dotted" },
      double: { borderStyle: "double" },
    },
    size: {
      _0: { borderWidth: 0 },
      _05: { borderWidth: 0.5 },
      _1: { borderWidth: 1 },
      _2: { borderWidth: 2 },
      _3: { borderWidth: 3 },
    },
    color: {
      appTheme: { borderColor: LocalColors.appTheme },
      royalBlue: { borderColor: LocalColors.deepRoyalBlue },
      red: { borderColor: LocalColors.red },
      gray: { borderColor: LocalColors.gray },
      lightGreen: { borderColor: LocalColors.lightGreen },
      lightGray: { borderColor: LocalColors.lightGray },
      lightGray1: { borderColor: LocalColors.extremeLightGray },
      lightGray2: { borderColor: LocalColors.extremeLightGray2 },
      white: { borderColor: LocalColors.white },
      deepBlue: { borderColor: LocalColors.deepBlue },
      green: { borderColor: LocalColors.lightGreen },
    },
    top: {
      color: {
        appTheme: { borderTopColor: LocalColors.lightGreen },
        gray: { borderTopColor: LocalColors.lightGray },
      },
      size: {
        _0: { borderTopWidth: 0 },
        _05: { borderTopWidth: 0.5 },
        _1: { borderTopWidth: 1 },
      },
    },
    right: {
      color: {
        appTheme: { borderRightColor: LocalColors.lightGreen },
        gray: { borderRightColor: LocalColors.lightGray },
      },
      size: {
        _0: { borderRightWidth: 0 },
        _05: { borderRightWidth: 0.5 },
        _1: { borderRightWidth: 1 },
      },
    },
    left: {
      color: {
        appTheme: { borderLeftColor: LocalColors.lightGreen },
        gray: { borderLeftColor: LocalColors.lightGray },
      },
      size: {
        _0: { borderLeftWidth: 0 },
        _05: { borderLeftWidth: 0.5 },
        _1: { borderLeftWidth: 1 },
      },
    },
    bottom: {
      color: {
        appTheme: { borderBottomColor: LocalColors.lightGreen },
        gray: { borderBottomColor: LocalColors.lightGray },
        white: { borderBottomColor: LocalColors.white },
        red: { borderBottomColor: LocalColors.red },
        lightGray: { borderBottomColor: LocalColors.lightGray },
      },
      size: {
        _0: { borderBottomWidth: 0 },
        _05: { borderBottomWidth: 0.5 },
        _1: { borderBottomWidth: 1 },
        _2: { borderBottomWidth: 2 },
        _3: { borderBottomWidth: 3 },
      },
    },
  },

  // ——————————————————— BORDER RADIUS ———————————————————
  borderRadius: {
    _3: { borderRadius: 3 },
    _5: { borderRadius: 5 },
    _8: { borderRadius: 8 },
    _10: { borderRadius: 10 },
    _12: { borderRadius: 12 },
    _15: { borderRadius: 15 },
    _20: { borderRadius: 20 },
    _30: { borderRadius: 30 },
    _40: { borderRadius: 40 },
    _50: { borderRadius: 50 },
    top: {
      left: {
        _5: { borderTopLeftRadius: 5 },
        _10: { borderTopLeftRadius: 10 },
        _15: { borderTopLeftRadius: 15 },
        _20: { borderTopLeftRadius: 20 },
        _25: { borderTopLeftRadius: 25 },
        _30: { borderTopLeftRadius: 30 },
        _40: { borderTopLeftRadius: 40 },
        _60: { borderTopLeftRadius: 60 },
        _80: { borderTopLeftRadius: 80 },
      },
      right: {
        _5: { borderTopRightRadius: 5 },
        _10: { borderTopRightRadius: 10 },
        _15: { borderTopRightRadius: 15 },
        _20: { borderTopRightRadius: 20 },
        _25: { borderTopRightRadius: 25 },
        _30: { borderTopRightRadius: 30 },
        _40: { borderTopRightRadius: 40 },
        _60: { borderTopRightRadius: 60 },
        _80: { borderTopRightRadius: 80 },
      },
    },
    bottom: {
      left: {
        _5: { borderBottomLeftRadius: 5 },
        _10: { borderBottomLeftRadius: 10 },
        _15: { borderBottomLeftRadius: 15 },
        _20: { borderBottomLeftRadius: 20 },
        _25: { borderBottomLeftRadius: 25 },
        _30: { borderBottomLeftRadius: 30 },
        _40: { borderBottomLeftRadius: 40 },
        _60: { borderBottomLeftRadius: 60 },
        _80: { borderBottomLeftRadius: 80 },
      },
      right: {
        _5: { borderBottomRightRadius: 5 },
        _10: { borderBottomRightRadius: 10 },
        _15: { borderBottomRightRadius: 15 },
        _20: { borderBottomRightRadius: 20 },
        _25: { borderBottomRightRadius: 25 },
        _30: { borderBottomRightRadius: 30 },
        _40: { borderBottomRightRadius: 40 },
        _60: { borderBottomRightRadius: 60 },
        _80: { borderBottomRightRadius: 80 },
      },
    },
  },

  // ——————————————————— SHADOW ———————————————————
  shadow: {
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    shadowColor: LocalColors.dark,
    elevation: 10,
  },
  shadow_light: {
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    shadowColor: LocalColors.mediumGray,
    elevation: 4,
  },
  shadow_extreme_light: {
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    shadowColor: LocalColors.mediumGray,
    elevation: 4,
  },

  // ——————————————————— OVERFLOW ———————————————————
  overflowHidden: { overflow: "hidden" },
  overflowVisible: { overflow: "visible" },
  overflow: {
    show: { overflow: "visible" },
    hidden: { overflow: "hidden" },
  },

  // ——————————————————— POSITION ———————————————————
  position_absolute: { position: "absolute" },

  top_neg_30: { top: -30 },
  top_neg_5: { top: -5 },
  top_neg_3: { top: -3 },
  top_neg_2: { top: -2 },
  top_0: { top: 0 },
  top_5: { top: 5 },
  top_10: { top: 10 },
  top_20: { top: 20 },
  top_neg_150: { top: -150 },

  right_neg_22: { right: -22 },
  right_neg_10: { right: -10 },
  right_neg_7: { right: -7 },
  right_neg_5: { right: -5 },
  right_neg_3: { right: -3 },
  right_neg_2: { right: -2 },
  right_0: { right: 0 },
  right_5: { right: 5 },
  right_10: { right: 10 },
  right_20: { right: 20 },
  right_30: { right: 30 },

  left_0: { left: 0 },
  left_5: { left: 5 },
  left_10: { left: 10 },
  left_20: { left: 20 },
  left_30: { left: 30 },

  bottom_0: { bottom: 0 },
  bottom_4: { bottom: 4 },
  bottom_5: { bottom: 5 },
  bottom_10: { bottom: 10 },
  bottom_20: { bottom: 20 },
  bottom_40: { bottom: 40 },
  bottom_60: { bottom: 60 },
  bottom_100: { bottom: 100 },
  bottom_neg_10: { bottom: -10 },
  bottom_neg_30: { bottom: -30 },
  bottom_neg_90: { bottom: -90 },

  // ——————————————————— HEIGHT (HEADER) ———————————————————
  header: {
    height_770: { height: 770 },
    height_700: { height: 700 },
    height_600: { height: 600 },
    height_500: { height: 500 },
    height_400: { height: 400 },
    height_300: { height: 300 },
    height_200: { height: 200 },
    height_150: { height: 150 },
    height_120: { height: 120 },
    height_100: { height: 100 },
    height_90: { height: 90 },
    height_80: { height: 80 },
    height_70: { height: 70 },
    height_60: { height: 60 },
    height_50: { height: 50 },
    height_40: { height: 40 },
    height_30: { height: 30 },
    height_1: { height: 1 },
  },

  // ——————————————————— TINT COLOR ———————————————————
  tintColor: {
    appTheme: { tintColor: LocalColors.lightGreen },
    red: { tintColor: LocalColors.red },
    black: { tintColor: LocalColors.dark },
    deepBlue: { tintColor: LocalColors.deepBlue },
    lightGray: { tintColor: LocalColors.lightGray },
    gray: { tintColor: LocalColors.gray },
    green: { tintColor: LocalColors.lightGreen },
    white: { tintColor: LocalColors.white },
  },

  // ——————————————————— Z-INDEX ———————————————————
  zIndex: {
    _0: { zIndex: 0 },
    _1: { zIndex: 1 },
    _2: { zIndex: 2 },
  },

  // ——————————————————— DIVIDER ———————————————————
  divider: {
    horizontal: { height: 0.8 },
    vertical: { width: 0.8 },
    color: {
      appTheme: { borderColor: LocalColors.lightGreen },
      gray: { backgroundColor: LocalColors.gray },
    },
  },

  // ——————————————————— DOT ———————————————————
  dot: { width: 16, height: 16, borderRadius: 8 },
  smallDot: { width: 10, height: 10, borderRadius: 5 },
};

export default CommonStyles;
