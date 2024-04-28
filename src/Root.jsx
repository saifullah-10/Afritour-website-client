import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./pages/Footer";
import { useContext } from "react";
import { Context } from "./routeControles/ContextServer";

export default function Root() {
  const { loading } = useContext(Context);
  return (
    <>
      {!loading ? (
        <div className=" max-w-[1440px] w-[98%]  mx-auto">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
