import { NavLink } from "react-router-dom";
import { Dropdown, message } from "antd";
import downIcon from "../../assets/icons/down-arrow.svg";
import navbar_itmes_data from "../../utils/navbar";

const Items = () => {
  const handleMenuClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  return (
    <div className="flex flex-row gap-x-[30px] items-center">
      {navbar_itmes_data.map((item) => {
        const { id, title, path, children } = item;

        const itemPath = id === "5" ? "" : path;

        if (children?.length) {
          const dropdownItems = children.map((child) => ({
            label: (
              <NavLink
                to={child.path}
                className={({ isActive }) =>
                  `hover:text-yellow ${isActive ? "text-yellow" : "text-light"}`
                }
              >
                {child.title}
              </NavLink>
            ),
            key: child.id,
          }));

          return (
            <Dropdown
              key={id}
              trigger={["hover"]}
              menu={{ items: dropdownItems, onClick: handleMenuClick }}
              overlayStyle={{
                marginTop: "40px",
                width: "330px",
                borderRadius: "20px",
              }}
            >
              <div className="flex items-center gap-1 cursor-pointer text-light hover:text-yellow">
                <NavLink
                  to={itemPath.startsWith("/") ? itemPath : `/${itemPath}`}
                  className="font-body-font font-[400] text-[16px] transition duration-150 ease-out"
                >
                  {title}
                </NavLink>
                <img
                  src={downIcon}
                  alt="down icon"
                  className="min-w-[23px] min-h-[23px] w-[23px] h-[23px] ml-[-6px]"
                />
              </div>
            </Dropdown>
          );
        }

        return (
          <NavLink
            key={id}
            to={itemPath.startsWith("/") ? itemPath : `/${itemPath}`}
            className={({ isActive }) =>
              `font-body-font font-[400] text-[16px] hover:text-yellow transition duration-150 ease-out ${
                isActive ? "text-yellow" : "text-light"
              }`
            }
          >
            {title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Items;
