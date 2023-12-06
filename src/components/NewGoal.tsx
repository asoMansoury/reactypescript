import { useRef, type FormEvent } from "react";

type newGoalPrps={
    onAddGoal:(goal:string,summary:string)=>void;
}
export default function NewGoal({onAddGoal}:newGoalPrps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const eneteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        event.currentTarget.reset();
        onAddGoal(eneteredGoal,enteredSummary);
    }
    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" ref={goal}></input>
        </p>
        <p>
            <label htmlFor="summary">Short summary</label>
            <input id="summary" type="text" ref={summary}></input>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}