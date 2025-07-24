import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetailsPage() {
  const { id } = useParams();
  return <h1>Post Details: {id}</h1>;
}

export default PostDetailsPage;
