import { types } from "../types/types";

const initialState = {
    tasks: []
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addTask:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case types.deleteTask:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case types.deleteAllTasks:
            return {
                tasks: []
            }
        case types.filterCompleted:
            return{
                ...state,
                tasks: [...state.tasks],
                tasksCompleted: state.tasks.filter(task => task.completed === true)
            }
        case types.filterActive:
            return{
                ...state,
                tasksActive: state.tasks.filter(task => task.completed === false)
            }

        default:
            return state
    }
}
