import React from 'react';
import { CONTACTO } from '../../models/componentB';
import { ComponentA } from '../../models/componentA';
import TaskComponent123 from '../Pure/forms/task123';



const TasklistComponent123 = () => {
    const defaultComponenteA = new ComponentA('Yeison', 'Arias', 'yeison.ind@.com', CONTACTO.CONNECTED)

    return (
        <div>
            <h1>
                Contacto
            </h1>
            <TaskComponent123 task = { defaultComponenteA }></TaskComponent123> 
        </div>
    );
};




export default TasklistComponent123;
