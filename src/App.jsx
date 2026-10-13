import Sidebar from './Components/Sidebar';
import './App.css'
import CreatePost from './Components/CreatePost';
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import Post from "./Components/Post";
import PostList from "./Components/PostList";
import { useState } from 'react';

function App() {
  const [currState,setTabState]=useState("Home");
  return (
    <>
    <div className="appContainer">
      <Sidebar selectedTab={currState} setTabState={setTabState}></Sidebar>
      <div className='contentArea'>
        <Header></Header>
        {currState==="Home" ? (<PostList></PostList>) : (<CreatePost></CreatePost>)}
        <Footer></Footer>
      </div>
    </div>
    </>
  )
}

export default App;
