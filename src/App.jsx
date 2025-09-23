import { useContext, useState } from 'react'
import Create from './components/Create/Create'
import Read from './components/Read/Read'

const App = () => {
  return (
    <main style={{
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gap: '2rem',
      padding: '1rem 0 4rem'
    }}>
      <Create />
      <Read />
    </main>
  )
}

export default App