import React from "react";
const Porfolio = () => {
  const Catalog = [
    {
      ImgUrl: "https://static.wixstatic.com/media/84770f_aa07d1c8f9a143ea816692de386c2569~mv2.jpg/v1/fill/w_305,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
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
      ImgUrl: "https://static.wixstatic.com/media/84770f_22033d30077548ac9548c81f275b67f7~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
      title: "Midtown Artist Condo",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
    {
      ImgUrl: "https://static.wixstatic.com/media/84770f_59d21b1cc8db4db7b40a75aa8a80b0c2~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
      title: "Classic Family Home",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
    {
      ImgUrl: "https://static.wixstatic.com/media/84770f_41f0e63ff4b5479d98a90f3dbe3852d0~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
      title: "Rustic Cabin",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
    {
      ImgUrl: "https://static.wixstatic.com/media/84770f_f2a7b55fffdf4c04b9ffe26376dc6da1~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
      title: "Natural Style Apartment",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
    {
      ImgUrl: "https://static.wixstatic.com/media/84770f_84b33a298a2444f5b59c14118a9b1636~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
      title: "Studio Apartment",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
    {
      ImgUrl: "https://static.wixstatic.com/media/84770f_ab70484e0c3c410eb56c97a39e6042b6~mv2.jpg/v1/fill/w_290,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1774345550.jpg",
      title: "Modern Farm House",
      paragraph: "Double click the dataset icon to add your own content.",
      word: "View Project",
    },
  ];
  return (
    <div>
      <div className=" relative bg-[#365150] text-white text-center pt-4">
        {" "}
        <h1 className="text-6xl pt-8 font-semibold">Portfolio</h1>
        <p className=" w-1/3 pt-10 mx-auto px-28 font-light pb-40">
          I'm a paragraph. Click here to add your own text and edit me. I'm a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
      </div>
      <div className=" grid grid-cols-3 mx-auto absolute pl-96  -mt-28">
        {Catalog?.map((item) => (
          <div className="text-[#40251B] pb-10">
            <div className="">
              <img src={item?.ImgUrl} alt="" className="w-[290px] h-[212px]" />
            </div>
            <p className="text-lg font-medium font-bold pt-2">{item?.title}</p>
            <p className="font-light w-3/4">{item?.paragraph}</p>
            <button className="font-light text-sm pb-1 border-[#40251B]  border-b">{item?.word}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Porfolio;
