import React, {useMemo, useState} from 'react';
import '../src/styles/app.scss'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/UsePosts";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", description: "JavaScript - язык программирования"},
        {id: 2, title: "Python", description: "Python - язык программирования"},
        {id: 3, title: "Python", description: "Python - язык программирования"}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    
    const removePost = (post) => {
      setPosts([...posts.filter(item => item.id !== post.id)])
    }
    
    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList  remove={removePost} posts={sortedAndSearchedPosts} title={"Языки программирования"}/>
        </div>
  );
}

export default App;
