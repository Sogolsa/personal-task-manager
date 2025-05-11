import Logo from "./Logo";
const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white justify-between flex p-4">
      <Logo />
      <div className="flex text-sm lg:text-lg md:text-md space-x-2 md:space-x-4">
        <a href="#">Dashboard</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};
export default NavBar;
