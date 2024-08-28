<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

=======
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

>>>>>>> f5516dda867c56536613e003d050e9e758f98dfc
export default DefaultLayout;