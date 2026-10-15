import Sidebar from './Components/Sidebar';
import './App.css'
import CreatePost from './Components/CreatePost';
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import Post from "./Components/Post";
// Change line 8 to this exactly:
import PostListProvider from './store/Post-list-store';
import {PostList} from './store/Post-list-store';
// import Sidebar from './Components/Sidebar';
import { useState } from 'react';

function App() {
  const [currState,setTabState]=useState("Home");
  return (
    <>
    <PostListProvider>
      <div className="appContainer">
        <Sidebar selectedTab={currState} setTabState={setTabState}></Sidebar>
        <div className='contentArea'>
          <Header></Header>
          {/* <PostList></PostList> */}
          {currState==="Home" ? (<PostList></PostList>) : (<CreatePost></CreatePost>)}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
    </>
  )
}

export default App;
