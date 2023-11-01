import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        
        </motion.span>
        <div className="social">
          <a href="https://github.com/Bhavya-gupta127" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/bhavya--gupta/"  target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://leetcode.com/BhavyaGupta/"  target="_blank">
            <img src="/leetcode.png" alt="" />
          </a>
          <a href="https://www.instagram.com/bhavyagupta127/?img_index=1"  target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
