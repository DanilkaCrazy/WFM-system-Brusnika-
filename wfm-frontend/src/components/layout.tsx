import { PropsWithChildren, useState } from 'react';
import OpenedNav from './opened-nav';
import NavBurger from './nav-burger';
import NavLinks from './nav-links';
import LogoSVG from './svg/logo-svg';

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [isNavOpened, setNavOpened] = useState(false);
  const handleBurgerClick = () => setNavOpened((prev) => !prev);

  return (
    <div className="container">
      {isNavOpened &&
        <OpenedNav onBurgerClick={handleBurgerClick} />}
      <aside className="sidebar">
        <NavBurger onBurgerClick={handleBurgerClick} />
        <NavLinks navOpened={false} />
      </aside>
      <main className="main-container">
        <header className="header">
          <div className="header__logo">
            <LogoSVG />
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
