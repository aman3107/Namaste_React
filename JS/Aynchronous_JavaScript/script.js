// setInteval

// let c = 0;

// const myInterval = setInterval(() => {
//   console.log("Hello World");
//   c++;
//   if (c === 5) clearInterval(myInterval);
// }, 1000);

// //setTimeout

// const myInterval1 = setTimeout(() => console.log("Hello"), 1000);
// clearTimeout(myInterval1);

// Asynchronous example

const funcOne = () => {
  console.log("Function 1");

  funcTwo();

  console.log("Function 1, Part 2");
};

const funcTwo = () => {
  setTimeout(() => console.log("Function 2"), 1000);
};

// funcOne();

// CallBacks

// const fetchUser = (username, callback) => {
//   console.log("Fetching ...");
//   setTimeout(() => {
//     console.log("Now we have the user");
//     callback({ username });
//   }, 1000);
// };

// const fetcUserPhotos = (username, callback) => {
//   setTimeout(() => {
//     console.log(`Now we have the photos ${username}`);
//     callback(["Photo 1", "Photo 2"]);
//   }, 1000);
// };

// const fetchPhotoDetails = (photo, callback) => {
//   setTimeout(() => {
//     console.log(`Now we have photo details for photo ${photo}`);
//     callback("Details...");
//   }, 1000);
// };

// // Callback Hell

// fetchUser("Aman", (user) => {
//   console.log(user.username);
//   fetcUserPhotos(user.username, (userPhotos) => {
//     console.log(`Your photos are ${userPhotos}`);
//     fetchPhotoDetails(userPhotos[0], (details) => {
//       console.log(`Here are the details of the ${details}`);
//     });
//   });
// });

// Promises

// const fetchUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Now we have the user");
//     // resolve({ username: "Michel" });
//     reject("User not found");
//   });
// });

// fetchUser
//   .then((user) => console.log(user.username))
//   .catch((error) => console.log(error));

const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the user");
      resolve({ username });
      // reject("User not found");
    }, 2000);
  });
};

const fetcUserPhotos = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Now we have the photos ${username}`);
      resolve(["Photo 1", "Photo 2"]);
    });
  }, 2000);
};

const fecthPhotoDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Now we have photo details for photo ${photo}`);
      resolve("Details...");
    }, 2000);
  });
};

// fetchUser("Aman")
//   .then((user) =>
//     fetcUserPhotos(user.username).then((photos) =>
//       fecthPhotoDetails(photos[0]).then((details) =>
//         console.log(`Here are the details of photo ${details}`)
//       )
//     )
//   )
//   .catch((err) => {
//     console.log(err);
//   });

// Async/Await

const fetchNumber = async () => {
  return 25;
};

const confetchedNumber = async () => {
  const number = await fetchNumber();
  console.log(number);
};

confetchedNumber();

const diplayData = async () => {
  const user = await fetchUser("Jon");
  const photos = await fetcUserPhotos(user.username);
  const details = await fecthPhotoDetails(photos[0]);
  console.log(`Now you have the details of ${photos[0]} ${details}`);
};

diplayData();
