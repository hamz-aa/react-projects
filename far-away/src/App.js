import { useState } from "react";
import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);
  console.log(items);
  return (
    <div>
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
