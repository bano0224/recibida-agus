import logo from './logo.svg';
import './App.css';
import { Nav } from './components/nav/Nav';
import { Cards } from './components/Cards/Cards';
import { Form } from './components/form/Form';

function App() {
  return (
    <div className="container-app">
      <Nav/>
      <div className='container-form'>
        <Form/>
      </div>
      <div className="container-cards">
        <Cards/>
      </div>
    </div>
  );
}

export default App;
