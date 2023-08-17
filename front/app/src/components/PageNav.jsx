import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
function PageNav() {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="/juridica-logov2.png"
        alt="logo juridica"
      />
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavList}>
          <li>
            <NavLink className={styles.mainNavLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.mainNavLink} to="/price">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.mainNavLink} to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${styles.mainNavLink} ${styles.navCTA}`}
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PageNav;
