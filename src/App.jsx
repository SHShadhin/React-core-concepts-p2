import Batsman from './Batsman';
import './App.css'
import Counter from './Counter';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(
//   res => res.json(),
// );
// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json()
// }

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json()
}

function App() {

  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();
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

        {/* <Suspense fallback={<h2>Loading...</h2>}>
          <Users fetchUsers={fetchUsers}></Users>
        </Suspense> */}

        {/* <Suspense fallback={<h2>Friends are coming for treat</h2>}>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense> */}

        <Suspense fallback={<h3>Posts are coming.....</h3>}>
          <Posts postsPromise={postsPromise}></Posts>
        </Suspense>

        <Batsman></Batsman>
        <Counter></Counter>

        <button onClick={handleClick}>Click Me</button>
        <button
          onClick={function handleClick2() {
            alert('Clicked 2');
          }}
        >
          Click Me 2
        </button>

        <button onClick={handleClick3}>Click Me 3</button>
        <button
          onClick={() => {
            alert('click 4');
          }}
        >
          Click Me 4
        </button>

        <button onClick={() => handleAdd5(10)}>Add 5</button>
      </div>
    </>
  );
}

export default App
