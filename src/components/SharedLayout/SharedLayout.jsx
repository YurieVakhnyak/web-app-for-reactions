import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
// import { Navigation, StyledNavLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" activeclassname="active">
            ..Home..
          </Link>
          <Link to="/start" activeclassname="active">
            ..Start..
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
