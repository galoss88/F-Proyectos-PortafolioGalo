import HomeTwo from "./Components/HomeTwo/HomeTwo";
import ContextProvider from "./context/contextBackground";

function App() {
  return (
    <>
      <ContextProvider>
        <HomeTwo />
      </ContextProvider>
    </>
  );
}

export default App;
