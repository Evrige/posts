import React, {useState} from 'react';
import '../src/styles/app.scss'
import PostItem from "./components/PostItem";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", description: "JavaScript - язык программирования"},
        {id: 2, title: "Python", description: "Python - язык программирования"}
    ])
  return (
    <div className="App">
        <PostItem post={posts}/>
    </div>
  );
}

export default App;
