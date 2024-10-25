export const PATH_NAME = {
  home: "/",
  login: "/login",
  register: "/register",
  napTien: {
    root: "/naptien",
    napThe: "/naptien/nap-the",
    napAtm: "/naptien/nap-atm",
    lichSu: "/naptien/lich-su-nap",
  },
  download: "/download",
  giftCode: "/giftCode",
};
export const LIST_NAVIGATION = [
  {
    text: "Trang chủ",
    path: "/",
  },
  {
    text: "Tải game",
    path: PATH_NAME.download,
  },
  {
    text: "GiftCode",
    path: PATH_NAME.giftCode,
  },
  {
    text: "Nạp tiền",
    path: PATH_NAME.napTien.root,
  },
];
