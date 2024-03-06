import React from 'react'
import moment from 'moment/moment';
import { deleteTask, markReadTask } from '../../services/api.js';
import { toast } from 'react-toastify';
const Task = ({ task, setrefereshList }) => {


    const handelDelete = async () => {
        try {
            const result = await deleteTask({
                task_id: task._id
            });

            if (result.data.status === 200) {
                setrefereshList(new Date());
                toast("Deleted");
            } else {
                toast("Failed to delete, please try again");
            }
        } catch (error) {
            if (error.response) {
                console.error("Server responded with:", error.response.status, error.response.data);
            }
        }

    };

    const handleMarkTask = async () => {
        try {
            const result = await markReadTask({
                task_id: task._id
            });

            if (result.data.status === 200) {
                setrefereshList(new Date());
                toast("Task is Completed");
            } else {
                toast("Failed to complate, please try again");
            }
        } catch (error) {
            if (error.response) {
                console.error("Server responded with:", error.response.status, error.response.data);
            }
        }

    };

    return (
        <div className="col-sm-3 mx-3 alert bg-gray">
            <div className="card-header" style={{ color: `${task?.isCompleted ? "green" : " "}` }}>
                {task?.isCompleted ? "Completed" : "Not Completed"}
            </div>
            <div className="card-body">
                <h5 className='card-title' style={{ textDecoration: task?.isCompleted ? "line-through" : "none" }}>{task?.desc}</h5>
                <p className='card-text'>{moment(task?.date).fromNow()}</p>


            </div>
            <div className='actionBUttons mt-4' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="deleteButton">
                    <button className='' style={{ background: "red", border: "1px solid gray", borderRadius: "5px", padding: "7px" }}
                        onClick={handelDelete}
                    >Delete</button>
                </div>
                <div className="markTask">
                    <button
                        style={{ background: `${task?.isCompleted ? "green" : " "}`, border: "1px solid gray", borderRadius: "5px", padding: "7px" }}
                        onClick={handleMarkTask}
                    >{task?.isCompleted ? "Completed" : "Mark Completed"}</button>
                </div>
            </div>
        </div>
    )
}

export default Task;