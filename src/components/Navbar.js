import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import SocialLink from "./SocialLinks";
import NavLinks from "./NavLinks";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <ul className="nav-links" id="nav-links">
                    {pageLinks.map((item) => {
                        return <NavLinks {...item} key={item.id} itemClass='nav-link' /> 
                    })}
                </ul>

                <ul className="nav-icons">
                    {socialLinks.map((item) => {
                        return <SocialLink {...item} key={item.id} itemClass='nav-icon'/>
                    })}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar