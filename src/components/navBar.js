import { Link } from "react-router-dom";

const NavBar = () => {
  const manuItem = [
    { manu: "home", route: "/" },
    { manu: "about", route: "/about" },
    { manu: "services", route: "/services" },
    { manu: "prodact", route: "/prodact" },
    { manu: "blog", route: "/blog" },
    { manu: "contact", route: "/contact" },
  ];
  return (
    <>
      <div className="navbar">
        <ul>
          {manuItem.map((item, index) => (
            <li className="manulist" key={index}>
              <Link className="manuitem" to={item.route}>
                {item.manu}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
