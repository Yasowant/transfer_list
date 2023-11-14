import "./styles.css";

import Actions from "./Actions";
import List from "./List";
import { items } from "./data";
import { useState } from "react";
import { interSection, not } from "./utils";

export default function App() {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const leftCheckedItems = interSection(leftItems, checkedItems);
  const rightCheckedItems = interSection(rightItems, checkedItems);
  const handelToggle = (item) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];
    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }
    setCheckedItems(newCheckedItems);
  };
  const moveRight = () => {
    setRightItems(rightItems.concat(leftCheckedItems));
    setLeftItems(not(leftItems, leftCheckedItems));
    setCheckedItems(not(checkedItems, leftCheckedItems));
    console.log("moveRight");
  };
  const moveLeft = () => {
    setLeftItems(leftItems.concat(rightCheckedItems));
    setRightItems(not(rightItems, rightCheckedItems));
    setCheckedItems(not(checkedItems, rightCheckedItems));
    console.log("moveLeft");
  };

  console.log(checkedItems);

  return (
    <div className="App flex">
      <List items={leftItems} handelToggle={handelToggle} />
      <Actions moveRight={moveRight} moveLeft={moveLeft} />
      <List items={rightItems} handelToggle={handelToggle} />
    </div>
  );
}
