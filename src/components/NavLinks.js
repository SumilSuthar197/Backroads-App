const NavLinks = ({href,text,itemClass}) => {
    return (
        <li>
            <a href={href} className={itemClass}>{text}</a>
        </li>
    );
}

export default NavLinks