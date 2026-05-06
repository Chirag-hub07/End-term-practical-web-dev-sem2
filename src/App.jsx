import { useState } from 'react';
import './App.css';

function App() {
  
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike=()=>{
    setIsLiked(!isLiked);
  };

  return (
    <div className="app-container">
      <h1>Like Button</h1>
      
      <button className="like-button" onClick={toggleLike}>
        <span className="heart-emoji">
          {isLiked ? '❤️' : '🤍'}
        </span>
      </button>
    </div>
  );
}

export default App;