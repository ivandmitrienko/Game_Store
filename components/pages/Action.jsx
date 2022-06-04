import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Action = () => {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    
    return (
        <div>
            <h1>Action Games</h1>
            {
               posts.map(post => (
                   <Link key={post.id} to={`/action/${post.id}`}>
                       <li>{post.title}</li>
                   </Link>
               ))
            }    
        </div>
    )
}

export {Action}
