import React, {useState} from 'react';
import '../src/styles/app.scss'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", description: "JavaScript - язык программирования"},
        {id: 2, title: "Python", description: "Python - язык программирования"},
        {id: 3, title: "Python", description: "Python - язык программирования"}
    ])
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");



    return (
        <div className="App">
            <form action="">
                <input type="text" placeholder={"Enter title..."} value={title} onChange={e => setTitle(e.target.value)}/>
                <input type="text" placeholder={"Enter description..."} value={description} onChange={e => setDescription(e.target.value)}/>
                <MyButton disabled>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={"Языки программирования"}/>
        </div>
  );
}

export default App;
