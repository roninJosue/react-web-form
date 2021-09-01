import {useState} from "react"

const initialFormValues = {
  name: "",
  lastname: "",
  birthdate: new Date(),
  email: "",
  phone: "",
  formSubmitted: false,
  success: false,
  open: false
}

const regexValidEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.[a-z]+)/

const errorMessage = {
  name: 'Nombre es un campo requerido',
  lastname: 'Apellido es un campo requerido',
  email: 'Correo es incorrecto',
  phone: 'Teléfono es incorrecto',
  birthdate: 'Formato de fecha incorrecto'
}

export const useForm = () => {
  const [values, setValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({})

  const validate = (fieldValues = values) => {
    let tempError = {...errors}

    if ('name' in fieldValues) {
      tempError.name = fieldValues.name ? "" : errorMessage['name']
    }

    if ('email' in fieldValues) {
      tempError.email = regexValidEmail.test(fieldValues.email) ? "" : errorMessage['email']
    }

    if ('phone' in fieldValues) {
      const number = fieldValues.phone
        .replace(/\(\+505\)|#|\s/g, '')

      tempError.phone = number.length === 8 ? "" : errorMessage['phone']
    }

    if ('lastname' in fieldValues) {
      tempError.lastname = fieldValues.lastname ? "" : errorMessage['lastname']
    }

    if ('birthdate' in fieldValues) {
      tempError.birthdate = fieldValues.birthdate ? "" : errorMessage['birthdate']
    }

    setErrors({...tempError})
  }

  const handleInput = (e) => {
    const {name, value} = e.target

    setValues({
      ...values,
      [name]: value
    })
    validate({[name]: value})
  }

  const handleSuccess = () => {
    setValues({...initialFormValues, formSubmitted: true, success: true, open: true})
  }

  const handleClose = () => {
    setValues({
      ...values,
      open: false
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validForm()){
      handleSuccess()
    }
  }

  /*const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false
    })
  }*/

  const validForm = (fieldValues = values) => {
    return fieldValues.name &&
      fieldValues.lastname &&
      fieldValues.birthdate &&
      fieldValues.phone &&
      fieldValues.email &&
      Object.values(errors).every((err) => err === "")
  }

  const handleDateChange = (date) => {
    setValues({...values, birthdate: date})
  }

  return {
    values,
    errors,
    handleInput,
    validForm,
    handleSubmit,
    handleDateChange,
    handleSuccess,
    handleClose,
    setValues
  }
}