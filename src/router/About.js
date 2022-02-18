import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-weight: 800;
  color: ${props => props.color || 'black'};
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;



function About(props) {

    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');


    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setHours(String(date.getHours()).padStart(2, "0"))
            setMinutes(String(date.getMinutes()).padStart(2, "0"))
            setSeconds(String(date.getSeconds()).padStart(2, "0"))
        }, 1000)
    }, [])
   
    return (
        <div>
            <Wrapper>
                <Title>현재 시각</Title>
                <Title color='black'>{hours} : {minutes} : {seconds}</Title>
            </Wrapper>
        </div>
    );
}

export default About;