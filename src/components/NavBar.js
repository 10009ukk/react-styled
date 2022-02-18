import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
    padding: 8px 0;
    background-color: whitesmoke;
    `
const Wraper = styled.section`
    margin: 0 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Lists = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`
const FlexBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Text = styled.div`
    padding: 4px 8px;
    font-size: ${props => props.size || '14px'};
    color : ${props => props.color || 'black'}
`

function NavBar(props) {

    const [boot, setBoot] = useState(true);

    const onClick = () => {
        setBoot(bl => !bl);
    }

    return (
        <Container>
            <Wraper>
                <FlexBox>
                <FlexBox as={Lists}>
                        <Text size='24px'>React Page</Text>
                        <Text as={'li'}><NavLink to='/' onClick={onClick}>ToDoList</NavLink></Text>
                        <Text as={'li'}><NavLink to='/about' onClick={onClick}>Timer</NavLink></Text>
                    </FlexBox>
                </FlexBox>
                <Text color='blueviolet'>
                    {boot ? 'react-bootstrap' : 'styled-component'}
                </Text>
            </Wraper>
        </Container>
    );
}

export default NavBar;