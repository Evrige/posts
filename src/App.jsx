import React, {useMemo, useState} from 'react';
import '../src/styles/app.scss'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", description: "JavaScript - язык программирования"},
        {id: 2, title: "Python", description: "Python - язык программирования"},
        {id: 3, title: "Python", description: "Python - язык программирования"}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts =  useMemo(() => {
        if(filter.sort){
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
        }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    
    const removePost = (post) => {
      setPosts([...posts.filter(item => item.id !== post.id)])
    }
    
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList  remove={removePost} posts={sortedAndSearchedPosts} title={"Языки программирования"}/>
        </div>
  );
}

export default App;
