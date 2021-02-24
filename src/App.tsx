import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createServer } from "miragejs";


type UserType = {
  sayHello?: Function
  name: string
  age: number
  isSamurai?: boolean
  id: string
}

createServer({
  routes() {
    this.get("/api/users", () => [
      { id: "1", name: "Luke" },
      { id: "2", name: "Leia" },
      { id: "3", name: "Anakin" },
    ])
  },
})




function App() {
  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  return (
    <ul>
      {users.map((user: UserType) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default App;

