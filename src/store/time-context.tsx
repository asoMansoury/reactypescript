import {type ReactNode, createContext } from "react";

type Timer = {
    name:string;
    duration:number;
};

type TimersState = {
    isRunning:boolean;
    timers:Timer[]
};

type TimersContextValue =TimersState & {
    addTimer:(timerData:Timer) => void,
    startTimers:()=> void,
    stopTimers: () => void
}

const TimersContext =  createContext<TimersContextValue| null>(null);

type TimersContextProviderProp = {
    children:ReactNode
}
export default function TimersContextProvider({children}:TimersContextProviderProp){
    const ctx:TimersContextValue = {
        timers:[],
        isRunning:false,
        addTimer(timerData:Timer){

        },
        startTimers(){

        },
        stopTimers(){

        }
    }
    return <TimersContext.Provider value={ctx}>
        {children}
    </TimersContext.Provider>
}

