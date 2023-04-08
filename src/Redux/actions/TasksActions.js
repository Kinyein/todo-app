import { types } from "../types/types"

export const AddTask = (task) => {
    return {
        type: types.addTask,
        payload: task
    }
}

export const UpdateTask = (task) => {
    return {
        type: types.updateTask,
        payload: task
    }
}

export const DeleteTask = (id) => {
    return {
        type: types.deleteTask,
        payload: id
    }
}

export const DeleteAllTasks = () => {
    return {
        type: types.deleteAllTasks
    }
}

export const FilterCompletedTask = () => {
    return {
        type: types.filterCompleted
    }
}

export const FilterActiveTask = () => {
    return {
        type: types.filterActive
    }
}