import homeActiveIcon from "../../assets/icons/home_filled_icon.svg";
import homeInactiveIcon from "../../assets/icons/home_outline_icon.svg";
import historyIcon from "../../assets/icons/history_icon.svg";
import settingIcon from "../../assets/icons/setting_icon.svg";
import { useSelector } from "react-redux";

const topNavigationInfo = [
  {
    label: "Home",
    to: "/home",
    icons: {
      active: homeActiveIcon,
      inactive: homeInactiveIcon,
    },
  },
  {
    label: "History",
    to: "/history",
    icons: {
      active: historyIcon,
      inactive: historyIcon,
    },
  },
];

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  return (
    <>
      <div
        className={`h-[calc(100vh-4rem)] py-7 -my-0.5 flex flex-col gap-5 text-white justify-between ${
          isSidebarOpen ? "w-55 px-5" : "w-20 px-4"
        }`}
      >
        {/* top navigation */}
        <div
          className={`${
            isSidebarOpen ? "items-start" : "items-center"
          } flex flex-col gap-6`}
        >
          {topNavigationInfo.map((element) => {
            return (
              <div
                key={element.label}
                className={`flex ${
                  isSidebarOpen ? "gap-5" : "flex-col gap-2"
                } items-center`}
              >
                <img
                  src={element.icons.active}
                  alt={element.label}
                  className="w-7 h-7"
                />
                <span
                  className={`${
                    isSidebarOpen ? "text-lg font-medium" : "text-sm"
                  }`}
                >
                  {element.label}
                </span>
              </div>
            );
          })}
        </div>
        {/* bottom navigation */}
        <div>
          <div
            className={`flex ${
              isSidebarOpen ? "gap-5" : "flex-col gap-2"
            } items-center`}
          >
            <img src={settingIcon} alt={"Settings"} className="w-7 h-7" />
            <span
              className={`${isSidebarOpen ? "text-lg font-medium" : "text-sm"}`}
            >
              Settings
            </span>
          </div>
          {/* toggle button for light and dark */}
          <div className="w-2"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
