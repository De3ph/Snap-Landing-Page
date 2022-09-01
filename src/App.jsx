import { useState } from "react"
import "./App.css"
import logo from "./assets/logo.svg"
import hamburger from "./assets/icon-menu.svg"
import close from "./assets/icon-close-menu.svg"
import heroImgDesktop from "./assets/image-hero-desktop.png"
import heroImgMobile from "./assets/image-hero-mobile.png"
import databiz from './assets/client-databiz.svg'
import audiophile from './assets/client-audiophile.svg'
import meet from './assets/client-meet.svg'
import maker from './assets/client-maker.svg'

function App() {
  const [menuClicked, setMenuClicked] = useState(false)

  const handleMenuClick = () => {
    setMenuClicked((prevState) => !menuClicked)
  }

  return (
    <div className="App">
      <div className="navbar hidden lg:flex w-full p-9 justify-between">
        <div>
          <img src={logo} alt="Snap" width="132" />
        </div>
        <div>
          <div className="flex gap-24 text-left">
            <a
              href="#"
              className="cursor-pointer font-epilogue text-xl py-2 hover:text-medium-gray"
            >
              Features
            </a>
            <a
              href="#"
              className="cursor-pointer font-epilogue text-xl py-2 hover:text-medium-gray"
            >
              Company
            </a>
            <a
              href="#"
              className="cursor-pointer font-epilogue text-xl py-2 hover:text-medium-gray"
            >
              Carrers
            </a>
            <a
              href="#"
              className="cursor-pointer font-epilogue text-xl py-2 hover:text-medium-gray"
            >
              About
            </a>
          </div>
        </div>
        <div className="justify-self-end">
          <div className="flex gap-6">
            <button className="text-lg  px-4 py-2 rounded-lg hover:text-medium-gray font-epilogue">
              Login
            </button>
            <button className="text-lg border-2 px-4 py-2 rounded-lg hover:text-medium-gray border-almost-black font-epilogue">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="hamburgerMenu flex lg:hidden w-full p-9 justify-between">
        <div>
          <img src={logo} alt="Snap" width="132" />
        </div>
        <div>
          <button onClick={handleMenuClick} className="relative z-20 flex flex-col gap-2">
            <img src={menuClicked ? close : hamburger} alt="icon" />
          </button>
          <div
            className={
              `${menuClicked ? "visible" : "hidden"}` +
              ` absolute top-0 right-0 h-[100vh] z-10 w-64 md:w-80 bg-teal-200 pt-20`
            }
          >
            <div className="flex flex-col gap-5 ">
              
              <a
                href="#"
                className="ml-7 cursor-pointer font-epilogue text-xl py-2 text-almost-black hover:text-medium-gray"
              >
                Features
              </a>
              <a
                href="#"
                className="ml-7 cursor-pointer font-epilogue text-xl py-2 text-almost-black hover:text-medium-gray"
              >
                Company
              </a>
              <a
                href="#"
                className="ml-7 cursor-pointer font-epilogue text-xl py-2 text-almost-black hover:text-medium-gray"
              >
                Carrers
              </a>
              <a
                href="#"
                className="ml-7 cursor-pointer font-epilogue text-xl py-2 text-almost-black hover:text-medium-gray"
              >
                About
              </a>
              <button className="mx-auto text-lg py-2 w-2/3 rounded-lg hover:text-medium-gray font-epilogue">
                Login
              </button>
              <button className="mx-auto text-lg w-2/3 border-2 py-2 rounded-lg hover:text-medium-gray border-almost-black font-epilogue">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero w-full">
        <div className="flex flex-col-reverse gap-16 md:gap-6 md:flex-row mx-auto px-8 lg:px-16 my-auto w-full">
          <div className="leftPart sm:w-full lg:w-3/5 flex flex-col md:py-20 gap-10  my-auto mx-auto">
            <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Make remote work
            </div>
            <div className="text-2xl">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </div>
            <div className="learnMoreButton mx-auto md:m-0">
              <button className="bg-black text-white text-lg rounded-xl py-2 px-4">
                Learn More
              </button>
            </div>
            <div className="icons flex gap-3 md:gap-6 py-4 mb-5 justify-between">
              <div>
                <img src={databiz} alt="databiz" className="md:w-32 lg:w-48" />
              </div>
              <div>
                <img src={audiophile} alt="audiophile" className="md:w-32 lg:w-48" />
              </div>
              <div>
                <img src={meet} alt="meet" className="md:w-32 lg:w-48" />
              </div>
              <div>
                <img src={maker} alt="maker" className="md:w-32 lg:w-48" />
              </div>
            </div>
          </div>

          <div className="rightPart my-auto">
            <img className="hidden xl:block w-[40rem]" src={heroImgDesktop} alt="man" />
            <img className="block xl:hidden" src={heroImgMobile} alt="man" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
