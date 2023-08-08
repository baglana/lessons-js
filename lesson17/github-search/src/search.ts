import { type User } from "./types.ts";
import renderCard from "./card.ts";

const API_KEY = "";

async function handleSearch(searchStr: string) {
  if (!searchStr) {
    return;
  }

  const user = await fetchUser(searchStr);
  if (user) {
    renderCard(user);
  }
}

async function fetchUser(searchStr: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${searchStr}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${API_KEY}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (!response.ok) {
      await Promise.reject(`${response.status} ${response.statusText}`);
    }

    const json: User = await response.json();

    return json;
  } catch (err) {
    console.error(err);
  }
}

export default handleSearch;
