import { type ReactNode } from "react";
import { type CourseGoalType as CGoalType } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
    goals: CGoalType[],
    onDeleteFunc: (id: number) => void
};
export default function CourseGoalList({ goals, onDeleteFunc }: CourseGoalListProps) {
    if (goals.length === 0) {
        return <InfoBox mode="hint">
            You have no course goals yet. Start adding some!
        </InfoBox>
    }


    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = <InfoBox disabled={true} data-attr="hi" severity="high" mode="warning" >You'r collecting a lof of goals. Don't put too much on your plate!</InfoBox>
    }
    return (
        <>
            {warningBox}
            <ul>
                {
                    goals.map((item) => (
                        <li key={item.id}>
                            <CourseGoal
                                onDeleteFunc={onDeleteFunc}
                                id={item.id}
                                title={item.title}
                            >
                                <p>{item.description}</p>
                            </CourseGoal>
                        </li>
                    ))
                }
            </ul>
        </>

    )
}