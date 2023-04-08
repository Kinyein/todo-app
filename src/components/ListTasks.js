import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ClearAll, FilterContainer, FooterList, ListContainer, ListTasksDiv, } from '../styles/styledComponents/listTasksStyle'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeComplete, DeleteAllTasks, DeleteTask, FilterActiveTask, FilterCompletedTask, UpdateTask } from '../Redux/actions/TasksActions'
import { AiOutlineClose } from 'react-icons/ai'

const ListTasks = ({ darkTheme }) => {

    const dispatch = useDispatch()

    const { tasks } = useSelector(store => store.tasks)

    const { tasksActive } = useSelector(store => store.tasks)

    const { tasksCompleted } = useSelector(store => store.tasks)

    const [tasksToList, setTasksToList] = useState(tasks)

    useEffect(() => {}, [tasksToList])

    const setAllTasks = () => {
        setTasksToList(tasks)
    }

    const setActiveTasks = () => {
        setTasksToList(tasksActive)
    }

    const setCompletedTasks = () => {
        setTasksToList(tasksCompleted)
    }

    const handleFilterActive = () => {
        dispatch(FilterActiveTask())
        setActiveTasks()
    }

    const handleFilterCompleted = () => {
        dispatch(FilterCompletedTask())
        setCompletedTasks()
    }

    const handleDelete = (id) => {
        dispatch(DeleteTask(id))
        setAllTasks();
    }

    const handleDeleteAll = () => {
        dispatch(DeleteAllTasks())
        setAllTasks();
    }

    const handleUpdate = (task) => {
        task.completed = task.completed ? false : true
        dispatch(UpdateTask(task))
    }

    console.log('tasks: ',tasks);

    return (
        <ListContainer darkTheme={darkTheme}>

            <form>
                {
                    tasksToList.map(t => (
                        <ListTasksDiv key={t.id} darkTheme={darkTheme}>

                            <label>
                                <input
                                    onClick={() => handleUpdate(t)}
                                    type="checkbox"
                                    defaultChecked={t.completed}
                                    value={t.task}
                                /> {t.task}
                            </label>

                            <button onClick={() => handleDelete(t.id)}><AiOutlineClose /></button>

                        </ListTasksDiv>
                    ))
                }
            </form>


            <FooterList darkTheme={darkTheme}>
                <p>{tasksActive.length} Items left</p>

                <FilterContainer className='d-flex gap-2' darkTheme={darkTheme}>
                    <a href="#" onClick={setAllTasks} >All</a>
                    <a href="#" onClick={handleFilterActive}>Active</a>
                    <a href="#" onClick={handleFilterCompleted}>Completed</a>
                    {/* <a href="#">All</a>
                    <a href="#">Active</a>
                    <a href="#">Completed</a> */}
                </FilterContainer>

                <ClearAll onClick={handleDeleteAll}>Clear All</ClearAll>
            </FooterList>
        </ListContainer>
    )
}

export default ListTasks