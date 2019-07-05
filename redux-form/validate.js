export const validate = (values) => {
  const errors = {};
  if (!values.username) {
  } else if (values.username.length <= 2) {
    errors.username = 'Must be 3 characters or more'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password1) {
    errors.password1 = 'Required'
  } else if (values.password1.length < 5) {
    errors.password1 = 'Must be 5 characters or more'
  }
  if (!values.password2) {
    errors.password2 = 'Required'
  } else if (values.password2.length < 5) {
    errors.password2 = 'Must be 5 characters or more'
  } else if (values.password2 !== values.password1) {
    errors.password2 = 'Your passwords is not equal'
  }
  if (!values.post) {
    errors.post = 'Required'
  }
  return errors
}