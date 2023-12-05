import {type ReactNode,type PropsWithChildren,type FC} from 'react';
// interface CourseGoalProps {
//     title:string;
//     children:ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{title:string,id:number,onDeleteFunc:(id:number)=>void}>;

const CourseGoal:FC<CourseGoalProps>=({title,id,onDeleteFunc,children})=>{
    return <article>
    <div>
        <h2>{title}</h2>
        <p>{children}</p>
    </div>
    <button onClick={(e)=>onDeleteFunc(id)}>Delete</button>
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