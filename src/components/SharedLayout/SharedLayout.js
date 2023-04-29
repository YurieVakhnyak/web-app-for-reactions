import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" activeclassname="active">
            ..Click and Voice Emoji..
          </Link>
          <Link to="/start" activeclassname="active">
            ..Voice Animation..
          </Link>
          <Link to="/web" activeclassname="active">
            ..Dictaphone..
          </Link>
          <Link to="/animation" activeclassname="active">
            ..Click Animation..
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
