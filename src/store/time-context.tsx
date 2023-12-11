import { type ReactNode, createContext, useContext, useState, useReducer } from "react";

type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    isRunning: boolean;
    timers: Timer[]
};

const initiailState: TimersState = {
    isRunning: true,
    timers: []
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext);
    if (timersCtx === null)
        throw new Error('TimerContext is null - that should not be the case!');

    return timersCtx;
}

type Action = {
    type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS'
}

function timersReducerFunc(state: TimersState, action: Action): TimersState {
    if(action.type === 'START_TIMERS'){
        return {
            ...state,
            isRunning:true,
        }
    }else if (action.type == 'STOP_TIMERS'){
        return {
            ...state,
            isRunning:false
        }
    }else if(action.type === 'ADD_TIMER'){
        return {
            ...state,
            timers:[
                ...state.timers,
                {
                    duration:1,
                    name:'aso'
                }
            ]
        }
    }
    return state;
}

type TimersContextProviderProp = {
    children: ReactNode
}
export default function TimersContextProvider({ children }: TimersContextProviderProp) {
    const [timersState, dispatch] = useReducer(timersReducerFunc, initiailState);


    const ctx: TimersContextValue = {
        timers: [],
        isRunning: false,
        addTimer(timerData: Timer) {
            dispatch({ type: 'ADD_TIMER' })
        },
        startTimers() {
            dispatch({ type: 'START_TIMERS' })
        },
        stopTimers() {
            dispatch({ type: 'STOP_TIMERS' })
        }
    }
    return <TimersContext.Provider value={ctx}>
        {children}
    </TimersContext.Provider>
}

