import "./App.css";
import Stack from '@mui/material/Stack';
import Chatarea from "./components/Chatarea";
import Sidemenu from "./components/Sidemenu";

function App() {
  return (
    <Stack direction={"row"} className="">
      <Sidemenu/>
      <Chatarea/>
    </Stack>
  );
}

export default App;
