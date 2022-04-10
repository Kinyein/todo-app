import { useState } from "react"

const useForm = (initialState = {}) => {

    const [formValues, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    return [formValues, reset, handleInputChange]
}

export default useForm