import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
let name = "Fahad"
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">

      <TextForm heading="Enter the Text to Analyze"/>
      </div>
      
    </>
  );
}

export default App;
