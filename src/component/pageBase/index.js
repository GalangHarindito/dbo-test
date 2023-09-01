import { useEffect } from "react";
import Navbar from "../navbar";
import "./style.css";

const PageBase = ({ children }) => {

  useEffect(() => {
    const app = document.getElementById("root");
    app.className = "pagebase";
  }, []);

  return (
    <>
      <Navbar />
      <main className="main">{children}</main>
    </>
  );
}

export default PageBase;