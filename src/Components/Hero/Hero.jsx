// import React from "react";
// import "./Hero.css";
// import { FaArrowRightLong } from "react-icons/fa6";
// import hero from "../Assets/hero.jpg";
// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const shuffle = (array) => {
//     let currentIndex = array.length,
//       randomIndex;

//     while (currentIndex != 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex],
//         array[currentIndex],
//       ];
//     }

//     return array;
//   };

//   const squareData = [
//     {
//       id: 1,
//       src: "data:image/jpeg;base64,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",
//     },
//     {
//       id: 2,
//       src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//       id: 3,
//       src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//       id: 4,
//       src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//       id: 5,
//       src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
//     },
//     {
//       id: 6,
//       src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     },
//     {
//       id: 7,
//       src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     },
//     {
//       id: 8,
//       src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     },
//     {
//       id: 9,
//       src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     },
//     {
//       id: 10,
//       src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//       id: 11,
//       src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
//     },
//     {
//       id: 12,
//       src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
//     },
//     {
//       id: 13,
//       src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     },
//     {
//       id: 14,
//       src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
//     },
//     {
//       id: 15,
//       src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
//     },
//     {
//       id: 16,
//       src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
//     },
//   ];

//   const generateSquares = () => {
//     return shuffle(squareData).map((sq) => (
//       <motion.div
//         key={sq.id}
//         layout
//         transition={{ duration: 1.5, type: "spring" }}
//         className="w-full h-full"
//         style={{
//           backgroundImage: `url(${sq.src})`,
//           backgroundSize: "cover",
//         }}
//       ></motion.div>
//     ));
//   };

//   const ShuffleGrid = () => {
//     const timeoutRef = useRef(null);
//     const [squares, setSquares] = useState(generateSquares());

//     useEffect(() => {
//       shuffleSquares();

//       return () => clearTimeout(timeoutRef.current);
//     }, []);

//     const shuffleSquares = () => {
//       setSquares(generateSquares());

//       timeoutRef.current = setTimeout(shuffleSquares, 3000);
//     };

//     return (
//       <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
//         {squares.map((sq) => sq)}
//       </div>
//     );
//   };
//   return (
//     //     <div className="hero">
//     //       <div className="hero-left">
//     //         <h2>NEW ARRIVALS ONLY</h2>
//     //         <div>
//     //           <div className="hero-hand-icon">
//     //             <p>new</p>
//     //             <img src="" alt="" />
//     //           </div>
//     //           <p>collection</p>
//     //           <p> for everyone</p>
//     //         </div>
//     //         <div className="hero-latest-btn">
//     //           <div>latest collection</div>
//     //           <span>
//     //             <FaArrowRightLong />
//     //           </span>
//     //         </div>
//     //       </div>
//     //       <div className="hero-right">
//     //         <img src={hero} alt="" />
//     //       </div>
//     //     </div>
//     //   );
//     // };

//     <>
//       <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
//         <div>
//           <span className="block mb-4 text-xs md:text-2xl text-indigo-500 font-medium">
//             Best in terms of quality
//           </span>
//           <h3 className="text-4xl md:text-6xl font-semibold">
//             Let's change it up a bit
//           </h3>
//           <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis
//             in error repellat voluptatibus ad.
//           </p>
//           <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
//             Find a class
//           </button>
//         </div>
//         <ShuffleGrid />
//       </section>

//       {/* <Oscar2 /> */}
//       {/* <Oscar3 /> */}
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-2xl text-indigo-500 font-medium">
          New Arrivals
        </span>
        <h3 className="text-4xl md:text-5xl font-semibold">
          Fresh Finds for All to Enjoy!
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          <span className="text-indigo-500"> @NOLA'S</span> store, we make you
          look beautiful without breaking bank
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Latest collections
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://source.boomplaymusic.com/buzzgroup1/M00/40/80/rBEevGMRFCuANuiIAAK5BpdwG5Q648.jpg",
  },
  {
    id: 2,
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzAQeKHpVBydgpk681XqxTrDUjJXIseTiTAvQFoozS_CTPKo6tzLi_pE4mIjvLIg7Y3JZJSRKzZtF4Vh9UBdoD4cZ6F1KaAyOc65Ppn1ZOHUhTkbKDUEhJjHiJqw9Jjes0boV6zmhA9YiEEnfbPFVeOsSjCNMXPqi7oi30QosTp52r3ETpMOACxUppQzeW/s16000-rw/avant-garde%20paper%20fashion%20by%20Mandy%20Duncan%20of%20Curl%20Paper%20Couture,%20as%20seen%20on%20allthingspaper.net.jpg",
  },
  {
    id: 3,
    src: "https://www.shutterstock.com/shutterstock/photos/1854315346/display_1500/stock-photo-portrait-of-an-african-american-girl-in-neon-light-dressed-in-a-sequin-suit-and-posing-in-1854315346.jpg",
  },
  {
    id: 4,
    src: "https://i.insider.com/659b3c9bec62ab5daf815fda?width=800&format=jpeg&auto=webp",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/1200x/d8/84/5e/d8845edd0b58851d1cdbc6d6a48a180a.jpg",
  },
  {
    id: 6,
    src: "https://hips.hearstapps.com/hmg-prod/images/fashion-ig-captions-66bf6c15c8bd1.png?crop=0.5xw:1xh;center,top&resize=1200:*",
  },
  {
    id: 7,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlM-uH96nA0HeG7KhDxHJKHG1y_hz2wVNdg&s",
  },
  {
    id: 8,
    src: "https://media.boohoo.com/i/boohoo/hzz16394_dark%20red_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
  },
  {
    id: 9,
    src: "https://glaminati.com/wp-content/uploads/2022/03/sexy-club-outfits-silver-dress-long-sleeve-cuts-cute-look.jpg",
  },
  {
    id: 10,
    src: "https://i0.wp.com/www.weddingforward.com/wp-content/uploads/2023/08/beach-wedding-guest-dresses-simple-long-satin-with-spaghetti-straps-sexy-alamourthelabel.jpg?fit=1080%2C1350&quality=70&ssl=1",
  },
  {
    id: 11,
    src: "https://www.afewwoodmen.com/cdn/shop/articles/Featured_img_1200x1200.png?v=1633349971",
  },
  {
    id: 12,
    src: "https://i.pinimg.com/originals/af/42/d6/af42d6b0d0faac5d1acfe058ad216c65.jpg",
  },
  {
    id: 13,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8v1S8_fxCOxIdIiKIa_ZlGvhGcMGX0NlAg&s",
  },
  {
    id: 14,
    src: "https://i.pinimg.com/236x/f2/07/0e/f2070eae2fba161d9fcd98dae1567a1c.jpg",
  },
  {
    id: 15,
    src: "https://i.pinimg.com/originals/35/fb/ae/35fbae8072afecafe982e4cf889c6763.jpg",
  },
  {
    id: 16,
    src: "https://i.ytimg.com/vi/wTClY2k2W9M/maxresdefault.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;
