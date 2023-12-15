import { useEffect, useRef, useState } from "react";
import { useTimersContext, type Timer as TimerProps } from "../store/time-context";
import Container from "./BasicComponent/Container";


export default function Timer({ name, duration }: TimerProps) {
    const [remainingState, setRemainingTime] = useState(duration * 1000);
    const timerRef = useRef<number | null>(null);
    const { isRunning } = useTimersContext();

    if (remainingState <= 0 && timerRef.current != null) {
        clearInterval(timerRef.current)
    }
    useEffect(() => {
        let timerRF: number;
        if (isRunning == true) {
            timerRF = setInterval(function () {
                setRemainingTime(prevTime => prevTime - 50);
            }, 50);
            timerRef.current = timerRF;

        } else if (isRunning == false && timerRef.current) {
            clearInterval(timerRef.current)

        }
        return () => clearInterval(timerRF);
    }, [isRunning]);


    const formattedRemainingTime = (remainingState / 1000).toFixed(2);
    return (
        <Container as="article">
            <h2>{name}</h2>
            <p><progress max={duration * 1000} value={remainingState}></progress></p>
            <p>{formattedRemainingTime}</p>
        </Container>
    )
}