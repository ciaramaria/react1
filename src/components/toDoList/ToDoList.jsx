import React from 'react'
import { ToDoFormStyled, ToDoContainerStyled, ToDoButtonStyled } from './ToDoStyles';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import ToDoListForm from './ToDoListForm';

const ToDoList = () => {
  return (
    <ToDoContainerStyled>
     <ToDoFormStyled>

    <ToDoListForm />

     <ToDoButtonStyled>
    <AiOutlinePlusCircle size= '50px' color='whitesmoke'/>
    </ToDoButtonStyled>

    <ToDoButtonStyled><AiOutlineMinusCircle size= '50px' color='whitesmoke'/>
    </ToDoButtonStyled>

    
     </ToDoFormStyled>
  </ToDoContainerStyled>   
  )
}

export default ToDoList

