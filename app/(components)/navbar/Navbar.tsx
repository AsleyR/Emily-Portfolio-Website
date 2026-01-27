import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
    return (
        <nav className="grid grid-cols-2 bg-[#FFFFFF] py-3 px-20 shadow-sm scroll-smooth sticky top-0 z-40">
            <Logo />
            <NavbarLinks />
        </nav>
    );
}
 
export default Navbar;