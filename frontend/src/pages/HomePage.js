import React, { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => console.log('Health check:', data))
      .catch(err => console.error(err));
  }, []);
  return <h1>Home Page</h1>;
}

export default HomePage;
