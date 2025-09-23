import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex gap-10 justify-center bg-red-300">
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/services'}>Services</Link>
      <Link to={'/menu'}>Menu</Link>
    </div>
  );
};

export default Nav;
