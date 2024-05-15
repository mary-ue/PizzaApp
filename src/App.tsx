import { useState, MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Link } from 'react-router-dom';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (evt: MouseEvent) => {
    console.log(evt);
  };

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearence='big' onClick={addCounter}>Кнопка</Button>
      <Input placeholder='Email' />
    </>
  );
}

export default App;
