import React, { useState } from "react";


function ToDoItem({text, onChecked, id}) {

    return (
        <div onClick={()=> { onChecked(id)}} >
        <li>{text}</li>
        </div>
    ) 
}

export default ToDoItem;