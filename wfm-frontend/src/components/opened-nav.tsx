import NavBurger from './nav-burger';
import NavLinks from './nav-links';
import LogoSVG from './svg/logo-svg';

export type OpenedNavProps = {
  onBurgerClick: () => void;
};

export default function OpenedNav({ onBurgerClick: handleBurgerClick }: OpenedNavProps) : JSX.Element {
  return (
    <div className="container--opened-menu">
      <aside className="sidebar--opened">
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <LogoSVG />
          </div>
          <NavBurger onBurgerClick={handleBurgerClick} />
        </div>
        <NavLinks navOpened />
      </aside>
    </div>
  );
}
