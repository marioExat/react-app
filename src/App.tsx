import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissableAlert from "./components/DismissableAlert";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  /*let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };*/

  return (
    <div>
      {/*<ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
  />*/}
      {/*<Alert text="Hello World" />*
      <Alert>
        Hello <span>World</span>
</Alert>*/}
      {alertVisible && (
        <DismissableAlert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          Close Button
        </DismissableAlert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
