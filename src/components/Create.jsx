import React, { useState } from 'react'

const Create = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return (
        <div><form  style={{ display: "flex", flexDirection: "column", gap: "10px", width: "20%" }}>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' style={{ padding: "10px", borderRadius: "5px", border: "1px solid white", backgroundColor: "transparent", color: "white" }} />

            <input onChange={(e) => setAge(e.target.value)} value={age} type="number" placeholder='Age' style={{ padding: "7px", borderRadius: "5px", border: "1px solid white", backgroundColor: "black", color: "white" }} />

            <button type="submit" style={{ padding: "5px", borderRadius: "5px", border: "1px solid white", backgroundColor: "black", color: "white", cursor: "pointer" }}>Add User</button>
        </form>

            <h2>New user</h2>
            {name === "" ? (<p>New user : 20 </p>) : (<p> {name.toUpperCase()} : {age} </p>)
            }</div>
    )
}

export default Create