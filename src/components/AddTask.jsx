import { useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return toast.error(
                    "A tarefa precisa de uma descrição para ser adicionada."
                );
            }
            await axios.post("https://task-manager-a86q.onrender.com/tasks/", {
                description: task,
                isCompleted: false,
            });
            await fetchTasks();

            setTask("");

            toast.success("A tarefa foi adicionada com sucesso!");
        } catch (error) {
            return toast.error("Algo deu errado.");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
                onEnterPress={handleTaskAddition}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#FFFFFF" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
