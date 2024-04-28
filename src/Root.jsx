import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./pages/Footer";

export default function Root() {
  return (
    <div className=" max-w-[1440px] w-[98%]  mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
