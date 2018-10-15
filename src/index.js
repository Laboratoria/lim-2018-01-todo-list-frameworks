import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDOM.render(
	<div>
	<h2> Hoy prepararemos una deliciosa receta</h2>
	<h4> Por favor añade los ingredientes que necesitaremos, </h4>
	<h4> Haz clic en un ingrediente registrado y éste se eliminará </h4>
		<TodoList/>
	</div>,	
destination
);
