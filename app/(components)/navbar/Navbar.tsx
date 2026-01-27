import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
    return (
    <nav className="grid grid-cols-2 bg-[#FFFFFF] py-3 px-20 shadow-xs">
        <Logo />
        <NavbarLinks />
    </nav>
    );
}
 
export default Navbar;