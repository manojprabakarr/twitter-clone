import React from 'react'
import './App.css';
import Login from './components/login'
import Sidebar from './components/sidebar'
import Widget from './components/widget'
import Feed from './components/feed'
import {Usestatevalue} from './stateprovider'


function App() {
  const[{user},dispatch]=Usestatevalue();

  return (
    <div className="app">
      {!user ?(
      <Login/>
      ):(
      <div className="app_body">
        <Sidebar/>
       <Feed/>
        <Widget/>
        

      </div>
       )
    }
     
    </div>
  );
}

export default App;
