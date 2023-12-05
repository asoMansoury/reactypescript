import {type CourseGoalType as CGoalType} from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
    goals:CGoalType[],
    onDeleteFunc:(id:number)=>void
};
export default function CourseGoalList({goals,onDeleteFunc}:CourseGoalListProps) {
    return (
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
    )
}