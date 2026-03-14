export default function Friend({ friend }) {
  // console.log(friend)
  const { name, email, phone } = friend;
  return (
    <div className="card">
      <h2>Name : {name} </h2>   
      <h2>Email : {email} </h2>   
      <h2>Phone : {phone} </h2>   
    </div>
  )
}