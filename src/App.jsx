import { useState } from 'react'
import Create from './components/Create/Create'
import Read from './components/Read/Read'

const App = () => {
  const [todos, settodos] = useState([])

  return (
    <main style={{
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gap: '2rem',
      padding: '1rem 0 4rem'
    }}>
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos}/>
    </main>
  )
}

export default App