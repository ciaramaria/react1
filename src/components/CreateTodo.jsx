import React, {useState} from 'react';
import TodoList from './TodoList';
import swal from 'sweetalert';

// function CreateTodo() {
const CreateTodo = () => {

    const [todo, setTodo] = useState ({title: "", done: false})
    const [todoArr, setTodoArr] = useState ([])

    let todos = localStorage.hasOwnProperty("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

    const onChange = (event) =>{
        let {value} = event.target
        let obj = {}
        obj["title"] = value
        obj["done"] = false
        setTodo(obj)
    }

    const createTodo = (event) => {
        const {name} = event.target
        if(event.key === "Enter" || name === "addTodo" ) {
            if(todo.title !== ""){
                todos.unshift(todo)
                localStorage.setItem('todos', JSON.stringify(todos))
                setTodo({ title: "", done: false })
            } else {
                swal('Ups', 'Por favor, escribir todo', 'error')
            }
        }
    }


    const completeTodo = (i) => {
        if(todos[i]['done'] !==true){
            todos[i]['done'] = true
            localStorage.setItem('todos', JSON.stringify(todos))
            setTodoArr(todos)
            swal('Buen trabajo!', 'Tarea completada!', 'exitoso!');
        }
    }

  return (
    <>
    <div className='box'>
        <div className='text-end'>
            <h2> Todo</h2>
            <p>Agregar todo</p>
        </div>
        <div className='text-addTodo'>
            <input type='text' name='todo' placeholder='escribir' value={todo.title} onKeyPress={createTodo} onChange={onChange} />
            <button type='button' name='addTodo' className='btn-addTodo' onClick={createTodo} > Agregar Tarea</button> 
        </div>
    </div>


    <TodoList 
    todoArr={todoArr} 
    completeTodo={completeTodo}
    />
    </>
  );
}

export default CreateTodo