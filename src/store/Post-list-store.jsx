import { createContext, useReducer } from "react";

// const defaultContextObj={
//     postList:[],
//     addPost:()=>{},
//     deletePost:()=>{},
// }
const defaultPostList=[{
     id:"1",
     title:"Going to Dhaka",
     body:"Hi friends im going to Dhaka with my parents.",
     reactions:2,
     userId:"user-9",
     tags:["vacation","Dhaka","Enjoying"]
    },{
     id:"2",
     title:"Got GPA-5",
     body:"I got GPA-5 in Hsc exam 2027 by the grace of almighty Allah",
     reactions:15,
     userId:"user-12",
     tags:["GOOD-Result","HSC2027","GPA5"],
}];
export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
}); 
const posListReducer=(currPostList,action)=>{
    return currPostList;
}

const PostListProvider =({children})=>{
    const [postList,dispatchPostList] =useReducer(
        posListReducer,
        defaultPostList,
    );
    const addPost=()=>{};
    const deletePost=()=>{};


    return <PostList.Provider value={{
      postList,
      addPost,
      deletePost,
    }}>{children}</PostList.Provider>
}



export default PostListProvider;