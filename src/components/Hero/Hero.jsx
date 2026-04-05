import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import banner1 from "../../assets/image-resize (1).avif";
import banner2 from "../../assets/image-resize (2).avif";
import banner3 from "../../assets/image-resize (3).avif";
import banner4 from "../../assets/image-resize (4).avif";
import banner5 from "../../assets/image-resize (5).avif";
import banner6 from "../../assets/image-resize (6).avif";
import banner7 from "../../assets/image-resize (7).avif";
import Layout from "../Layout/Layout";
import logo from "../../assets/logo-bag.svg";
import limitedTime from "../../assets/limited-time.svg";
import freeDelivary from "../../assets/free-delivery-truck.svg";
import qrCode from "../../assets/app-link-qr-code.svg";
import appleStore from "../../assets/apple-store.svg";
import googlePlay from "../../assets/google-play.svg";
import bestMoney from "../../assets/bestPrice.svg";
import secure from "../../assets/secure.svg";
import trucks from "../../assets/trucks.svg";
import Shipping from "../../assets/Shipping.svg";
import Banner from "../../assets/top-entry.png";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="w-full h-auto mt-4">
      <Layout >
        <div className="flex flex-col lg:flex-row gap-5">
          {/* slider  */}
          <div className="w-full lg:w-240 md:mx-auto lg:mx-0">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              navigation
              autoplay={{ delay: 3000 }}
              loop={true}
              className="h-full"
              pagination = {{clickable : true}}
            >
              <SwiperSlide>
                <img
                  src={banner1}
                  className="w-full h-full object-cover"
                  alt="banner1"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src={banner2}
                  className="w-full h-full object-cover"
                  alt="banner2"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src={banner3}
                  className="w-full h-full object-cover"
                  alt="banner3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={banner4}
                  className="w-full h-full object-cover"
                  alt="banner3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={banner5}
                  className="w-full h-full object-cover"
                  alt="banner3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={banner6}
                  className="w-full h-full object-cover"
                  alt="banner3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={banner7}
                  className="w-full h-full object-cover"
                  alt="banner3"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* side card */}
          <div className="bg-white rounded-lg p-5 lg:flex lg:flex-col gap-5 hidden">
            {/* header  */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="" />
              <h4>Download the App</h4>
            </div>

            {/* card */}
            <div className="w-[249.969px] bg-linear-to-r from-purple-600/90 to-pink-500 text-white rounded-lg px-3 py-2">
              <h4>Download App</h4>
              <div className="flex gap-4">
                <div className="flex items-center gap-3">
                  <img src={freeDelivary} alt="" />
                  <h4 className=" text-sm font-semibold">
                    Free <br /> Delevery
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <img src={limitedTime} alt="" className="h-9 w-9" />
                  <h4 className="text-sm font-semibold">
                    Exclusive <br /> Vouchers
                  </h4>
                </div>
              </div>
            </div>

            {/* qr code and store link */}
            <div className="flex items-center gap-5">
              <img src={qrCode} alt="" />
              <div className="flex flex-col gap-3">
                <img src={googlePlay} alt="" />
                <img src={appleStore} alt="" />
              </div>
            </div>
            <p className="text-xs mx-1">Download the App Now!</p>
          </div>
        </div>
        {/* hero bottom card */}
        <div className="bg-white hidden md:flex gap-5 p-5 rounded-lg my-5">
          <div className="flex justify-between items-center gap-5 ml-12 lg:ml-0">
            {/* card-1  */}
            <div className="flex items-center gap-4 border-r-2 border-zinc-100 pr-5">
              <img src={bestMoney} alt="" />
              <div className="space-y-2 ">
                <h4 className="text-semibold text-lg">Competitive Price</h4>
                <p className="text-sm text-zinc-400">
                  Get The Best Prices Everyday
                </p>
              </div>
            </div>
            {/* card-2  */}
            <div className="flex items-center gap-3 border-r-2 border-zinc-100 pr-5">
              <img src={secure} alt="" />
              <div className="space-y-1 ">
                <h4 className="text-semibold text-lg">Authentic Products</h4>
                <p className="text-md text-zinc-400">
                  Secured with Brand Warranty
                </p>
              </div>
            </div>
            {/* card 3  */}
            <div className="flex items-center gap-3 border-r-2 border-zinc-100 pr-5">
              <img src={Shipping} alt="" />
              <div className="space-y-2 ">
                <h4 className="text-semibold text-lg">
                  Easy & Secured Payment
                </h4>
                <p className="text-sm text-zinc-400">
                  Secured with Brand Warranty
                </p>
              </div>
            </div>
            {/* card 4  */}
            <div className="flex items-center gap-3 border-zinc-200 pr-5">
              <img src={trucks} alt="" />
              <div className="space-y-2 ">
                <h4 className="text-semibold text-lg">Fast Delivery</h4>
                <p className="text-sm text-zinc-400">
                  Rapid delivery At Your Doorstep
                </p>
              </div>
            </div>

          </div>
        </div>
        {/* hero banner image  */}
        <div className="my-6 md:my-2 w-full  h-50 lg:h-70">
          <img src={Banner} alt="" className="w-full h-full"/>
        </div>
      </Layout>
    </section>
  );
};

export default Hero;
