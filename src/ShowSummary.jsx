import React from 'react';
import { useParams } from 'react-router-dom';

const ShowSummary = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <h1>Show Summary</h1>
        </div>
    );
};

export default ShowSummary;