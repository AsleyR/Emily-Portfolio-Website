import { NavbarMenuProvider } from "@/app/(context)/NavbarMenuContext";
import Logo from "./Logo";
import MobileNavbar from "./mobile-navbar/MobileNavbar";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
    return (
            <nav className="grid grid-cols-2 items-center bg-[#FFFFFF] 
            py-3 px-5 md:px-20 shadow-sm scroll-smooth sticky top-0 z-40 text-main">
                <Logo />
                <div className="">
                    <NavbarLinks />
                    <MobileNavbar />
                </div>
            </nav>
    );
}
 
export default Navbar;