import { useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = () => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error(
                    "A tarefa precisa de uma descrição para ser adicionada."
                );
            }
            await axios.post("https://task-manager-a86q.onrender.com/tasks/", {
                description: task,
                isCompleted: false,
            });
        } catch (error) {}
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#FFFFFF" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
