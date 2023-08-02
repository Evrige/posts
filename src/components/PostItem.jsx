import React from 'react';

const PostItem = (props) => {
    return (
        <div>
            {props.post.map(item => {
                return (
                    <div className="post">
                        <div className="post__content">
                            <strong>{item.id}. {item.title}</strong>
                            <div>
                                {item.description}
                            </div>
                        </div>
                        <div className="post__btn">
                            <button>Удалить</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default PostItem;