import Link from "next/link"

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const result = await res.json()
  return result
}

const page = async () => {

  const posts = await fetchData()

  return (
    <div className='wrap'>
      <h2>Blog Page</h2>
      <div className="posts">
        {
          posts.map((post) => (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <Link href={`/blog/post/` + post.id}>Подробнее</Link>
            </article>
          ))
        }
      </div>
    </div>
  )
}

export default page