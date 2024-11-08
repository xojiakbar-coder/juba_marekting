import { Dropdown, message } from "antd";
import navbar_items_data from "../../utils/navbar";
import { Link } from "react-scroll";
import useSize from "../../hooks/useSize";

const Items = ({ dir = "row", w = "full", onClose }) => {
  const { width } = useSize();
  return (
    <div className={`flex flex-${dir} gap-x-[24px] items-center`}>
      {navbar_items_data.map((item) => {
        const { id, title, path, children } = item;
        const itemPath = id === "5" ? "" : path;

        if (children?.length) {
          const dropdownItems = children.map((child) => ({
            label: (
              <Link
                to={child.path}
                smooth={true}
                duration={600}
                className="hover:text-yellow text-light cursor-pointer"
              >
                {child.title}
              </Link>
            ),
            key: child.id,
          }));

          return (
            <Dropdown
              key={id}
              trigger={["hover"]}
              menu={{ items: dropdownItems }}
              arrow={true}
            >
              <div className="flex items-center gap-1 cursor-pointer text-light hover:text-yellow">
                <Link
                  to={itemPath.startsWith("/") ? itemPath : `/${itemPath}`}
                  smooth={true}
                  duration={600}
                  className="font-body-font font-[400] text-[16px] transition duration-150 ease-out cursor-pointer"
                >
                  {title}
                </Link>
              </div>
            </Dropdown>
          );
        }

        return (
          <Link
            key={id}
            to={itemPath.startsWith("/") ? itemPath : `/${itemPath}`}
            smooth={true}
            duration={800}
            className={`font-body-font font-[400] ${
              width <= 1390 ? "text-[14px]" : "text-[16px]"
            } text-[16px] hover:text-yellow select-none transition duration-150 ease-out text-light cursor-pointer`}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Items;
