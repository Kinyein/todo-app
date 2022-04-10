import React, { useEffect, useState } from 'react'
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

    // const [itemsLeft, setItemsLeft] = useState(tasksActive.length)

    // console.log(tasksActive.length)

    useEffect(() => {
        setAllTasks()
    }, [tasks])


    const setAllTasks = () => {
        setTasksToList(tasks)
    }

    const handleFilterActive = () => {
        dispatch(FilterActiveTask())
        if (tasksActive === undefined) {
            console.log('No tienes tareas activas')
        } else {
            setTasksToList(tasksActive)
        }

    }

    const handleFilterCompleted = () => {
        dispatch(FilterCompletedTask())

        if (tasksCompleted === undefined) {
            console.log('No tienes tareas completadas')
        } else {
            setTasksToList(tasksCompleted)
        }
    }

    const handleDelete = (id) => {
        dispatch(DeleteTask(id))
    }

    const handleDeleteAll = () => {
        dispatch(DeleteAllTasks())
    }

    // const itemsLeftCheck = () => {
    //     if (tasksActive.length === 0) {
    //         setItemsLeft('0')
    //     }else{
    //         setItemsLeft(tasksActive.length)
    //     }
    // }

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
                <p>Items left</p>

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