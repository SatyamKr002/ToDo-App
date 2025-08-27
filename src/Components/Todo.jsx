import { useState, useEffect } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useCallback } from "react";

export default function Todo() {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    const [tasks, setTasks] = useState([]);
    const [editId, setEditId] = useState(null);

    const onSubmit = (data) => {
        const taskText = data.task.trim();
        if (!taskText) {
            reset({ task: "" });
            return;
        }

        if (editId) {
            setTasks((prev) =>
                prev.map((task) =>
                    task.id === editId ? { ...task, text: taskText } : task
                )
            );
            setEditId(null);
        } else {
            const newTask = {
                id: Date.now(),
                text: taskText,
                completed: false,
            };
            setTasks((prev) => [...prev, newTask]);
            reset();
        }
    };

    useEffect(() => {
        if (!editId) {
            reset();
        }
    }, [editId, reset]);

    const toggleComplete = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = useCallback(
        (id) => {
            setTasks((prev) => prev.filter((task) => task.id !== id));
            if (id === editId) {
                setEditId(null);
                reset();
            }
        },
        [editId, reset]
    );

    const editTask = useCallback(
        (task) => {
            setValue("task", task.text);
            setEditId(task.id);
        },
        [setValue]
    );

    return (
        <div className="flex flex-col bg-slate-50 pt-[30px] pb-[30px] pl-[40px] pr-[40px] rounded-lg shadow-md w-full max-w-[550px] my-10">
            <h1 className="text-3xl text-center font-bold font-serif">ToDo-App</h1>
            <hr className="caret-cyan-300 w-full my-3.5" />

            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 m-4">
                <div className="w-full">

                    <input
                        type="text"
                        id="task"
                        className=" w-full h-11 px-3 py-2 border border-[#BEBEBE] rounded-sm focus:outline-none focus:border-blue-200"
                        {...register("task", {
                            required: "Task cannot be empty",
                            validate: (value) =>
                                value.trim() !== "" || "Task cannot be only spaces"
                        })}
                        placeholder="Enter task"
                    />
                    {errors.task && <span className="text-red-500">{errors.task.message}</span>}
                </div>
                <Button
                    type="submit"
                    label={editId ? "Update" : "Add"}
                    className="from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-100 h-11"
                />
            </form>
            <div className="flex flex-col">
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <div className="flex items-center">
                                <div className="flex items-center gap-2 w-full px-4.5 text-xl text-slate-800">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleComplete(task.id)}
                                    />
                                    <span
                                        className={`pb-1 ${task.completed
                                            ? "line-through [text-decoration-color:red] text-gray-400"
                                            : ""
                                            }`}
                                    >
                                        {task.text}
                                    </span>
                                </div>

                                <div className="flex gap-2 mr-4">
                                    <Button
                                        label="Edit"
                                        onClick={() => editTask(task)}
                                        className="from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-100 h-10"
                                    />
                                    <Button
                                        label="Delete"
                                        onClick={() => deleteTask(task.id)}
                                        className="from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-100 h-10"
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
