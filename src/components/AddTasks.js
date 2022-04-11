import React from 'react'
import { useDispatch } from 'react-redux'
import { AddTask } from '../actions/TasksActions'
import useForm from '../hooks/useForm'
import uuid from 'react-uuid'
import { AddTaskInput } from '../styles/styledComponents/addtaskStyle'

const AddTasks = ({ darkTheme }) => {

  const dispatch = useDispatch()

  const [formValues, reset, handleInputChange] = useForm({
    task: '',
    completed: false
  })

  const { task } = formValues

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(AddTask({
      ...formValues,
      id: uuid()
    }))
    reset()
    window.location.reload()
}


return (
  <div className="d-flex flex-column w-100">
    <form onSubmit={handleSubmit} className="w-100">
      <AddTaskInput
        type="text"
        placeholder='Create a new task'
        name='task'
        onChange={handleInputChange}
        value={task}
        autoComplete="off"
        darkTheme={darkTheme}
      />
    </form>
  </div>
)
}

export default AddTasks