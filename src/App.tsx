import React, { useEffect, useState } from 'react';
import './App.css';

type UserType = {
  name: string
  id: string
}


function App() {
  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, []);



  return (<p>{`${users}`}</p>)
}

export default App;

