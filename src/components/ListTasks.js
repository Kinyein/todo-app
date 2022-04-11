import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ClearAll, FilterContainer, FooterList, ListContainer, ListTasksDiv, } from '../styles/styledComponents/listTasksStyle'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeComplete, DeleteAllTasks, DeleteTask, FilterActiveTask, FilterCompletedTask } from '../actions/TasksActions'
import { AiOutlineClose } from 'react-icons/ai'

const ListTasks = ({ darkTheme }) => {

    const dispatch = useDispatch()

    const { tasks } = useSelector(store => store.tasks)

    const { tasksActive } = useSelector(store => store.tasks)

    const { tasksCompleted } = useSelector(store => store.tasks)

    const [tasksToList, setTasksToList] = useState(tasks)

    useEffect(() => {

    }, [])

    const setAllTasks = () => {
        setTasksToList(tasks)
    }

    const setActiveTasks = () => {
        setTasksToList(tasksActive)
        console.log(tasksActive)
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
    }

    const handleDeleteAll = () => {
        dispatch(DeleteAllTasks())
        window.location.reload()
    }

    

    return (
        <ListContainer darkTheme={darkTheme}>

            <form>
                {
                    tasksToList.map(t => (
                        <ListTasksDiv key={t.id} darkTheme={darkTheme}>

                            <label>
                                <input
                                    onClick={() => t.completed = true}
                                    type="radio"
                                    value={t.task}
                                /> {t.task}
                            </label>

                            <button onClick={() => handleDelete(t.id)}><AiOutlineClose /></button>

                        </ListTasksDiv>
                    ))
                }
            </form>


            <FooterList darkTheme={darkTheme}>
                <p>{ tasksActive.length } Items left</p>

                <FilterContainer className='d-flex gap-2' darkTheme={darkTheme}>
                    <p onClick={setAllTasks}>All</p>
                    <p onClick={handleFilterActive}>Active</p>
                    <p onClick={handleFilterCompleted}>Completed</p>
                </FilterContainer>

                <ClearAll onClick={handleDeleteAll}>Clear Completed</ClearAll>
            </FooterList>
        </ListContainer>
    )
}

export default ListTasks