import { useRef } from "react";
import { useTimersContext } from "../store/time-context";

export default function AddTimer() {
    const { addTimer } = useTimersContext();
    function handleSaveTimer(data: unknown) {
        const extractedData = data as { name: string; duration: string };
        addTimer({
            duration: +Number.parseInt(extractedData.duration),
            name: extractedData.name
        })
    }
    return <></>
}