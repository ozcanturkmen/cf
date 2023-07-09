import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

// eslint-disable-next-line react-hooks/rules-of-hooks
const [post, setPost] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  fetch("https://cf-ej5.pages.dev/api/todos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPost(data as string);
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
