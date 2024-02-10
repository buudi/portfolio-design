import { Outlet } from "react-router-dom";

// import Footer from "../src/components/Footer";
import Footer2 from "../src/components/Footer2";


export default function Root() {
  return (
    <>
      <div id="detail">
        <Outlet />
        <Footer2 />
      </div>
    </>
  );
}