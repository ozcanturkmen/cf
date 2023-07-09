import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Gallery from './Gallery'

type data = {
    hello: string
    [key: string]: string | object
}

const Lesson1 = () => {
    const [post, setPost] = useState('*')
    useEffect(() => {
        fetch('https://cf-ej5.pages.dev/api/posts')
            .then(response => response.json())
            .then((data: data) => {
                console.log(data.hello)
                setPost('hello ' + data.hello)
            })
            .catch(err => {
                console.log((err as Error).message)
            })
    }, [])

    return (
        <>
            <Gallery />
            <div>{post}</div>
            <div>
                <Link to="../">Back</Link>
            </div>
        </>
    )
}

export default Lesson1
