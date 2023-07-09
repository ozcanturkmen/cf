import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

type data = {
  email: string;
  [key: string]: string | object;
};

const Lesson1 = () => {
  const [post, setPost] = useState("*");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data: data) => {
        console.log(data.email);
        setPost(data.email);
      })
      .catch((err) => {
        console.log((err as Error).message);
      });
  }, []);

  return (
    <>
      <Gallery />
      <div>{post}</div>
      <div>
        <Link to="../">Back</Link>
      </div>
    </>
  );
};

export default Lesson1;
