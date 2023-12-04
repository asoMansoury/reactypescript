import {type ReactNode,type PropsWithChildren} from 'react';
// interface CourseGoalProps {
//     title:string;
//     children:ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{title:string}>;
export default function CourseGoal({ title,children }: CourseGoalProps) {
    // 1. Create a course goal object with the following properties:
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button>Delete</button>
    </article>
}