import {type Timer as TimerProps } from "../store/time-context";
import Container from "./BasicComponent/Container";


export default function Timer({name,duration}:TimerProps){
    return (
        <Container as="article">
            <h2>{name}</h2>
            <p>{duration}</p>
        </Container>
    )
}