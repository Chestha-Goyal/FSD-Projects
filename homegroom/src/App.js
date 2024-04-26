import Home from "./components/Home";
import Book from "./components/Book";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import {SignIn, CreateAccount} from './components/SignIn';

function App() {
  const[email, setEmail] = useState('SignIn');

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home value={email}/>} />
        <Route path="/signIn" element={<SignIn setEmail={setEmail}/>} />
        <Route path="/signUp" element={<CreateAccount setEmail={setEmail}/>} />
        <Route path='/book' element={<Book value={email}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
