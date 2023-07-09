import {
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from 'react-router-dom'
import Home from './Home'
import Lesson1 from './lesson1/Lesson1'
import Lesson2 from './lesson2/Lesson2'

// 3️⃣ Router singleton created
const router = createBrowserRouter([{ path: '*', Component: Root }])

// 4️⃣ RouterProvider added
export default function App() {
    return <RouterProvider router={router} />
}

// 1️⃣ Changed from App to Root
function Root() {
    // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
    // component below are unchanged
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lesson1/*" element={<Lesson1 />} />
            <Route path="/lesson2/*" element={<Lesson2 />} />
        </Routes>
    )
}
