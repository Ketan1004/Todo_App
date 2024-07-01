// Using Context Api to more feasible to share Data

import { createContext, useContext } from "react";

export const TodoContext =  createContext(
    {
        todos: [
            {id: 1, 
            todo: "Todo Msg",
            completed: false},
        ],

        addTodo :(todo) =>{},
        editTodo : (id, todo) => {},
        deleteTodo : (id) => {},
        toggleComplete : (id) => {}
    }
)