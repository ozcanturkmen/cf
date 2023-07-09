import imgUrl from '/src/images/Katherine_Johnson_1983.jpg'

// Define every component at the top level (do NOT nest them)
// React component names must start with a capital letter
function Profile() {
    // No parantheses needed when we return a single item
    return <img src={imgUrl} alt="Katherine Johnson" />
}

// Always export the main component with `export default`
export default function Gallery() {
    // 🔴 Never define a component inside another component!
    // function Profile() { ... }
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}
