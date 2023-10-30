import React, { useRef, useState } from 'react';
import Hello from './component/hello'
import Wrapper from './component/wrapper'
import Counter from './component/Counter'
import Inputs from './component/Inputs'
import UserList from './component/UserList';
import CreateUser from './component/CreateUser';


function App() {

  const name = 'ljh';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);




  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  
  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id ));
  }

  const onToggle = (id) =>{

      var users2 = users.map(user =>{ 
      return user.id === id ? {...user, active : !user.active }: user})
      setUsers(users2)
  }

  return (
    <div>
        <Hello name='ljh' color='red'/>
        <Hello color='red'/>
        <div style={style}>{name}</div>
        <div className="gray-box"></div>
        <Wrapper>
          <Hello color='red'/>
          <Hello color='blue' isTrue={true}/>
          <Hello color='brown' isTrue/>
        </Wrapper>
        <Counter />
        <Inputs />
        <br/>
        <CreateUser  username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <br/>
        <UserList users={users}  onRemove={onRemove} onToggle={onToggle}/>
    </div>
    
  );
}

export default App;
