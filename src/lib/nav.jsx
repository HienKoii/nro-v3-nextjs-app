import { faDollarSign, faHistory, faUnlockAlt, faUserAlt, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NAV_DROP_DOWN = [
  {
    path: "/",
    icon: <FontAwesomeIcon icon={faUserAlt} />,
    name: "Thông tin cá nhân",
    isAdmin: false,
  },
  {
    path: "/",
    icon: <FontAwesomeIcon icon={faUnlockAlt} />,
    name: "Đổi mật khẩu",
    isAdmin: false,
  },
  {
    path: "/naptien",
    icon: <FontAwesomeIcon icon={faDollarSign} />,
    name: "Nạp tiền",
    isAdmin: false,
  },
  {
    path: "/",
    icon: <FontAwesomeIcon icon={faHistory} />,
    name: "Lịch sử nạp tiền",
    isAdmin: false,
  },
  {
    path: "/",
    icon: <FontAwesomeIcon icon={faUserCog} />,
    name: "Admin control",
    isAdmin: true,
  },
];
