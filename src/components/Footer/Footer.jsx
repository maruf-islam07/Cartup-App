import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import americanExpress from "../../assets/american_express_logo.png";
import bkash from "../../assets/bkash_logo.png";
import cod from "../../assets/cod.png";
import cradit from "../../assets/credit_debit_card.svg";
import ssl from "../../assets/ssl-logo.png";
import upay from "../../assets/upay2.svg";
import nagad from "../../assets/nagad_logo.png";
import Layout from "../Layout/Layout";

function Footer() {
  return (
    <footer className="shadow py-5">
      <Layout>
        {/* footer top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-8 px-5 md:px-10 bg-white">
          {/* part 1 */}
          <div className="w-65 flex flex-col gap-y-6">
            {/* location */}
            <div className="flex gap-4 items-center">
              <FaLocationDot className="text-4xl text-zinc-500" />
              <span className="font-semibold">
                Rahman Regnum Centre, Level-6, 191/1, Tejgaon C/A, Dhaka-1208,
                Bangladesh
              </span>
            </div>

            {/* phone */}
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center gap-4">
                <LuPhoneCall className="text-xl text-zinc-400 " />
                <span className="font-semibold">+880 1234567890</span>
              </div>
              <p className=" mx-9 font-semibold">9 am - 9 pm (Everyday)</p>
            </div>

            {/* email  */}
            <div className="flex items-center gap-4">
              <MdOutlineEmail className="text-2xl text-zinc-400 " />
              <span className="font-semibold">customer.care@cartup.com</span>
            </div>

            {/* follow us on social media */}
            <div className="flex flex-col gap-y-4">
              <h1 className="text-lg font-semibold">
                Follow Us On Social Media
              </h1>
              <div className="flex gap-2">
                <button className="border border-zinc-300 rounded-full p-2">
                  <FaFacebookF className="text-xl text-zinc-500 " />
                </button>
                <button className="border border-zinc-300 rounded-full p-2">
                  <FaTiktok className="text-xl text-zinc-500 " />
                </button>
                <button className="border border-zinc-300 rounded-full p-2">
                  <FaYoutube className="text-xl text-zinc-500 " />
                </button>
                <button className="border border-zinc-300 rounded-full p-2">
                  <FaLinkedinIn className="text-xl text-zinc-500 " />
                </button>
                <button className="border border-zinc-300 rounded-full p-2">
                  <FaInstagram className="text-xl text-zinc-500 " />
                </button>
              </div>
            </div>
          </div>

          {/* part 2 */}
          <div>
            <h1 className="text-2xl font-semibold  ">Cartup</h1>
            <ul className="flex flex-col gap-y-3 mt-5 text-zinc-600">
              <li className="font-medium text-md">About Us</li>
              <li className="font-medium text-md">Cartup Blog</li>
              <li className="font-medium text-md">
                Join the Cartup Affiliate Program
              </li>
              <li className="font-medium text-md">Cookies policy</li>
              <li className="font-medium text-md">Sell with Cartup</li>
            </ul>
          </div>
          {/* part 3 */}
          <div>
            <h1 className="text-2xl font-semibold  ">Customer Care</h1>
            <ul className="flex flex-col gap-y-3 mt-5 text-zinc-600">
              <li className="font-medium text-md">Return & Refund Policy</li>
              <li className="font-medium text-md">Privacy Policy</li>
              <li className="font-medium text-md">Warranty Policy</li>
              <li className="font-medium text-md">Help Center</li>
              <li className="font-medium text-md">Terms & Conditions</li>
              <li className="font-medium text-md">EMI Policy</li>
            </ul>
          </div>
          {/* part 4 */}
          <div>
            <h1 className="text-2xl font-semibold  ">Payment Mathods</h1>

            <ul className="w-80 grid grid-cols-3 gap-4 mt-5">
              <li className="border-b border-zinc-300 w- h- flex items-center justify-center">
                <img src={americanExpress} alt="" className="w-7.5 h-7.5 " />
              </li>
              <li className="col-span-2 border-b border-zinc-300 w-48.25 h-13.5 flex items-center justify-center">
                <img src={cradit} alt="" className="w-24 h-[32] " />
              </li>
              <li className="border-b border-zinc-300 w-20 h-13.5 flex items-center justify-center">
                <img src={nagad} alt="" className="w-13.5 h-5 " />
              </li>
              <li className="border-b border-zinc-300 w-20 h-13.5 flex items-center justify-center">
                <img src={bkash} alt="" className="w-20 h-[54] " />
              </li>
              <li className="border-b border-zinc-300 w- h- flex items-center justify-center">
                <img src={upay} alt="" className="w-20 h-[54] " />
              </li>
              <li className="border-b border-zinc-300 w-20 h-13.5 flex items-center justify-center">
                <img src={cod} alt="" />
              </li>
              <li className="border-b border-zinc-300 w-20 h-13.5 flex items-center justify-center">
                <img src={ssl} alt="" />
              </li>
            </ul>
          </div>
        </div>

        {/* footer bottom */}
        <div>
          <p className="text-center">
            © Copyright 2026 Cartup All Rights are Reserved.
          </p>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
