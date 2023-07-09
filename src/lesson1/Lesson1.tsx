import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

type data = {
  email: string;
  [key: string]: string | object;
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const [post, setPost] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data: data) => {
      setPost(data.email);
    })
    .catch((err) => {
      console.log((err as Error).message);
    });
}, []);

export default function Lesson1() {
  return (
    <>
      <Gallery />
      <div>{post}</div>
      <div>
        <Link to="../">Back</Link>
      </div>
    </>
  );
}
