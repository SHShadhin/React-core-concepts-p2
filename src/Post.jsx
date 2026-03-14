export default function Post({post}) {
  return (
    <div className="card">
      <h2>Title : {post.title}</h2>
      <h2>Desc : {post.body} </h2>
    </div>
  )
}