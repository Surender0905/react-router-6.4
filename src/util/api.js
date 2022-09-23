/* eslint-disable no-throw-literal */
import { sleep } from "./sleep";

export async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw { message: "Failed to fetch posts.", status: 500 };
  }

  // const data = await response.json();
  // console.log(data);
  return response.json();
}

export async function getSlowPosts() {
  await sleep(2000);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Response("Failed to fetch posts.", { status: 500 });
  }
  return response.json();
}

export async function getPost(id) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  if (!response.ok) {
    throw { message: "Failed to fetch post.", status: 500 };
  }
  return response.json();
}

// export async function getPost(id) {
//   return fetch("https://jsonplaceholder.typicode.com/posts/" + id);
// }

export async function savePost(data) {
  const post = {
    title: data.get("title"),
    body: data.get("post-text"),
  };
  if (post.title.trim().length < 5 || post.body.trim().length < 10) {
    throw { message: "Invalid input data provided.", status: 422 };
  }

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw { message: "Could not save post.", status: 500 };
  }
}
