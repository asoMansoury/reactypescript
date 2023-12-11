import { type ReactNode, createContext, useContext, useState, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    isRunning: boolean;
    timers: Timer[]
};

type StartTimersAction = {
    type: 'START_TIMERS'
}

type StopTimersAction = {
    type: 'STOP_TIMERS'
}

type AddTimersAction = {
    type: 'ADD_TIMERS',
    payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimersAction;

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



function timersReducerFunc(state: TimersState, action: Action): TimersState {
    if (action.type === 'START_TIMERS') {
        return {
            ...state,
            isRunning: true,
        }
    } else if (action.type == 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false
        }
    } else if (action.type === 'ADD_TIMERS') {
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    duration: action.payload.duration,
                    name: action.payload.name
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
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData: Timer) {
            dispatch({ type: 'ADD_TIMERS', payload:timerData })
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

