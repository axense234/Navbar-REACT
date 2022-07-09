import React, {
  useEffect,
  useState,
  useRef,
  createContext,
  useContext,
} from "react";
import ReactDOM from "react-dom";
// CSS
import "./style.css";
// React Icons
import { BsFacebook, BsTwitter, BsDiscord, BsGithub } from "react-icons/bs";

const MainApp = () => {
  const [transformMode, setTransformMode] = useState(true);
  const [modalShowed, setModalShowed] = useState(false);
  const windowWidth = useRef(null);
  const navbarWidth = useRef(null);
  const collapseOpacity = useRef(null);
  console.log("render");

  const checkSize = () => {
    windowWidth.current = window.innerWidth;
    console.log(windowWidth.current);
    if (windowWidth.current <= 800) {
      setTransformMode(true);
    } else if (windowWidth.current > 800) {
      setTransformMode(false);
    }
  };

  const showModal = () => {
    setModalShowed(!modalShowed);
    let navbar = navbarWidth.current;
    navbar.style.height = modalShowed ? "80px" : "300px";
    let collapse = collapseOpacity.current;
    collapse.style.opacity = modalShowed ? "0" : "1";
    collapse.style.pointerEvents = modalShowed ? "none" : "all";
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <Navbar
        transformMode={transformMode}
        showModal={showModal}
        navbarWidth={navbarWidth}
      ></Navbar>
      <CollapseNavbar collapseOpacity={collapseOpacity}></CollapseNavbar>
    </>
  );
};

const CollapseNavbar = ({ collapseOpacity }) => {
  return (
    <ul className='collapse-container' ref={collapseOpacity}>
      <li>
        <a href='#'>
          <h5>Home</h5>
        </a>
      </li>
      <li>
        <a href='./aboutus.html'>
          <h5>About</h5>
        </a>
      </li>
      <li>
        <a href='./contactus.html'>
          <h5>Contact</h5>
        </a>
      </li>
      <li>
        <a href='./projects.html'>
          <h5>Projects</h5>
        </a>
      </li>
      <li>
        <a href='./profile.html'>
          <h5>Profile</h5>
        </a>
      </li>
    </ul>
  );
};

const Navbar = ({ transformMode, showModal, navbarWidth }) => {
  return (
    <nav>
      {transformMode ? (
        <div className='section-modal' ref={navbarWidth}>
          <section className='top'>
            <div className='modalFlex'>
              <h1 id='logo-transform'>Axense</h1>
              <button id='menu-button' onClick={() => showModal()}>
                <div id='menu-logo'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              </button>
            </div>
          </section>
        </div>
      ) : (
        <section>
          <h1>Axense</h1>
          <div className='page-links'>
            <a href='#'>
              <h5>Home</h5>
            </a>
            <a href='./aboutus.html'>
              <h5>About</h5>
            </a>
            <a href='./contactus.html'>
              <h5>Contact</h5>
            </a>
            <a href='./projects.html'>
              <h5>Projects</h5>
            </a>
            <a href='./profile.html'>
              <h5>Profile</h5>
            </a>
          </div>
          <div className='socialmedia-links'>
            <a href='https://www.facebook.com/' target='_blank'>
              {/* Facebook icon */}
              <BsFacebook></BsFacebook>
            </a>
            {/* Twitter icon */}
            <a href='https://twitter.com/' target='_blank'>
              <BsTwitter></BsTwitter>
            </a>
            {/* Discord icon */}
            <a href='https://discord.com/' target='_blank'>
              <BsDiscord></BsDiscord>
            </a>
            {/* Github icon */}
            <a href='https://github.com/' target='_blank'>
              <BsGithub></BsGithub>
            </a>
          </div>
        </section>
      )}
    </nav>
  );
};

ReactDOM.render(<MainApp></MainApp>, document.getElementById("root"));
