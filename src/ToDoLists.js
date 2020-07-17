import React from 'react';
const ToDoLists = (props) => {

    return (
        <div className='row'>
            <li className='col-sm-8 todo_style'>{props.text}</li>
            {/* <div className="todo_style">
            <li className="content"></li> */}

            <div className='col-sm-2 fa-times-circle' onClick={() => props.onDelete(props.id)}>X</div>
            {/* <span className="fa fa-times-circle"
               
                >X</span> */}
            <div className='col-sm-2 fa-times-circle1' onClick={() => props.onEdit(props.id)}>Edit</div>
            {/* <span className="fa fa-times-circle1"
               ></span> */}

            {/* </div> */}
        </div>
    )
}
export default ToDoLists;