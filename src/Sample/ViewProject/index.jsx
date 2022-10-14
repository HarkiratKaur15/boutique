import React from "react";
import { LeftArrowIcon } from "../UserImage";
import { productDetails } from "../ProductDetails";
import { useParams } from "react-router-dom";
import Social from "../Social";



const ViewProject = () => {
  const { productId } = useParams();

  console.log(productId,"id")
  // const ViewProject = productDetails.find(prod => prod.id === id)
  // console.log(ViewProject,"ViewProject");

  const thisProduct = productDetails.find((prod) => prod.id.toString() === productId.toString());
  // console.log('productId',productDetails)
  // console.log('productDetails',  productDetails.find((fil)=>console.log('fil', fil.id.toString()===productId.toString())))

  console.log(thisProduct, "product");
  return (
    <div className="bg-stone-100  ">
      
        <div className="flex gap-10 ">
          <div className="w-1/4 mx-auto">
           <LeftArrowIcon/>
         
            <p className="text-6xl font-semibold text-[#40251B]">
              {thisProduct?.title}
            </p>
            <div className="flex gap-2 pt-8">
              <p className="text-[#40251B] font-semibold">Location:</p>
              <p className="font-light">{thisProduct?.location}</p>
              <p className="text-[#40251B] font-semibold"> Date:</p>
              <p  className=" font-light text-[#40251B]">{thisProduct?.date}</p>
            </div>
            <div className="flex gap-2  pt-8">
              <p className="text-[#40251B] font-semibold"> Photographer: </p>
              <p className=" font-light text-[#40251B]">{thisProduct?.photographer}</p>
              <p className="text-[#40251B] font-semibold"> Type: </p>
              <p  className="text-[#40251B] font-light">{thisProduct?.type}</p>
            </div>
            <p className="pt-8 font-light ">{thisProduct?.paragraph}</p>
          </div>

          <div>
            <img src={thisProduct?.Img} alt="" className="w-[750px] h-[860px] " />
          </div>
        </div>
          <div className="bg-[#365150] h-screen w-full -mt-32"></div>
          <Social/>

    </div>
  );
};

export default ViewProject;
