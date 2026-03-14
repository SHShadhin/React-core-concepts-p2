import { useState } from "react"

export default function Counter() {

  const [count, setCount] = useState(0)
  const handleAdd = () => {
    // setCount(5)// setCount ekta function
    const newCount = count + 1;
    setCount(newCount)
  }
// console.log(count)
  const counterStyle = {
    border: '2px solid green',
    backgroundColor: 'teal',
    padding: '20px'
  }
  return (
    <div style={counterStyle}>
      <h2>Count : {count} </h2>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}