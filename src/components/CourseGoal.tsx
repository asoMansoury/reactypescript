import {type ReactNode,type PropsWithChildren,type FC} from 'react';
// interface CourseGoalProps {
//     title:string;
//     children:ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{title:string}>;

const CourseGoal:FC<CourseGoalProps>=({title,children})=>{
    return <article>
    <div>
        <h2>{title}</h2>
        <p>{children}</p>
    </div>
    <button>Delete</button>
</article>
}
export default CourseGoal;
// export default function CourseGoal({ title,children }: CourseGoalProps) {
//     // 1. Create a course goal object with the following properties:
//     return <article>
//         <div>
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </div>
//         <button>Delete</button>
//     </article>
// }