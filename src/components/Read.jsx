import React from 'react'

const Read = () => {

    const [users, setUsers] = React.useState([
        { name: "aman", age: 19 },
        { name: "ram", age: 20 },
        { name: "akash", age: 21 }
    ]);

  const user = users.map((user, idx) => (
    <ul key={idx}>
      <li>{user.name} : {user.age}</li>
    </ul>
  ))

    return (
        <div style={{ margin: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>

            <div style={{ borderBottom: "1px solid white ", width: "100%", paddingBottom: "10px" }}>
                <h1>Users</h1>
                <h2>{user}</h2>
            </div>
        </div>
    )
}

export default Read