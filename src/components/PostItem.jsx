import React from 'react';

const PostItem = (props) => {
    function deletePost() {

    }

    return (
        <div>
            <div className="post" >
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.description}
                    </div>
                </div>
                <div className="post__btn">
                    <button onClick={deletePost}>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;