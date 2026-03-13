
import './App.css'

function App() {
  function handleClick() {
    alert('Clicked')
  }

  const handleClick3 = () => {
    alert('Clicked 3')
  }

  const handleAdd5=(num)=> {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <div>
        <h1>Get started React</h1> 
        <button onClick={handleClick}>Click Me</button>
        <button onClick={function handleClick2() {
          alert('Clicked 2')
        }}>Click Me 2</button>

        <button onClick={handleClick3}>Click Me 3</button>
        <button onClick={ () => {
          alert('click 4')
        }}>Click Me 4</button>

        <button onClick={()=> handleAdd5(10)}>Add 5</button>
      </div>
    </>
  );
}

export default App
