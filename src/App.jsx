import React, {useState} from 'react';
import '../src/styles/app.scss'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import createPost from "./components/PostForm";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", description: "JavaScript - язык программирования"},
        {id: 2, title: "Python", description: "Python - язык программирования"},
        {id: 3, title: "Python", description: "Python - язык программирования"}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    
    const removePost = (post) => {
      setPosts([...posts.filter(item => item.id !== post.id)])
    }
    
    return (
        <div className="App">
            <PostForm create={createPost}/>
            {
                posts.length !== 0
                    ? <PostList  remove={removePost} posts={posts} title={"Языки программирования"}/>
                    : <h1 style={{textAlign: "center"}}>Список постов пуст</h1>
            }
        </div>
  );
}

export default App;
