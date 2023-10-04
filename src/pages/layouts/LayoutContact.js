import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function LayoutContact() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default LayoutContact;
