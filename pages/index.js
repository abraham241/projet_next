import Image from "next/image";
import Link from "next/link";
// import logo from "../public/images/logo.png"
import heroimg from "../public/images/heroimg.png";
import about from "../public/images/about.png";

export default function Home() {
  return (
    <main className="">
      <nav className="bg-blue-900 h-20 flex justify-between items-center px-20">
        <div>
          {/* <Image src={logo} alt="Picture of the author" className="w-32 h-8"/> */}
          <h1 className="text-4xl text-white font-bold">BootsLander</h1>
        </div>
        <div className="hidden text-white md:flex lg:flex xl:flex  gap-5 font-bold">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Features">Features</Link>
          <Link href="/Gallery">Gallery</Link>
          <Link href="/Team">Team</Link>
          <Link href="/Pricing">Pricing</Link>
          <Link href="/Drop Dawn">Drop Dawn</Link>
          <Link href="/Contact">Contact</Link>
        </div>

        {/* menu burger */}
        <div className="flex flex-col gap-2 md:hidden pl-24 lg:hidden xl:hidden cursor-pointer">
          <div className="w-6 border border-white border-1"></div>
          <div className="w-6 border border-white border-1"></div>
          <div className="w-6 border border-white border-1"></div>
        </div>
        {/* menu burger */}
      </nav>

      {/* section hero */}
      <div className="bg-blue-900 text-white flex-col-reverse gap-10 md:flex-row lg:flex-row xl:flex-row  flex justify-between items-center p-16 px-20 ">
        <div className="">
          <p className="font-bold text-6xl">
            Build Your Landing Page <br /> With{" "}
            <span className="border-b-4 border-green-400">Bootstlander</span>
          </p>

          <p className="text-2xl font-bold py-5">
            We are team of talented designers making websites <br /> with
            Bootstrap
          </p>
          <button className="h-12 w-44 rounded-full bg-green-400">
            Get Started
          </button>
        </div>
        <div>
          <Image src={heroimg} alt="Picture of the author" className="w-80" />
        </div>
      </div>
      {/* section hero */}

      {/* section 2 */}
      <div className="flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center py-10 flex gap-10 px-5">
        <div className="">
          <Image src={about} alt="Picture of the author" className="" />
        </div>
        <div className="">
          <div>
            <h1 className="text-3xl font-bold text-blue-900">
              Enim quis est voluptatibus aliquid <br /> consequatur fugiat
            </h1>
            <p className="pt-5 pb-10">
              Esse voluptas cumque vel exercitationem. Reiciendis est hic
              accusamus. Non ipsam et sed <br /> minima temporibus laudantium.
              Soluta voluptate sed facere corporis dolores excepturi. <br />
              Libero laboriosam sint et id nulla tenetur. Suscipit aut
              voluptate.
            </p>
          </div>
          <div className="">
            <div className="flex gap-5 py-3">
              <div className="border-2 border-green-400 rounded-full h-14 w-14 p-2 text-green-400 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-fingerprint"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z" />
                  <path d="M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332q0 .613-.066 1.221A.5.5 0 0 1 6 8.447q.06-.555.06-1.115zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8m-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329" />
                  <path d="M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334m.3 1.67a.5.5 0 0 1 .449.546 10.7 10.7 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.7 9.7 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z" />
                  <path d="M3.902 4.222a5 5 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 4 4 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556m6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705M3.68 5.842a.5.5 0 0 1 .422.568q-.044.289-.044.59c0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.5 6.5 0 0 0 3.058 7q0-.375.054-.736a.5.5 0 0 1 .568-.422m8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.5 10.5 0 0 0 .584-2.678.5.5 0 0 1 .54-.456" />
                  <path d="M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865m-.89 1.257a.5.5 0 0 1 .04.706A5.48 5.48 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346m12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-xl">Lorem Ipsum</h1>
                <p className="text-sm">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
            <div className="flex gap-5 py-10">
              <div className="border-2 border-green-400 rounded-full h-14 w-14 p-2 text-green-400 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="currentColor"
                  class="bi bi-gift"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-xl">Lorem Ipsum</h1>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati <br /> cupiditate non
                  provident
                </p>
              </div>
            </div>
            <div className="flex gap-5 py-3">
              <div className="border-2 border-green-400 hover:bg-green-400 hover:text-white rounded-full h-14 w-14 p-2 text-green-400 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-bounding-box"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2zm6 1v2h2v6h-2v2H5v-2H3V5h2V3zm1-2h3v3h-3zm3 11v3h-3v-3zM4 15H1v-3h3zM1 4V1h3v3z" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-xl">Lorem Ipsum</h1>
                <p className="">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {/* section 2 */}

      {/* section 3 */}
      <div className="py-10 px-20">
        <div>
          {/* ==================Featurs============= */}
          <div>
            <div className="flex w-44 h-16 gap-3 justify-center items-center text-slate-400">
              <p>FEATUES</p>
              <div className="border-b border-green-400 w-20"></div>
            </div>
            {/* titre  */}
            <div className="text-4xl font-bold text-blue-900">CHECK THE FEATURES</div>
            {/* titre  */}
          </div>
        </div>
        {/* ======================================les card========================== */}
        <div className="py-16">
          <div className="flex-col gap-5 flex md:flex-row lg:flex-row xl:flex-row justify-between">
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-blue-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="flex-col gap-5 flex md:flex-row lg:flex-row xl:flex-row justify-between py-5">
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-rose-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-sky-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="flex-col gap-5 flex md:flex-row lg:flex-row xl:flex-row justify-between">
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-amber-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-violet-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center h-14 w-64 bg-slate-100 text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
              </svg>
              <p className="font-bold text-blue-900">
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* section 3 */}
    </main>
  );
}
