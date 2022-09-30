import React from "react";
import About from "../About";
import Contact from "../Contact";
import { ArrowIcon } from "../Svg";
import { Image, UserImage } from "../UserImage";
import Social from "../Social";
// import { useRef } from "react";

const Home = ({aboutRef,contactRef}) => {
  const User = [
    {
      img: "https://static.wixstatic.com/media/c837a6_e21fca002a9241b28c3d472772263a18~mv2.png/v1/fill/w_279,h_157,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e21fca002a9241b28c3d472772263a18~mv2.png",
      title: "Conceptual Development",
      paragraph: "I'm a title. Click here to add your own text and edit me.",
      btn: "Book Now",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_2cab1716301a4eb3a5824dfc0646f1b5~mv2.png/v1/fill/w_279,h_157,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_2cab1716301a4eb3a5824dfc0646f1b5~mv2.png",
      title: "Spatial Planning",
      paragraph: "I'm a title. Click here to add your own text and edit me.",
      btn: "Book Now",
    },
    {
      img: "https://static.wixstatic.com/media/c837a6_f8a5ce8f485546d3bd22f3dbcb3d1c4f~mv2.png/v1/fill/w_279,h_157,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_f8a5ce8f485546d3bd22f3dbcb3d1c4f~mv2.png",
      title: "Construction Management",
      paragraph: "I'm a title. Click here to add your own text and edit me.",
      btn: "Book Now",
    },
  ];
  const Catalog = [
    {
      ImgUrl:
        "https://static.wixstatic.com/media/84770f_aa07d1c8f9a143ea816692de386c2569~mv2.jpg/v1/fill/w_305,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
      title: "Urban Loft",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
    {
      ImgUrl: `https://static.wixstatic.com/media/84770f_89278740b39b49e7ae19b8fed1834b84~mv2.jpg/v1/fill/w_305,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg`,
      title: "California Style B&B",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
    {
      ImgUrl: `https://static.wixstatic.com/media/84770f_6b33c6f694474369b951138dc90c5047~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg`,
      title: "Clean Design Apartment",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
    {
      ImgUrl:
        "https://static.wixstatic.com/media/84770f_22033d30077548ac9548c81f275b67f7~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
      title: "Midtown Artist Condo",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
    {
      ImgUrl:
        "https://static.wixstatic.com/media/84770f_59d21b1cc8db4db7b40a75aa8a80b0c2~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
      title: "Classic Family Home",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
    {
      ImgUrl:
        "https://static.wixstatic.com/media/84770f_41f0e63ff4b5479d98a90f3dbe3852d0~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
      title: "Rustic Cabin",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
    // {
    //   ImgUrl:
    //     "https://static.wixstatic.com/media/84770f_f2a7b55fffdf4c04b9ffe26376dc6da1~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
    //   title: "Natural Style Apartment",
    //   paragraph: "Double click the dataset icon to add your own content.",
    //   word: "View Project",
    // },
    // {
    //   ImgUrl:
    //     "https://static.wixstatic.com/media/84770f_84b33a298a2444f5b59c14118a9b1636~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
    //   title: "Studio Apartment",
    //   paragraph: "Double click the dataset icon to add your own content.",
    //   word: "View Project",
    // },
    // {
    //   ImgUrl:
    //     "https://static.wixstatic.com/media/84770f_ab70484e0c3c410eb56c97a39e6042b6~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
    //   title: "Modern Farm House",
    //   paragraph: "Double click the dataset icon to add your own content.",
    //   word: "View Project",
    // },
  ];
  return (
    
    <div>
      <div>
        <div className="grid grid-cols-2 bg-stone-100">
          <div className="relative bg-[#365150] w-[600px] h-[800px]">
            <div className="absolute -right-20 -bottom-32 text-white ">
              <div>
                <h1 className="text-6xl">
                  Aura <h1> Boutique</h1>{" "}
                </h1>
                <p className="pt-4 pb-5 text-xl font-light">
                  Interior Design Studio
                </p>
                <div>
                  {" "}
                  <UserImage />
                </div>
                <div className="absolute right-[-20%] bottom-14 pl-8">
                  <h1 className="text-sm text-black flex rotate-90">
                    Explore Our Work <ArrowIcon />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-stone-100">
            <Image />
          </div>
        </div>
        <div className="pt-[300px] bg-stone-100" ref={aboutRef}>
          <About />
        </div>
      </div>
      <div className="h-[60vh]" />
      <div className=" bg-stone-100 py-16">
        <h1 className="text-[#40251B] text-6xl font-semibold text-center pt-8">
          Our Services
        </h1>
        <div className="text-[#40251B] grid grid-cols-3 w-1/2 mx-auto pt-20">
          {User?.map((item) => (
            <div className="">
              {" "}
              <div className="flex justify-center">
                <img src={item?.img} alt="" />
              </div>
              <div className="mx-auto pt-10 text-center">
                <div className="text-2xl text-center">{item?.title}</div>
                <div>{item?.paragraph}</div>
              </div>
              <div className="pt-10 flex justify-center">
                <button className="bg-[#365150] text-white py-2 px-6">
                  {item?.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-stone-100 mx-auto pt-20">
        <h1 className="text-[#40251B] w-1/2 mx-auto  pl-56 text-6xl font-semibold">
          Recent Projects
        </h1>{" "}
        <div className="grid grid-cols-3 w-1/2  mx-auto pt-20">
          {Catalog?.map((item) => (
            <div className="text-[#40251B] pb-10 ">
              <div className="">
                <img
                  src={item?.ImgUrl}
                  alt=""
                  className="w-[290px] h-[212px]"
                />
              </div>
              <p className="text-lg font-medium font-bold pt-2">
                {item?.title}
              </p>
              <p className="font-light w-3/4">{item?.paragraph}</p>
              <button className="font-light text-sm pb-1 border-[#40251B]  border-b">
                {item?.word}
              </button>
            </div>
          ))}
        </div>
          <div className="py-10 text-center">
            <button className = "text-[#40251B] px-10 py-2 mb-8   border border-[#40251B] ">
              View all Projects
            </button>
          </div>
      </div>
<div ref={contactRef}>
      <Contact /></div>
      <div className=""><Social /></div>
    </div>
  );
};

export default Home;
