import {useContext, type ReactNode} from 'react'
import {  useTimersContext } from '../store/time-context';
import Button from './BasicComponent/Button';
type HeaderProps = {
    image:{
        src: string;
        alt: string;
    };
    children:ReactNode;
}
export default function Header({image,children}:HeaderProps){
    var timersCtx =  useTimersContext()!;

    return <header>
        <Button onClick={timersCtx.isRunning? timersCtx.stopTimers:timersCtx.startTimers}>{timersCtx.isRunning ? 'Stop': 'Start'}</Button>
        <img {...image}></img>
        {children}
    </header>
}