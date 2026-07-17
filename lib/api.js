import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export async function getFaculty() {
  const res = await API.get("/users");
  return res.data;
}

export async function getNews() {
  const res = await API.get("/posts?_limit=6");
  return res.data;
}

export async function getPrograms() {
  const res = await API.get("/posts?_limit=6");
  return res.data;
}