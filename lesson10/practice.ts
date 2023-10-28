// async function fetchYandex() {
//   console.log("fetching Yandex!!!");
// }
//
// async function fetchGoogle() {
//   try {
//     const request = new Request("https://www.google.com");
//
//     const response = await fetch(request);
//
//     if (!response.ok) {
//       console.log("Response is not ok!!!!!");
//       // throw new Error(
//       //   `The Google responded with ${response.status} - ${response.statusText}`
//       // );
//
//       await Promise.reject(
//         `The Google responded with ${response.status} - ${response.statusText}`
//       );
//     }
//
//     const text = await response.text();
//
//     console.log(text);
//   } catch (err) {
//     console.log("err", err);
//     fetchYandex();
//   }
// }
//
// fetchGoogle();

type ResponseBody = {
  status?: string;
  message?: { waterdog?: string[]; wolfhound?: string[] };
};

// async function fetchDogsInfo() {
//   try {
//     const request = new Request("https://dog.ceo/api/breeds/list/all", {
//       method: "GET",
//     });
//
//     const response = await fetch(request);
//
//     if (!response.ok) {
//       await Promise.reject(
//         new Error(
//           `server responded with ${response.status} - ${response.statusText}`
//         )
//       );
//     }
//
//     const json: ResponseBody = await response.json();
//
//     console.log(json?.message?.waterdog?.[0]);
//   } catch (err) {
//     console.log("err", err);
//   }
// }
//
// fetchDogsInfo();
