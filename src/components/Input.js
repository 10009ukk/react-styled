import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

function Input({ value, name, onSubmit, onChange }) {
    
    return (
        <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">{name}</InputGroup.Text>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={onChange} onSubmit={onSubmit} value={value}/>
        </InputGroup>
    );
}

export default Input;