import './App.css'
import { Button } from '@mui/material'
import useMyStore from './store/store'
import { useEffect, useState } from 'react';

import { persist } from 'zustand/middleware';

function App() {
  // const {increment , capitalize , name , count} = useMyStore()

  useEffect(() => {
    console.log("re rendered")
  })
  const [count2 , setCount2] = useState(0)

  const count = useMyStore((s) => s.count);
  const name = useMyStore((s) => s.name);
  const increment = useMyStore((s) => s.increment);
  const capitalize = useMyStore((s) => s.capitalize);

  return (
    <div>
      Hello World
      <p>{name}</p>
      <p>{count}</p>
      <Button onClick={increment}>increment</Button>
      <Button onClick={capitalize}>capatalize</Button>
      <p>{count2}</p>
      <Button onClick={() => setCount2(count2 + 1)}>increment</Button>
      
    </div>
  )
}

export default App
