import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>React 18 Tutorial</h1>
      <p>
        <Link to="/lesson1">Your First Componentzz</Link>
      </p>
      <p>
        <Link to="/lesson2">Markup with JSX</Link>
      </p>
    </>
  );
}
