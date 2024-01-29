import {
  faCss3,
  faDev,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
    const root = document.documentElement;

    const elmsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elms-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    if (marqueeContent !== null) {
      root.style.setProperty(
        "--marquee-elms",
        String(marqueeContent.children.length)
      );

      for (let i = 0; i < Number(elmsDisplayed); i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, [theme]);

  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Contact</a>
              </li>
              <li>
                <div
                  onClick={() => {
                    const modal = document.getElementById(
                      "my_modal_4"
                    ) as HTMLDialogElement | null;
                    if (modal) {
                      modal.showModal();
                    }
                  }}>
                  About
                </div>
              </li>
              <li>
                <a>Social Medias</a>
                <ul className="p-2">
                  <li>
                    <a href="https://www.linkedin.com/in/eadon-auston-6018a6244/">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/EadonAuston/">GitHub</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Eadon Auston</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <div
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_5"
                  ) as HTMLDialogElement | null;
                  if (modal) {
                    modal.showModal();
                  }
                }}>
                Contact
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_4"
                  ) as HTMLDialogElement | null;
                  if (modal) {
                    modal.showModal();
                  }
                }}>
                About
              </div>
            </li>
            <li>
              <details>
                <summary>Social Media</summary>
                <ul className="p-2">
                  <li>
                    <a href="https://www.linkedin.com/in/eadon-auston-6018a6244/">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/EadonAuston/">GitHub</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <span className="sm:block hidden">
            Change Theme: &nbsp;&nbsp;&nbsp;
          </span>
          <div
            onClick={() => setTheme("dark")}
            className={`${
              theme === "light" ? "block" : "hidden"
            }  btn btn-circle flex`}>
            ☀️
          </div>
          <div
            onClick={() => setTheme("valentine")}
            className={`${
              theme === "dark" ? "block" : "hidden"
            }  btn btn-circle flex`}>
            🌑
          </div>
          <div
            onClick={() => setTheme("light")}
            className={`${
              theme === "valentine" ? "block" : "hidden"
            }  btn btn-circle flex`}>
            ❤️
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col  lg:flex-row text-center justify-center mt-[100px] items-center">
          <div className="avatar">
            <div className="w-[200px] rounded-full ml-[10px] mt-[20px]">
              <img src="../src/assets/EadonSelfie.jpg" alt="Eadon Auston" />
            </div>
          </div>
          <div className="ml-[10px] max-w-[300px]">
            <p className="text-lg font-semibold mb-4">Eadon Auston</p>
            <p>
              Aspiring Full Stack Developer born in Laguna Beach, CA. Passionate
              about math and computers.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[50px]">
        <div>
          <div className="marquee">
            <ul className="marquee-content">
              <li>
                <FontAwesomeIcon icon={faHtml5} />
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3} />
              </li>
              <li>
                <FontAwesomeIcon icon={faJs} />
              </li>
              <li>
                <div className="w-[calc(80vw/12)] h-[calc(80vw/12)] bg-blue-600 flex justify-end items-end pr-[5px] text-[30px] text-white">
                  TS
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} />
              </li>
              <li>
                <FontAwesomeIcon icon={faNodeJs} />
              </li>
              <li>
                <img src="../src/assets/tailwind-css.svg" alt="" />
              </li>
              <li>
                <img src="../src/assets/vscode.png" width="80%" alt="" />
              </li>
              <li>
                <FontAwesomeIcon icon={faGit} />
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} />
              </li>
              <li>
                <FontAwesomeIcon icon={faDatabase} />
              </li>
              <li>
                <FontAwesomeIcon icon={faDev} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-[20px]">
        <h1 className="text-[30px] font-bold mb-[20px] lg:text-[40px]">
          Featured Projects:
        </h1>
        <div className="flex w-[90vw] ">
          <div className="mr-[10px]">
            <div className="btn btn-square w-[22vw] h-[22vw]">
              <a href="https://github.com/EadonAuston/FinancialPlanner">
                <img src="../src/assets/FinancialPlanner.JPG" alt="" />
              </a>
            </div>
            <div className="text-center text-[20px] font-semibold">
              Financial Planner
            </div>
          </div>
          <div className="mr-[10px]">
            <div className="btn btn-square w-[22vw] h-[22vw]">
              <a href="https://eadon-coderad.netlify.app">
                <img src="../src/assets/CodeRad.jpg" alt="" />
              </a>
            </div>
            <div className="text-center text-[20px] font-semibold">CodeRad</div>
          </div>
          <div className="mr-[10px]">
            <div className="btn btn-square w-[22vw] h-[22vw]">
              <a href="https://eadon-saas.netlify.app">
                <img
                  src="../src/assets/SaaS.jpg"
                  alt=""
                  className="max-h-[22vw]"
                />
              </a>
            </div>
            <div className="text-center text-[20px] font-semibold">
              SaaS Project
            </div>
          </div>
          <div className="mr-[10px]">
            <div className="btn btn-square w-[22vw] h-[22vw]">
              <a href="https://github.com/EadonAuston/Battleship">
                <img src="../src/assets/Battleship.jpg" alt="" />
              </a>
            </div>
            <div className="text-center text-[20px] font-semibold">
              Battleship
            </div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-[calc(100vw-10px)] h-[90vh] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col text-center justify-center items-center">
              <div className="avatar">
                <div className="w-[200px] rounded-full ml-[10px] mt-[500px] md:mt-[250px] lg:mt-[100px]">
                  <img src="/assets/EadonSelfie.jpg" alt="Eadon Auston" />
                </div>
              </div>
              <div className="ml-[10px] max-w-[1000px]">
                <p className="text-lg font-semibold mb-4">Eadon Auston</p>
                <p className="text-left">
                  🚀 Aspiring Full-Stack Developer
                  <br />
                  Hello there! I'm Eadon, a passionate and aspiring full-stack
                  developer on a mission to build innovative and user-friendly
                  web applications. With a strong foundation in front-end
                  technologies, I specialize in crafting dynamic and responsive
                  user interfaces. <br /> 🌐 Front-End Tech Enthusiast <br /> My
                  expertise lies in harnessing the power of modern front-end
                  technologies. I'm well-versed in React, where I bring ideas to
                  life with reusable components and efficient state management.
                  TypeScript is my go-to language, ensuring code integrity and
                  enhanced developer experience.
                  <br /> 🎨 Crafting Aesthetically Pleasing UIs
                  <br /> I take pride in creating visually appealing user
                  interfaces that not only look good but also provide seamless
                  navigation and interactivity. Tailwind CSS is my preferred
                  styling framework, allowing me to design with flexibility and
                  maintainability in mind. <br />
                  🛠️ Continuous Learning & Growth <br />
                  In this ever-evolving tech landscape, I'm committed to staying
                  ahead of the curve. Whether it's exploring new front-end
                  libraries, diving into back-end technologies, or adopting best
                  practices, I embrace the journey of continuous learning to
                  enhance my skills and deliver top-notch solutions.
                  <br /> 💻 Beyond Front-End: Aspiring Full-Stack Developer{" "}
                  <br /> While my heart lies in crafting delightful front-end
                  experiences, I'm on a journey to become a well-rounded
                  full-stack developer. Exploring back-end technologies,
                  databases, and server-side logic, I aim to create robust and
                  scalable applications that stand the test of time.
                  <br /> 🤝 Let's Collaborate <br />
                  I'm always excited about new opportunities and collaborations.
                  Whether you have a project in mind, want to discuss the latest
                  tech trends, or simply share knowledge, feel free to reach
                  out. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn"
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_4"
                  ) as HTMLDialogElement | null;
                  if (modal) {
                    modal.close();
                  }
                }}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-[calc(100vw-10px)] h-[90vh] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col text-center justify-center items-center">
              <div className="avatar">
                <div className="w-[200px] rounded-full ml-[10px] mt-[500px] md:mt-[250px] lg:mt-[100px]">
                  <img src="../src/assets/EadonSelfie.jpg" alt="Eadon Auston" />
                </div>
              </div>
              <div className="ml-[10px] max-w-[1000px]">
                <p className="text-lg font-semibold mb-4">Eadon Auston</p>
                <p className="text-left">
                  Contact Info: <br />
                  Phone: (530)739 9778 <br />
                  Email: eadonauston@outlook.com <br />
                  <br />I am always willing to help with a coding question
                  and/or talk about coding in general!
                  <br />
                  My LinkedIn and GitHub links are in the Social Media dropdown
                  if you want to view those!
                </p>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn"
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_5"
                  ) as HTMLDialogElement | null;
                  if (modal) {
                    modal.close();
                  }
                }}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default App;
