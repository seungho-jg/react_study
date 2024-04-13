import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';


function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    console.log(e.target.value)
    const {name, value} = e.target;
    console.log(name,value)
    setInputs({
      ...inputs,
      [name] : value
    })
    console.log(inputs)
  }
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ])
  const nextId = useRef(4);
  const onCreate = () => {

    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  }
  return(
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  ) 
}

export default App;
