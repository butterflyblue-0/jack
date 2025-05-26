// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "./CocktailCarousel.css";

// import gentlemanJack from "../assets/gentleman-jack.jpg";
// import tennesseeMule from "../assets/tennessee-mule.jpg";
// import lynchburgLemonade from "../assets/lynchburg-lemonade.jpg";
// import oldFashioned from "../assets/old-fashioned.jpg";
// import appleGinger from "../assets/apple-ginger.jpg";

// const cocktails = [
//   {
//     id: 1,
//     title: "Gentleman Jack On A Rock",
//     image: gentlemanJack,
//     tag: "GENTLEMAN JACK",
//     desc: "Every drop is crafted with care in Lynchburg, TN.",
//     flavor: ["On the rocks", "Smooth", "Spicy"],
//   },
//   {
//     id: 2,
//     title: "Tennessee Mule",
//     image: tennesseeMule,
//     tag: "OLD NO. 7",
//     desc: "The fiery spicy of ginger with the smoothness of Jack",
//     flavor: ["Citrus", "Refreshing", "Spicy"],
//   },
//   {
//     id: 3,
//     title: "Lynchburg Lemonade",
//     image: lynchburgLemonade,
//     tag: "OLD NO. 7",
//     desc: "A taste of our homeplace and summer over ice",
//     flavor: ["Citrus", "Sour", "Refreshing"],
//   },
//   {
//     id: 4,
//     title: "Single Barrel Old Fashioned",
//     image: oldFashioned,
//     tag: "SINGLE BARREL SELECT",
//     desc: "A cocktail classic elevated to the top shelf",
//     flavor: ["Sweet", "Savory", "Smooth"],
//   },
//   {
//     id: 5,
//     title: "Tennessee Apple Ginger",
//     image: appleGinger,
//     tag: "TENNESSEE APPLE",
//     desc: "Perfectly sweet and spice.",
//     flavor: ["Sweet", "Refreshing", "Spicy"],
//   }
// ];

// const CocktailCarousel = () => {
//   return (
//     <section className="cocktail-carousel">
//       <Swiper
//         slidesPerView={2.5}
//         spaceBetween={30}
//         centeredSlides={true}
//         loop={true}
//         className="mySwiper"
//       >
//         {cocktails.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="card">
//               <div className="tag-vertical">{item.tag}</div>
//               <img src={item.image} alt={item.title} className="card-img" />
//               <div className="card-content">
//                 <h3>{item.title}</h3>
//                 <p className="desc">{item.desc}</p>
//                 <p className="tags">{item.flavor.join(" • ")}</p>
//                 <p className="view-recipe">VIEW RECIPE &gt;</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default CocktailCarousel;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CocktailCarousel.css";

import gentlemanJack from "../assets/gentleman-jack.jpg";
import tennesseeMule from "../assets/tennessee-mule.jpg";
import lynchburgLemonade from "../assets/lynchburg-lemonade.jpg";
import oldFashioned from "../assets/old-fashioned.jpg";
import appleGinger from "../assets/apple-ginger.jpg";

const cocktails = [
  {
    id: 1,
    title: "Gentleman Jack On A Rock",
    image: gentlemanJack,
    tag: "GENTLEMAN JACK",
    desc: "Every drop is crafted with care in Lynchburg, TN.",
    flavor: ["On the rocks", "Smooth", "Spicy"],
  },
  {
    id: 2,
    title: "Tennessee Mule",
    image: tennesseeMule,
    tag: "OLD NO. 7",
    desc: "The fiery spicy of ginger with the smoothness of Jack",
    flavor: ["Citrus", "Refreshing", "Spicy"],
  },
  {
    id: 3,
    title: "Lynchburg Lemonade",
    image: lynchburgLemonade,
    tag: "OLD NO. 7",
    desc: "A taste of our homeplace and summer over ice",
    flavor: ["Citrus", "Sour", "Refreshing"],
  },
  {
    id: 4,
    title: "Single Barrel Old Fashioned",
    image: oldFashioned,
    tag: "SINGLE BARREL SELECT",
    desc: "A cocktail classic elevated to the top shelf",
    flavor: ["Sweet", "Savory", "Smooth"],
  },
  {
    id: 5,
    title: "Tennessee Apple Ginger",
    image: appleGinger,
    tag: "TENNESSEE APPLE",
    desc: "Perfectly sweet and spice.",
    flavor: ["Sweet", "Refreshing", "Spicy"],
  }
];

const CocktailCarousel = () => {
  return (
    <section className="cocktail-carousel">
      <Swiper
        slidesPerView={4}
        spaceBetween={24}
        centeredSlides={true}
        loop={true}
        className="cocktail-swiper"
      >
        {cocktails.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">
              <div className="tag-vertical">{item.tag}</div>
              <img src={item.image} alt={item.title} className="card-img" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p className="desc">{item.desc}</p>
                <p className="tags">{item.flavor.join(" • ")}</p>
                <p className="view-recipe">VIEW RECIPE &gt;</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CocktailCarousel;
