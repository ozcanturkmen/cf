// Define every component at the top level (do NOT nest them)
// React component names must start with a capital letter
function Profile() {
  // No parantheses needed when we return a single item
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
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
