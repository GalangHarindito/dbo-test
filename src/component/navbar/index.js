import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const { pathname } = useLocation();

  const route = [
    { label: "Customer Management", link: "/dashboard/customer" },
    { label: "Order Management", link: "/dashboard/order" },
  ];
  return (
    <div className="wrapper-navbar">
      <li className="navbar-list">
        {route &&
          route.map((item) => {
            return (
              <ul>
                <Link
                  to={item.link}
                  className={`${pathname}` === item.link ? "active" : ""}
                >
                  {item.label}
                </Link>
              </ul>
            );
          })}
      </li>
    </div>
  );
};

export default Navbar;
