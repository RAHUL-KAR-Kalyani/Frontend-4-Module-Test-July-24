// PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <div className="container mt-4"><p>Loading post...</p></div>;

    if (error) return <div className="container mt-4"><p>Error fetching post: {error}</p></div>;

    if (!post) return <div className="container mt-4"><p>Post not found</p></div>;

    return (
        <div className='bg-dark'>
            <p className="fs-4 p-2 border-bottom border-danger text-white">Social Media App</p>
            <p className='fs-4 p-2 text-white'>Details Page For Post With ID {post.id}</p>
            <div className="container-fluid d-flex justify-content-start">
            <div className="card text-white bg-transparent border border-0 fs-4 justified-text" style={{ width: '50%' }}>
                <img src={`https://picsum.photos/200?random=${post.id}`} className="img-thumbnail" alt={`Image for post ${post.id}`}  height={300} width={300}/>
                <div className="card-body">
                    <p className=''>User ID : {post.id}</p>
                    <p className="card-title">Title : {post.title}</p>
                    <p className="card-text">Body : {post.body}</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default PostDetail;
