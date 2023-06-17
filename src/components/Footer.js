import { pageLinks, socialLinks } from "../data"
import NavLinks from "./NavLinks"
import SocialLink from "./SocialLinks"

const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinks.map((item) => {
                    return <NavLinks {...item} key={item.id} itemClass='footer-link' />
                })}
            </ul>
            <ul className="footer-icons">
                {socialLinks.map((item) => {
                    return <SocialLink {...item} key={item.id} itemClass='footer-icon' />
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer