import Addtodoform from "./addtodoform";
import Todolist from "./todolist";
import { useState } from "react";

function TodoContainer() {

     const [activityArr,setActivityArr]=useState([
        {
            id:1,
            activity:"go for a walk"
        },
        {
            id:2,
            activity:"read a book"
        },
        {
            id:3,
            activity:"eat breakfast"
        }
    ]);
    return (
        <div>

            <div className="flex gap-5 flex-wrap">
               <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr}/>
               <Todolist activityArr={activityArr} setActivityArr={setActivityArr}/>

               
            </div>
        </div>

    )
}
export default TodoContainer;