//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // function
  onSelectItem: (item: string) => void;
}

// file name follows PascalConvention
function ListGroup({ items, heading, onSelectItem }: Props) {
  //function ListGroup(props: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] // variable(selectedIndex)
  // arr[1] // updater function
  const [name, setName] = useState("");

  // items = [];
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );
  // const message = items.length === 0 ? <p>No item found</p> : null;

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };
  // event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {/*items.length === 0 ? <p>No item found</p> : null*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
