import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  const increseHandler = () => {
    if (count === 3) return;
    setCount(count + 1);
    
  }
  console.log(count);
  
  const decreaseHandler = () => {
    if (count === 0) return;
    setCount(count - 1);
    
  }


  return (
    <div style={{ width: "100%", textAlign: "center", marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
      <h1>counter</h1>

      <h2>{count}</h2>

      <button onClick={increseHandler} style={{ backgroundColor: "navy", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Increase</button>

      <button onClick={decreaseHandler} style={{ backgroundColor: "crimson", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Decrease</button>

    </div>
  )
}

export default App