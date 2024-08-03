
// PostList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data.slice(0, 12)); // Limit to 9 posts, romove slice finction for all post
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div className="container mt-4"><p>Loading posts...</p></div>;

    if (error) return <div className="container mt-4"><p>Error fetching posts: {error}</p></div>;

    return (
        <div className='bg-dark'>
            <p className="fs-4 p-2 border-bottom border-danger text-white">Social Media App</p>
            <div className="App container-fluid ">
            <div className="row p-3 border-bottom border-danger">
                {posts.map(post => (
                    <div key={post.id} className="col-3 mb-3">
                        <div className="card text-white bg-dark border border-light justified-text card-radious" style={{ width: '100%' }}>
                            <img src={`https://picsum.photos/200?random=${post.id}`} className="card-img-top img-radious" alt={`Image for post ${post.id}`} />
                            <div className="card-body ">
                                <p className="card-text">User ID: {post.userId}</p>
                                <p className="card-title">
                                    Title : {post.title.length > 20 ? `${post.title.substring(0, 20)}...` : post.title}
                                </p>
                                <p className="card-text">
                                    Body :{post.body.length > 40 ? `${post.body.substring(0, 40)}` : post.body}
                                    <Link to={`/post/${post.id}`} className='text-decoration-none'> Read More...</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default PostList;


