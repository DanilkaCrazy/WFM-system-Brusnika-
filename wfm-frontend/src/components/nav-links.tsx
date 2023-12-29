import { NavLink } from 'react-router-dom';
import { NavLinksData } from '../consts';

type NavLinksProps = {
  navOpened: boolean;
};

export default function NavLinks({ navOpened }: NavLinksProps): JSX.Element {
  return (
    <nav className="sidebar__nav nav">
      <ul className="nav__list list-reset">
        {NavLinksData.map((navLink) => (
          <li key={navLink.Title} className="nav__item">
            <NavLink to={navLink.Href} className="nav__link" title={navLink.Title}>
              {navLink.Icon}
              {navOpened &&
                <span className="nav__link-text">{navLink.Title}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
