import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Welcome to the Admin Panel!</h1>
            <p>{message}</p>
        </div>
    );
}

export default Home;
