console.log("Start request");

// async/await

async function callSwapi() {
  try {
    const promise = fetch("https://swapi.dev/api/films");

    const response1 = await promise;

    console.log("success 1");

    if (!response1.ok) {
      return Promise.reject(response1.statusText);
    }

    const json1 = await response1.json();

    console.log("success 2");

    const response2 = await fetch(json1.results[0].characters[0]);

    console.log("success 3");

    if (!response2.ok) {
      return Promise.reject(response2.statusText);
    }

    const json2 = await response2.json();

    console.log("success 4", json2);
  } catch (err) {
    console.error("err", err);
  } finally {
    console.log("FINALLY");
  }
}

callSwapi();

// fetch("https://swapi.dev/api/films")
//   .then((response) => {
//     console.log("success 1");
//
//     if (!response.ok) {
//       return Promise.reject(response.statusText);
//     }
//
//     return response.json();
//   })
//   .then((response) => {
//     console.log("success 2");
//
//     return fetch(response.results[0].characters[0]);
//   })
//   .then((response) => {
//     console.log("success 3");
//
//     if (!response.ok) {
//       return Promise.reject(response.statusText);
//     }
//
//     if (response) {
//       return response.json();
//     }
//   })
//   .then((response) => {
//     console.log("success 4", response);
//   })
//   .catch((err) => {
//     console.error("err", err);
//   })
//   .finally(() => {
//     console.log("FINALLY");
//   });
