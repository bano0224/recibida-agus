import logo from './logo.svg';
import './App.css';
import { Nav } from './components/nav/Nav';
import { Cards } from './components/Cards/Cards';
import { Form } from './components/form/Form';
import { ModalContainer } from './components/Modal-container/Modal-container';
import { useState } from 'react';


function App() {

  const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }

  return (
    <div className="container-app">
      <Nav/>
      <ModalContainer modalIsOpen={modalIsOpen}/>
      <div className='container-form'>
        <Form setIsOpen={setIsOpen}/>
      </div>
      <div className="container-cards">
        <Cards/>
      </div>
    </div>
  );
}

export default App;
