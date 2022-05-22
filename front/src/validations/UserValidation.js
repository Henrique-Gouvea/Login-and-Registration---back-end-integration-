import * as yup from 'yup'

const userSchema = yup.object().shape({
	name: yup.string().required(),
	password: yup.string().min(6).max(8).required(),
	confirmPassword: yup.string().min(6).required(),
})

export default userSchema;