import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <h1>Welcome to the Chat App</h1>
            <Link to="/chat">
                <button>Go to Chat</button>
            </Link>
        </div>
    );
}

export default Home;
