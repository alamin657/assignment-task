import React, { useEffect, useState } from 'react';
import Container from './Shared/Container';
import './ShowList.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ShowList = (id) => {
    const [shows, setShows] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(show => setShows(show));
    }, [id]);
    return (
        <Container>
            <div className='row cardgroup ms-auto'>
                {
                    shows.map(show => (
                        <Card className='mb-4' key={show.show.id} style={{ width: '18rem' }}>
                            {show.show.image && show.show.image.medium ? (
                                <Card.Img variant="top" src={show.show.image.medium} />
                            ) : (
                                <div>No Image Available</div>
                            )}                        <Card.Body>
                                <Card.Title>{show.show.name}</Card.Title>
                                <Card.Text>
                                    {show.show.language}
                                </Card.Text>
                                <Link to={`/summary/${show.show.id}`}>
                                    <Button variant="primary">
                                        Summary
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>

        </Container>
    );
};

export default ShowList;