import { Link } from 'react-router-dom'
import Gallery from './Gallery'

export default function Lesson1() {
  return (
    <>
      <Gallery />
      <div>
        <Link to="../">Back</Link>
      </div>
    </>
  )
}
