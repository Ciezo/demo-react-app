import CustomNavbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div>
      <CustomNavbar />
      <Header 
      text={"Hello, World!"}
      size={6}/>
    </div>
  );
}

export default App;
