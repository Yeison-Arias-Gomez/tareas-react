import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.clas';
import TaskComponent from '../Pure/forms/task';



const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'default description', false, LEVELS.NORMAL)

    return (
        <div>
            <div>
               <h1> Your Tasks: </h1>
            </div>
            <TaskComponent task = { defaultTask } ></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
