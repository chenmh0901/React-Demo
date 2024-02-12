import Button from "./components/Button.tsx";
import Alert from "./components/Alert.tsx";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    </div>
  );
}

export default App;
