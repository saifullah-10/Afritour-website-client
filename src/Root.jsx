import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./pages/Footer";
import { useContext } from "react";
import { Context } from "./routeControles/ContextServer";
import loader from "./assets/loading.gif";
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
        <div className=" w-full min-h-screen flex justify-center items-center">
          <img src={loader} alt="" />
        </div>
      )}
    </>
  );
}
