import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';


const ButtonIncDec = () => {
const [count, setCount] = useState(1);
const handleInc = () =>{
setCount(count + 1);
}
const handleDec = () =>{
    setCount(count - 1);
    }
  return (
  <div style={{padding:'20px 0'}}><Button variant="secondary" size='lg' onClick={handleInc}>ButtonInc</Button>
  <Button variant="danger" size='lg' onClick={handleDec}>ButtonDec</Button>
   <span>Count: {count}</span> 
    </div>
  )
}

export default ButtonIncDec