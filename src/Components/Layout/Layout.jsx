import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
      </div>
      <Outlet></Outlet>
      <span className="tags bottom-tags">
        &lt;body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </span>
    </div>
  );
};

export default Layout;
