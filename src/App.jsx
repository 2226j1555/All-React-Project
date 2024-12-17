import React from 'react';
import './App.css';
import Todoapp from './Components/TodoApp/todoapp';
import ReactLifeCycle from './Components/ReactLifeCycle';
import Header from './Components/Portfolio/Header';
import Home from './Components/Portfolio/Home';
import About from './Components/Portfolio/About';
import Projects from './Components/Portfolio/Projects';
import Certificates from './Components/Portfolio/Certificates';
import Contact from './Components/Portfolio/Contact';
import DataFetcher from './Components/DataFetcher';
import Inputt from './Inputt';

function App() {
  // const students=["Alice","Bob","Charlie"];
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      {/* <ul>

        {students.map((student,index)=>(

          <li key={index}>{student}</li>
        ))}
      </ul> */}
          <Todoapp/>
          <ReactLifeCycle/>
          <DataFetcher/>
          <Inputt/>
          

    </>
  );
}

export default App;