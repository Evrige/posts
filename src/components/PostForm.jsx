import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', description: ''})

    const addNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        setPost({title: '', description: ''})
        create(newPost)
    }

    return (
        <form action="">
            <MyInput type="text" placeholder={"Enter title..."} value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <MyInput type="text" placeholder={"Enter description..."} value={post.description} onChange={e => setPost({...post, description: e.target.value})}/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;