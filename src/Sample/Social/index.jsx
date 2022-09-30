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
      <div className="bg-stone-100 flex justify-center items-center gap-60 py-20">
        <div className="bg-stone-100 grid grid-cols-3 gap-20 ">
          {Word?.map((item) => (
            <div className="text-[#40251B]  ">
              {" "}
              <div className="font-bold">{item?.title}</div>
              <div className="w-1/2 pt-4 font-light">{item?.paragraph}</div>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-stone-100 pb-20 text-center text-sm font-light">
        <h1>© 2023 by Aura Boutique. Proudly created with Wix.com</h1>
      </div>
    </>
  );
};

export default Social;
