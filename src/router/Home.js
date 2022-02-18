import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Input from '../components/Input';
import List from '../components/List';
import Login from '../components/Login';
import Title from '../components/Title';

function Home(props) {

    const [login, setLogin] = useState(false);

    const [toDos, setToDos] = useState([]);
    const [value, setValue] = useState('');


    const onChange = (event) => {
        console.log(value);
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (value == '') {
            return;
        }

        const newToDoObj = {
            text: value,
            id : Date.now(),
        }
        
        setValue('');

        setToDos(ary => [...ary, newToDoObj])
    }

    const onDelete = (id) => {
        setToDos(current => current.filter(toDo => toDo.id !== parseInt(id)))
    }
    return (
            <Container fluid='md'>
                <br />
                {login ? (
                    <>
                        <Title message={'Login'}/>
                        <Input value={value} name='ToDoList' onChange={onChange}/>
                        <br />
                        <Container fluid='sm'>    
                            <Row>
                                <Button variant="outline-secondary" onClick={onSubmit}>Click</Button>
                            </Row>
                            <br />
                            {toDos.map((toDo, number) => {
                                return (
                                    <>
                                        <List number={number+1} text={toDo.text} id={toDo.id} onDelete={onDelete} />
                                        <br />
                                    </>
                                )
                            })}
                        </Container>
 
                    </>
                ) : (
                    <>
                    <Row>
                        <Login /> 
                    </Row>
                    <Row>
                        <Button variant="outline-secondary" onClick={() => setLogin(true)}>Submit</Button>
                    </Row>
                    </>
                )}
            </Container>
            

    );
}

export default Home;