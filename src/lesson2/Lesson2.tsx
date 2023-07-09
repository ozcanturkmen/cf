import { Link } from 'react-router-dom'
import './lesson2.css'
import imgUrl from '/src/images/Hedy_Lamarr.jpeg'

/*
  3 rules of JSX: 
  1. Return a single root element (We return a fragment below)
  2. Close all the tags (Incl. <br/>)
  3. camelCase most of the things (notice `className` instead of `class`), exception: `aria-label`
 */

export default function Lesson2() {
    return (
        <>
            <img
                aria-label="photo"
                src={imgUrl}
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <div>
                <Link to="../">Back</Link>
            </div>
        </>
    )
}
