import Link from 'next/link'
import React from 'react'

async function fetchData(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  const result = await res.json()
  return result
}

const Post = async ({ params: {id} }) => {

  const post = await fetchData(id)

  return (
    <div className='wrap'>
      <Link href='/blog'>Назад</Link>
      <div className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default Post