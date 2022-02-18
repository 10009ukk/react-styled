import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

function List({ number, text, id, onDelete }) {
    
    return (
        <ListGroup as="ol" numbered>
            <ListGroup.Item
                
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{number}. Subheading</div>
                    {text}
                </div>
                <Button bg="primary" pill onClick={() => onDelete(id)}>
                Delete
                </Button>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default List;