// import './components/Styles/App.scss';
import { useGlobalContext } from "./components/Context";

function App() {
  const { test } = useGlobalContext();
  return <div>Start {test}</div>;
}

export default App;
