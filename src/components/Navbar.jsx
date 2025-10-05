// import { Link } from "react-router-dom"
// import logo from "../assets/logo.svg"

// export default function Navbar() {
//   return (
//     // <div className="">
//     //   <header className=' fixed  mx-20 w-screen  max-w-[412px]   sm:max-w-[600px] md:max-w-[680px]  lg:max-w-[1150px]  xl:max-w-[1350px]    z-10  top-0    '>

//     //       <div className="rounded-b-[20px] h-[70px] bg-white/60 blur-[70%] mx-auto flex items-center  justify-between gap-10 w-full  px-5">
              
//     //           <div className="flex-1">
//     //               <img src={logo} className=" " alt="" />
//     //           </div>

//     //           <ul className=" hidden   flex-4 font-[500] mx-10  text-[13px] lg:flex gap-7    items-center justify-end  ">
//     //               <Link to={"/"}><li className="h-auto py-6 hover:text-(--tt-pink)">Home</li></Link>
//     //               <Link to={"/"}><li className="hover:text-(--tt-pink)">About Us</li></Link>
                
                
//     //               <div className="group relative ">
//     //                                 <button className="py-6 hover:text-(--tt-pink) "> Streaming Videos </button>
//     //                                 <div className="absolute  hidden left-0 top-[60px] mt-2 bg-white shadow rounded-b-md   w-[max-content] px-4 py-2 group-hover:block">
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                     </div>
//     //                     </div>

//     //              <div className="group relative ">
//     //                                 <button className="py-6 hover:text-(--tt-pink) "> Pages </button>
//     //                                 <div className="absolute  hidden left-0 top-[60px] mt-2 bg-white shadow rounded-b-md   w-[max-content] px-4 py-2 group-hover:block">
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                     </div>
//     //                     </div>

                  
//     //                     <div className="group relative ">
//     //                                 <button className="py-6 hover:text-(--tt-pink) "> Blogs</button>
//     //                                 <div className="absolute  hidden left-0 top-[60px] mt-2 bg-white shadow rounded-b-md   w-[max-content] px-4 py-2 group-hover:block">
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                         <Link to={"/"}><li className="block py-1   hover:text-(--tt-pink)">Streaming video 1 </li></Link>
//     //                                     </div>
//     //                     </div>


//     //                  <Link to={"/"}><li className="hover:text-(--tt-pink)">Contact me</li></Link>
               
                
//     //           </ul>

            
              
//     //         <button className="flex-1  py-[8px]  px-[10px] ml-5   text-white [background:var(--tt-gradient-1)] transition delay-150 duration-300 ease-in-out hover:[background:var(--tt-gradient-2)]  rounded-[6px] text-[16px] ">+ Follow Me</button>
              
           



//     //       </div>

//     //       </header>
          
//     //       </div>
//   )
// }




import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX, HiChevronDown } from "react-icons/hi";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // for mobile submenus

  const toggle = () => setOpen((v) => !v);
  const toggleSub = (key) =>
    setOpenMenu((k) => (k === key ? null : key));

  return (
    <header className="  fixed inset-x-4 top-0  z-50">
      {/* background / container */}
      <div className=" mx-auto h-[70px] max-w-screen-[1452px] px-5 sm:px-6 lg:px-10">
        <nav
          className=" flex  items-center rounded-b-2xl shadow-md px-5  bg-white/70
                     backdrop-blur blur-[30%]"
          aria-label="Main navigation"
        >
          {/* left: logo */}
          <div className="flex flex-1 items-center">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src={logo} alt="Site logo" className="h-7 w-auto" />
            </Link>
          </div>

          {/* center: desktop nav */}
          <ul className="hidden md:flex  md:text-[15px]  sm:text-[10px]   items-center gap-6 font-medium text-sm">
            <li>
              <Link className="py-6 hover:text-[var(--tt-pink)]" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="py-6 hover:text-[var(--tt-pink)]" to="/about">
                About Us
              </Link>
            </li>

            {/* Dropdown: Streaming Videos */}
            <li className="group relative">
              <button
                className="inline-flex items-center gap-1 py-6 hover:text-[var(--tt-pink)]"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Streaming Videos <HiChevronDown aria-hidden />
              </button>
              <div
                className="absolute left-0 top-full hidden min-w-[220px] rounded-b-md bg-white py-2 shadow
                           group-hover:block"
                role="menu"
              >
                {["Streaming video 1", "Streaming video 2", "Streaming video 3", "Streaming video 4"].map(
                  (label, i) => (
                    <Link
                      key={i}
                      to="/"
                      role="menuitem"
                      className="block px-4 py-2 text-sm hover:text-[var(--tt-pink)]"
                    >
                      {label}
                    </Link>
                  )
                )}
              </div>
            </li>

            {/* Dropdown: Pages */}
            <li className="group relative">
              <button
                className="inline-flex items-center gap-1 py-6 hover:text-[var(--tt-pink)]"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages <HiChevronDown aria-hidden />
              </button>
              <div
                className="absolute left-0 top-full hidden min-w-[220px] rounded-b-md bg-white py-2 shadow
                           group-hover:block"
                role="menu"
              >
                {["Page One", "Page Two", "Page Three", "Page Four"].map(
                  (label, i) => (
                    <Link
                      key={i}
                      to="/"
                      role="menuitem"
                      className="block px-4 py-2 text-sm hover:text-[var(--tt-pink)]"
                    >
                      {label}
                    </Link>
                  )
                )}
              </div>
            </li>

            {/* Dropdown: Blogs */}
            <li className="group relative">
              <button
                className="inline-flex items-center gap-1 py-6 hover:text-[var(--tt-pink)]"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blogs <HiChevronDown aria-hidden />
              </button>
              <div
                className="absolute left-0 top-full hidden min-w-[220px] rounded-b-md bg-white py-2 shadow
                           group-hover:block"
                role="menu"
              >
                {["blog pages" , "blog detail"].map(
                  (label, i) => (
                    <Link
                      key={i}
                      to="/"
                      role="menuitem"
                      className="block px-4 py-2 text-sm hover:text-[var(--tt-pink)]"
                    >
                      {label}
                    </Link>
                  )
                )}
              </div>
            </li>

            <li>
              <Link className="py-6 hover:text-[var(--tt-pink)]" to="/contact">
                Contact me
              </Link>
            </li>
          </ul>

          {/* right: CTA */}
          <div className="ml-4   sm:block">
            <Link
              to="/follow"
              className="inline-flex items-center rounded-md px-2 py-1  md:px-3 md:py-2 text-white text-sm
                         [background:var(--tt-gradient-1)] transition hover:[background:var(--tt-gradient-2)]"
            >
              + Follow Me
            </Link>
          </div>

          {/* mobile: hamburger */}
          <button
            onClick={toggle}
            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
          </button>
        </nav>

        {/* mobile panel */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            open ? "max-h-[640px]" : "max-h-0"
          }`}
          aria-hidden={!open}
        >
          <div className="mt-2 rounded-2xl border border-white/30 bg-white/80 backdrop-blur px-4 py-3 shadow-sm">
            <ul className="flex flex-col gap-1 text-sm">
              <li>
                <Link className="block rounded px-2 py-2 hover:text-[var(--tt-pink)]" to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="block rounded px-2 py-2 hover:text-[var(--tt-pink)]" to="/about" onClick={() => setOpen(false)}>
                  About Us
                </Link>
              </li>

              {/* Mobile collapsible sections */}
              <li>
                <button
                  className="flex w-full items-center justify-between rounded px-2 py-2 hover:text-[var(--tt-pink)]"
                  onClick={() => toggleSub("stream")}
                  aria-expanded={openMenu === "stream"}
                >
                  <span>Streaming Videos</span>
                  <HiChevronDown
                    className={`transition ${openMenu === "stream" ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`${openMenu === "stream" ? "block" : "hidden"} pl-4`}>
                  {["Streaming video 1", "Streaming video 2", "Streaming video 3", "Streaming video 4"].map(
                    (label, i) => (
                      <Link
                        key={i}
                        to="/"
                        className="block rounded px-2 py-2 text-sm hover:text-[var(--tt-pink)]"
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </Link>
                    )
                  )}
                </div>
              </li>

              <li>
                <button
                  className="flex w-full items-center justify-between rounded px-2 py-2 hover:text-[var(--tt-pink)]"
                  onClick={() => toggleSub("pages")}
                  aria-expanded={openMenu === "pages"}
                >
                  <span>Pages</span>
                  <HiChevronDown
                    className={`transition ${openMenu === "pages" ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`${openMenu === "pages" ? "block" : "hidden"} pl-4`}>
                  {["Page One", "Page Two", "Page Three", "Page Four"].map((label, i) => (
                    <Link
                      key={i}
                      to="/"
                      className="block rounded px-2 py-2 text-sm hover:text-[var(--tt-pink)]"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <button
                  className="flex w-full items-center justify-between rounded px-2 py-2 hover:text-[var(--tt-pink)]"
                  onClick={() => toggleSub("blogs")}
                  aria-expanded={openMenu === "blogs"}
                >
                  <span>Blogs</span>
                  <HiChevronDown
                    className={`transition ${openMenu === "blogs" ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`${openMenu === "blogs" ? "block" : "hidden"} pl-4`}>
                  {["Latest Posts", "Design Tips", "Case Studies", "Tutorials"].map((label, i) => (
                    <Link
                      key={i}
                      to="/"
                      className="block rounded px-2 py-2 text-sm hover:text-[var(--tt-pink)]"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <Link className="block rounded px-2 py-2 hover:text-[var(--tt-pink)]" to="/contact" onClick={() => setOpen(false)}>
                  Contact me
                </Link>
              </li>

              <li className="pt-2">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-md px-3 py-2 text-white
                             [background:var(--tt-gradient-1)] transition hover:[background:var(--tt-gradient-2)]"
                >
                  + Follow Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
