export const getLocalStorage = () => {
    const tasksStorage = localStorage.getItem('tasks')

    if (tasksStorage === null) {
        return localStorage.setItem('tasks', [])
    }

    return JSON.parse(tasksStorage)
}

export const saveLocalStorage = (state) => {
    const tasksState = JSON.stringify(state)
    localStorage.setItem('tasks', tasksState)
}