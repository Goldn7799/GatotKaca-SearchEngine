import React from 'react';
import { useParams } from 'react-router-dom';

const Searching = () => {
  const { content } = useParams();
  return (
    <div>
      {content}
    </div>
  )
}

export default Searching