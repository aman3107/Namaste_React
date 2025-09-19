// import React from "react";
// import ReactDOM from "react-dom/client";
// import { jsx } from "react/jsx-runtime";
// import food from "./img/food_image.png";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX

// React Element
// const jsxHeading = (
//   <h1 id="heading" className="head">
//     Namaste React using JSX 🚀
//   </h1>
// );

// React Component
// 1. Class Based Component
// 2. Functional Component

//  React Functional Component

// const Title = () => {
//   return <h1>This is title Yes</h1>;
// };

// const num = 100;

// const Heading = () => {
//   return (
//     <div id="heading">
//       <Title />
//       {jsxHeading}
//       <h2>{"hello"}</h2>

//       <h1>Hello World</h1>
//       <h1>How Are you</h1>
//     </div>
//   );
// };

// console.log(jsxHeading);
// console.log(Heading);
// root.render(jsxHeading);
// console.log(Title);
// root.render(<Heading />);
// Conditional Rendering
// if (listOfRestuarants.length === 0) {
//   return <Shimmer />;
// }

// createBrowserRouter
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

// const resList = [
//   {
//     info: {
//       id: "234875",
//       name: "Adil Hotel",
//       cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
//       locality: "Rautha Wada",
//       areaName: "Chhindwara Locality",
//       costForTwo: "₹150 for two",
//       cuisines: ["Biryani", "Tandoor"],
//       avgRating: 4.4,
//       parentId: "27123",
//       avgRatingString: "4.4",
//       totalRatingsString: "1.3K+",
//       sla: {
//         deliveryTime: 30,
//         lastMileTravel: 11.5,
//         serviceability: "SERVICEABLE",
//         slaString: "25-30 mins",
//         lastMileTravelString: "11.5 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-17 00:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       aggregatedDiscountInfoV2: {},
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-85550cb7-b3f0-4d8d-99f2-03c9cd31e51f",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "151649",
//       name: "Hotel Sai Nath & Sai Restaurant",
//       cloudinaryImageId: "vkhcohhmqfczycw9vsar",
//       locality: "railway station",
//       areaName: "Chhindwara Locality",
//       costForTwo: "₹200 for two",
//       cuisines: [
//         "North Indian",
//         "South Indian",
//         "Chinese",
//         "Beverages",
//         "Fast Food",
//         "Desserts",
//       ],
//       avgRating: 4.3,
//       veg: true,
//       parentId: "101802",
//       avgRatingString: "4.3",
//       totalRatingsString: "1.0K+",
//       sla: {
//         deliveryTime: 33,
//         lastMileTravel: 11.3,
//         serviceability: "SERVICEABLE",
//         slaString: "30-35 mins",
//         lastMileTravelString: "11.3 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-16 22:30:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹175 OFF",
//         subHeader: "ABOVE ₹699",
//         discountTag: "FLAT DEAL",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-85550cb7-b3f0-4d8d-99f2-03c9cd31e51f",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "151515",
//       name: "Gupta Bhojnalay",
//       cloudinaryImageId: "jo9pdipf4elcuch8g55q",
//       locality: "fulwara chowk",
//       areaName: "Chhindwara Locality",
//       costForTwo: "₹200 for two",
//       cuisines: ["Fast Food", "Indian", "Beverages"],
//       avgRating: 4.1,
//       veg: true,
//       parentId: "91635",
//       avgRatingString: "4.1",
//       totalRatingsString: "452",
//       sla: {
//         deliveryTime: 38,
//         lastMileTravel: 11.8,
//         serviceability: "SERVICEABLE",
//         slaString: "35-40 mins",
//         lastMileTravelString: "11.8 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-16 23:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹100 OFF",
//         subHeader: "ABOVE ₹999",
//         discountTag: "FLAT DEAL",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-85550cb7-b3f0-4d8d-99f2-03c9cd31e51f",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "151656",
//       name: "Dev International",
//       cloudinaryImageId: "enj3srsnhbltbom2ovvh",
//       locality: "khajri road",
//       areaName: "Mohan Nagar",
//       costForTwo: "₹100 for two",
//       cuisines: ["Chinese", "Fast Food", "Beverages"],
//       avgRating: 4.3,
//       parentId: "71556",
//       avgRatingString: "4.3",
//       totalRatingsString: "556",
//       sla: {
//         deliveryTime: 44,
//         lastMileTravel: 13.6,
//         serviceability: "SERVICEABLE",
//         slaString: "40-50 mins",
//         lastMileTravelString: "13.6 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-16 22:30:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹100 OFF",
//         subHeader: "ABOVE ₹299",
//         discountTag: "FLAT DEAL",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-85550cb7-b3f0-4d8d-99f2-03c9cd31e51f",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "151518",
//       name: "Bakery World",
//       cloudinaryImageId: "mt2aggiscfl3yviatwng",
//       locality: "Parasia Road",
//       areaName: "Parasia Road",
//       costForTwo: "₹250 for two",
//       cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
//       avgRating: 4.3,
//       veg: true,
//       parentId: "40363",
//       avgRatingString: "4.3",
//       totalRatingsString: "286",
//       sla: {
//         deliveryTime: 38,
//         lastMileTravel: 14.1,
//         serviceability: "SERVICEABLE",
//         slaString: "35-40 mins",
//         lastMileTravelString: "14.1 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-16 22:30:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹99",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-85550cb7-b3f0-4d8d-99f2-03c9cd31e51f",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "150591",
//       name: "Satkar Restaurant",
//       cloudinaryImageId: "rvxp5xbniat84r6efku2",
//       locality: "Sinchai Colony",
//       areaName: "Satkar Chowk",
//       costForTwo: "₹250 for two",
//       cuisines: ["South Indian", "Indian", "Salads", "Desserts"],
//       avgRating: 4.4,
//       veg: true,
//       parentId: "21553",
//       avgRatingString: "4.4",
//       totalRatingsString: "3.1K+",
//       sla: {
//         deliveryTime: 34,
//         lastMileTravel: 13.4,
//         serviceability: "SERVICEABLE",
//         slaString: "30-35 mins",
//         lastMileTravelString: "13.4 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-16 22:45:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "Rxawards/_CATEGORY-North%20Indian.png",
//             description: "Delivery!",
//           },
//           {
//             imageId:
//               "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
//             description: "Delivery!",
//           },
//         ],
//       },
//       isOpen: true,
//       aggregatedDiscountInfoV2: {},
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "Delivery!",
//                   imageId: "Rxawards/_CATEGORY-North%20Indian.png",
//                 },
//               },
//               {
//                 attributes: {
//                   description: "Delivery!",
//                   imageId:
//                     "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-85550cb7-b3f0-4d8d-99f2-03c9cd31e51f",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "658210",
//       name: "The Fusion Lounge",
//       cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
//       locality: "Triloki nagar",
//       areaName: "Railway Station",
//       costForTwo: "₹300 for two",
//       cuisines: [
//         "South Indian",
//         "Chinese",
//         "Beverages",
//         "Fast Food",
//         "Desserts",
//       ],
//       avgRating: 4.1,
//       parentId: "395453",
//       avgRatingString: "4.1",
//       totalRatingsString: "356",
//       sla: {
//         deliveryTime: 45,
//         lastMileTravel: 11.9,
//         serviceability: "SERVICEABLE",
//         slaString: "40-50 mins",
//         lastMileTravelString: "11.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-16 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       aggregatedDiscountInfoV2: {},
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-85550cb7-b3f0-4d8d-99f2-03c9cd31e51f",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "151648",
//       name: "Mr. Gurung Momo & Chinese Corner",
//       cloudinaryImageId: "h7oibtpm7kqks8cqz3gh",
//       locality: "Teacher's Colony",
//       areaName: "Mohan Nagar",
//       costForTwo: "₹150 for two",
//       cuisines: ["Momos", "Chinese", "Fast Food"],
//       avgRating: 4.1,
//       veg: true,
//       parentId: "140255",
//       avgRatingString: "4.1",
//       totalRatingsString: "1.1K+",
//       sla: {
//         deliveryTime: 46,
//         lastMileTravel: 13.7,
//         serviceability: "SERVICEABLE",
//         slaString: "45-55 mins",
//         lastMileTravelString: "13.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-16 23:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹129",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-85550cb7-b3f0-4d8d-99f2-03c9cd31e51f",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "522144",
//       name: "Blue Chilli Restaurant",
//       cloudinaryImageId: "je6qlse8csxgcfpuoybe",
//       locality: "Ambedkar Nagar",
//       areaName: "Prasia Road",
//       costForTwo: "₹150 for two",
//       cuisines: ["South Indian", "Indian", "Fast Food"],
//       avgRating: 4.1,
//       veg: true,
//       parentId: "311804",
//       avgRatingString: "4.1",
//       totalRatingsString: "226",
//       sla: {
//         deliveryTime: 42,
//         lastMileTravel: 10.9,
//         serviceability: "SERVICEABLE",
//         slaString: "40-50 mins",
//         lastMileTravelString: "10.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-16 23:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹59",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-85550cb7-b3f0-4d8d-99f2-03c9cd31e51f",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/chhindwara/blue-chilli-restaurant-ambedkar-nagar-prasia-road-rest522144",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "625927",
//       name: "Kathi Junction",
//       cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
//       locality: "Bunglow Madhuvan Colony",
//       areaName: "Prasia Road",
//       costForTwo: "₹200 for two",
//       cuisines: ["rolls", "Burgers", "Pizzas", "Fast Food"],
//       avgRating: 4.3,
//       parentId: "1935",
//       avgRatingString: "4.3",
//       totalRatingsString: "389",
//       sla: {
//         deliveryTime: 40,
//         lastMileTravel: 12.2,
//         serviceability: "SERVICEABLE",
//         slaString: "40-50 mins",
//         lastMileTravelString: "12.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-16 23:15:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "15% OFF",
//         subHeader: "UPTO ₹100",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-85550cb7-b3f0-4d8d-99f2-03c9cd31e51f",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "184424",
//       name: "Sab Ghar Tak Foods",
//       cloudinaryImageId: "ryzswg44bt7thqzkuaj4",
//       locality: "Sanchar Colony",
//       areaName: "Parsia Road",
//       costForTwo: "₹200 for two",
//       cuisines: [
//         "North Indian",
//         "South Indian",
//         "Chinese",
//         "Beverages",
//         "Fast Food",
//         "Desserts",
//       ],
//       avgRating: 4.1,
//       parentId: "173932",
//       avgRatingString: "4.1",
//       totalRatingsString: "617",
//       sla: {
//         deliveryTime: 48,
//         lastMileTravel: 14.1,
//         serviceability: "SERVICEABLE",
//         slaString: "45-55 mins",
//         lastMileTravelString: "14.1 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2025-08-16 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹50 OFF",
//         subHeader: "ABOVE ₹199",
//         discountTag: "FLAT DEAL",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//       externalRatings: {
//         aggregatedRating: {
//           rating: "--",
//         },
//       },
//       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//       context: "seo-data-85550cb7-b3f0-4d8d-99f2-03c9cd31e51f",
//     },
//     cta: {
//       link: "https://www.swiggy.com/city/chhindwara/sab-ghar-tak-foods-sanchar-colony-parsia-road-rest184424",
//       type: "WEBLINK",
//     },
//   },
// ];

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const RestaurantCard = (props) => {
//   const { resData } = props;
//   const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
//     resData?.info;
//   return (
//     <div className="res-card">
//       <img
//         className="res-logo"
//         alt={resData.info.name}
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           resData.info.cloudinaryImageId
//         }
//       />
//       <h3>{name}</h3>
//       <h4>{cuisines.join(", ")}</h4>
//       <h4>{avgRating} stars</h4>
//       <h4>{costForTwo} </h4>
//       <h4>{sla.deliveryTime} minutes</h4>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search"> Search</div>
//       <div className="res-container">
//         {resList.map((resObj, i) => (
//           <RestaurantCard key={resObj.info.id} resData={resObj} />
//         ))}
//         {/* Restaurant Card */}
//         {/* <RestaurantCard
//           resName="Meghna Foods"
//           cuisine="Biryani, North Indian, Asian"
//           rating="4.5"
//         />
//         <RestaurantCard
//           resName="KFC"
//           cuisine="Burger, Fast food"
//           rating="4.6"
//         /> */}
//       </div>
//     </div>
//   );
// };

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// root.render(<AppLayout />);

// How to use useEffect
// useEffect(() => {
//   fetchMenu();
// }, []);

// const fetchMenu = async () => {
//   const data = await fetch(Menu_URL + resId);

//   const json = await data.json();
//   setResInfo(json.data);
// };

{
  /* <ul>
        {itemCards.map((item, ind) => (
          <li key={item.card.info.id}>
            <strong className="font-medium">
              {ind + 1}: {item?.card?.info?.name} - {"Rs."}
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100}
            </strong>
          </li>
        ))}
      </ul> */
}

{
  /* <div>
      <h1 className="font-bold text-2xl py-2 flex justify-center">{title}</h1>
      <div>
        {itemCards !== undefined
          ? itemCards.map((item, i) => (
              <p className="leading-8 font-semibold">
                {i + 1}: {item.card.info.name} Rs.
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </p>
            ))
          : 0}
      </div>
    </div> */
}
