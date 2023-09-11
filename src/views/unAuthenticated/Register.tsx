import { useAuth } from 'context/AuthContext'
import React, { FormEvent } from 'react'

function Register() {
	const { register } = useAuth()

	const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault()
		const username = (ev.currentTarget.elements[0] as HTMLInputElement).value
		const password = (ev.currentTarget.elements[1] as HTMLInputElement).value
		register({ username, password })
	}
	return (
		<form action='' onSubmit={handleSubmit}>
			<div>
				<label htmlFor='username'>用户名：</label>
				<input type='text' name='' id='username' />
			</div>
			<div>
				<label htmlFor='password'>密码：</label>
				<input type='password' name='' id='password' />
			</div>
			<button>注册</button>
		</form>
	)
}

export default Register
