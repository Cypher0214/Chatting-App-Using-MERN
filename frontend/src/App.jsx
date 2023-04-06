// import { Button } from '@chakra-ui/react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './HomePage';
import { ChatPage } from './ChatPage';

function App() {
  return (
    <div className="App">
      <Routes>
   <Route path='/' Component={HomePage}> </Route>     
    <Route path ='/chat' Component={ChatPage}></Route>    
        </Routes>
    </div>
  );
}

export default App;
