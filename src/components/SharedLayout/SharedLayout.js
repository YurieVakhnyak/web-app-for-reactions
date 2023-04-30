import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "../SharedLayout/SharedLayout.module.css";

export const SharedLayout = () => {
  return (
    <div>
      <header className={styles.navContainer}>
        <nav className={styles.navigation}>
          <NavLink className={styles.navigaion} to="/">
            Click and Voice Emoji
          </NavLink>
          <NavLink to="/start">Voice Animation</NavLink>
          <NavLink to="/web">Dictaphone</NavLink>
          <NavLink to="/animation">Click Animation</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
