import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-end gap-4 mr-6 my-6 text-white italic  texr-xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
