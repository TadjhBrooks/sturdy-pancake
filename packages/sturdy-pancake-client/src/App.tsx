import { useState } from 'react';
import List from './Components/List';
// import Input from './Components/Input';
// import Dropdown from './Components/Dropdown';
import Button from './Components/Button';
import Card from './Components/Card';
import Accordian from './Components/Accordian';

interface AppProps {
  database: string[];
}

function App({ database }: AppProps) {
  const [text, setText] = useState('');

  const title = 'Rediscover';
  const description =
    'Rediscover creative audio plugins you forgot about with a click of a button.';
  const action = 'Rediscover';
  const copyright = `\u00A9 Rediscover ${new Date().getFullYear()}.`;

  /**
   * Get random element from array
   * @param array Array
   * @returns
   */
  function getOneFromArray(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Update state with new element
   * @param array Array
   */
  function handleGetOne(array: any[]) {
    const element = getOneFromArray(array);
    setText(element);
  }
  // justify-center items-center
  return (
    <div className="flex flex-col min-h-screen items-center bg-gradient-to-r from-green-400 to-blue-500">
      <header className="w-full max-w-screen-lg items-start py-5 text-black text-opacity-90 text-3xl font-black mix-blend-overlay">
        {title}
      </header>
      <main className="max-w-screen-lg flex flex-1 flex-col justify-center items-center gap-y-10">
        <div className="h-10 flex items-center font-bold text-3xl text-black mix-blend-overlay drop-shadow-lg animate-pulse">
          {text}
        </div>
        <Card>
          <p className="w-96">{description}</p>
          <div>
            <Button onClick={() => handleGetOne(database)}>{action}</Button>
          </div>
        </Card>
        <Accordian label="See All Plugins">
          <List array={database} />
        </Accordian>
      </main>
      <footer className="max-w-screen-lg text-center py-5 text-black text-opacity-90">
        {copyright}
      </footer>
    </div>
  );
}

/* <Input label="Add Plugin" placeholder="Plugin Name" action="Add" /> */
/* <Dropdown label="Remove Plugin" options={database} action="Remove" /> */

export default App;
