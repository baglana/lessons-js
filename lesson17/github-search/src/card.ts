import { User } from "./types.ts";

function renderCard(user: User) {
  const img = document.getElementById("user-image") as HTMLImageElement;
  const name = document.getElementById("user-name");
  const joinedDate = document.getElementById("user-joined-date");
  const email = document.getElementById("user-email");
  const bio = document.getElementById("user-bio");

  img.src = user.avatar_url;
  if (name) {
    name.innerText = user.name;
  }
  if (joinedDate) {
    joinedDate.innerText = new Date(user.created_at).toDateString();
  }
  if (email) {
    email.innerText = user.email;
  }
  if (bio) {
    bio.innerText = user.bio;
  }
}

export default renderCard;
