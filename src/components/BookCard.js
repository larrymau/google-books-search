import React from 'react';
import { Card } from 'react-bootstrap';

export default function BookCard({book}) {
    return(
        <div key={book.id} className="col-sm-2">
            <Card style={{ 'marginTop': '10px' }}>

                <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />
                <Card.Body>
                    <h5 className="card-title">Card title</h5>
                    <a href={book.volumeInfo.previewLink} className="btn btn-primary" target="_blank">Know more</a>
                </Card.Body>
            </Card>
        </div>
    );
}