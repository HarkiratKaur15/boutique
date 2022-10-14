import React from "react";

const Social = () => {
  const Word = [
    {
      title: "Address",
      paragraph: "500 Terry Francois Street San Francisco, CA 94158",
    },
    {
      title: "Contact",
      paragraph: "Mail: info@mysite.com Phone: 123-456-7890",
    },
    { title: "Socials", paragraph: "Facebook Instagram Twitter" },
  ];
  return (
    <>
      <div className="bg-stone-100 md:flex justify-center items-center gap-60 pl-2 py-20">
        <div className="flex gap-3">
          <div>
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="29 30.5 147.9 147.9"
              viewBox="29 30.5 147.9 147.9"
              className="w-12 h-12 text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#c9917d"
                  d="M143.5 104.5c0 22.423-18.177 40.6-40.6 40.6-22.423 0-40.6-18.177-40.6-40.6 0-22.423 18.177-40.6 40.6-40.6 22.423 0 40.6 18.177 40.6 40.6z"
                  data-color="1"
                ></path>
                <path
                  d="M176.9 175.6l-10.3-10.3V40.9H42.2L31.8 30.5 29 33.4l10.3 10.3v124.4h124.4l10.3 10.3 2.9-2.8zM162.5 44.9v116.4L46.2 44.9h116.3zM43.4 164.1V47.7l116.4 116.4H43.4z"
                  fill="#4c2518"
                  data-color="2"
                ></path>
              </g>
            </svg>
          </div>
          <div className=" ">
            <h1 className="font-light text-sm pt-1 ">
              AURA<h1>BOUTIQUE</h1>
            </h1>
          </div>
        </div>
        <div className="bg-stone-100 lg:grid lg:grid-cols-3 gap-20 ">
          {Word?.map((item) => (
            <div className="text-[#40251B]  ">
              {" "}
              <div className="font-semibold text-lg">{item?.title}</div>
              <div className="w-1/2 pt-4 font-light">{item?.paragraph}</div>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-stone-100 pb-20 text-center text-sm font-light">
        <h1>© 2023 by Aura Boutique. Proudly created with kirat.com</h1>
      </div>
    </>
  );
};

export default Social;
