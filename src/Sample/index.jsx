import React, { useRef } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import ViewProject from "./ViewProject";
import BookNow from "./BookNow";
import Contact from "./Contact";
import LogIn from "./LogIn";
// import { Image, UserImage } from "./UserImage";
import { UserIcon } from "./Svg";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";


const Sample = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const navigate = useNavigate();
  const handle = (ref) => {
    window.scrollTo({
      top: ref?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="lg:grid block lg:grid-cols-2 bg-stone-100 ">
        <div className="relative bg-[#365150] w-full lg:w-[600px]">
          <div className="flex pt-10 pl-28 gap-4 absolute top-0 left-0  text-white">
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="29 30.5 147.9 147.9"
              viewBox="29 30.5 147.9 147.9"
              className="w-12 h-12 text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="svgcid--xor1eyufpmif">Homepage</title>
              <g>
                <path
                  fill="#c9917d"
                  d="M143.5 104.5c0 22.423-18.177 40.6-40.6 40.6-22.423 0-40.6-18.177-40.6-40.6 0-22.423 18.177-40.6 40.6-40.6 22.423 0 40.6 18.177 40.6 40.6z"
                  data-color="1"
                ></path>
                <path
                  d="M176.9 175.6l-10.3-10.3V40.9H42.2L31.8 30.5 29 33.4l10.3 10.3v124.4h124.4l10.3 10.3 2.9-2.8zM162.5 44.9v116.4L46.2 44.9h116.3zM43.4 164.1V47.7l116.4 116.4H43.4z"
                  fill="#4c2518"
                  data-color="2"
                ></path>
              </g>
            </svg>
            <h1 className="font-semibold text-white text-sm pt-1">
              AURA<h1 className="text-white ">BOUTIQUE</h1>
            </h1>
          </div>
        </div>

        <div className="hidden md:block sticky bg-stone-100">
          <ul className="flex font-light text-sm py-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " font-light text-slate-500" : ""
              }
            >
              <li className="px-10">Home</li>
            </NavLink>
            <NavLink
              to="/Portfolio"
              className={({ isActive }) =>
                isActive ? " font-light text-slate-500" : ""
              }
            >
              <li className="px-10">Portfolio</li>
            </NavLink>
            <NavLink
              // to="/about"
              className={({ isActive }) =>
                isActive ? " font-light text-slate-500" : ""
              }
            >
              <li
                className="px-10"
                onClick={async (e) => {
                  // e.stopPropagation()
                  e.preventDefault();
                  await navigate("/");
                  handle(aboutRef.current);
                }}
              >
                About
              </li>
            </NavLink>
            <NavLink
              // to="/contact"
              className={({ isActive }) =>
                isActive ? " font-light text-slate-500" : ""
              }
            >
              <li
                className="px-10"
                onClick={async (e) => {
                  e.preventDefault();
                  await navigate("/");
                  handle(contactRef.current);
                }}
              >
                Contact
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? " font-light text-slate-500" : ""
              }
            >
              <li className="px-10">
                <div className="flex gap-2">
                  <UserIcon />
                  Log In
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>

      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route
              path="/"
              element={<Home aboutRef={aboutRef} contactRef={contactRef} />}
            />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/ViewProject/:productId" element={<ViewProject />} />
            <Route path="/BookNow" element={<BookNow />} />
          </Routes>{" "}
        </motion.div>{" "}
      </AnimatePresence>
    </div>
  );
};

export default Sample;
