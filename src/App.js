import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList'; // Your list of posts
import PostDetail from './components/PostDetail'; // Detailed view component
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/post/:id" element={<PostDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
