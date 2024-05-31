import React, { useState } from "react";

import TaskList from "./TaskList";

//create your first component
const Home = () => {

	const [description,setDescription] = useState();
	const [tasks,setTasks] = useState([]);

	function handleAddTasks(e){
		e.preventDefault();
		const newTask = {label : description, id:Date.now(), finished:false}

		setTasks(tasks=> [...tasks,newTask]);
		setDescription('');
	}

	function handlePackedItem(id){
		setTasks((tasks) =>
			tasks.map((task) =>
			  task.id === id ? { ...task, finished: ! task.finished } : task
			)
		  );
	}

	function handleDeleteTask(id){
		console.log('inside delete')
		setTasks((tasks) => tasks.filter((task => task.id !== id)));
	}

	return (
			<div className="innerContainer d-flex flex-column mx-auto mt-5"> 
			<form onSubmit={handleAddTasks} className="mx-auto">
			<input
			className="input"
        type="text"
        placeholder="tasks..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
			</form>
			<TaskList tasks={tasks} onPackedItem={handlePackedItem} onDeleteTask={handleDeleteTask}></TaskList>
			</div>
	);
};

export default Home;
