import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeaderInner = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLSpanElement>(null);
  const aboutRef = useRef<HTMLLIElement>(null);
  const programRef = useRef<HTMLLIElement>(null);
  const recruitRef = useRef<HTMLLIElement>(null);
  const contactRef = useRef<HTMLLIElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  const animatedRefs = [
    logoRef,
    periodRef,
    aboutRef,
    programRef,
    recruitRef,
    contactRef,
    burgerRef,
  ];

  useEffect(() => {
    animatedRefs.forEach((r, i) => {
      if (i !== 6)
        gsap.fromTo(
          r.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, delay: 0.2 * i }
        );
      else
        gsap.fromTo(
          r.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, delay: 1.4 }
        );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="header__inner">
      <div className="header__logo">
        <div ref={logoRef}>
          <a href="/">
            A<em>X</em>IOM
          </a>
        </div>
      </div>
      <span>&nbsp;</span>
      <div className="header__period">
        <span ref={periodRef}>'24 - '25</span>
      </div>
      <span>&nbsp;</span>
      <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
        <ul>
          <li ref={aboutRef}>
            <span className="marker">1.</span>
            <Link to="/about">About</Link>
          </li>
          <li>/</li>
          <li ref={programRef}>
            <span className="marker">2.</span>
            <Link to="/program">Program</Link>
          </li>
          <li>/</li>
          <li ref={recruitRef}>
            <span className="marker">3.</span>
            <Link to="/recruit">Join us</Link>
          </li>
          <li>/</li>
          <li ref={contactRef}>
            <span className="marker">4.</span>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
        <div
          className="header__nav__hamburger"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded="false"
          role="button"
          tabIndex={0}
          ref={burgerRef}
        >
          <Link to={"/menu"}>
            <span></span>
          </Link>
        </div>
    </div>
  );
};

export default HeaderInner;
