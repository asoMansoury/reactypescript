import { useTimersContext } from "../store/time-context"
import Timer from "./Timer";

export default function Timers(){
    const {timers} = useTimersContext();
    return <ul>
        {
            timers.map(timer => <li key={timer.name}>
                <Timer {...timer}></Timer>
            </li>)
        }
    </ul>
}