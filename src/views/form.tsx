import React, { FormEvent } from 'react'

const apiUrl = process.env.REACT_APP_API_URL

function form() {
	const login = (params: { username: string; password: string }) => {
		fetch(`${apiUrl}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then(async (res) => {
			if (res.ok) {
				await res.json()
			}
		})
	}

	const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault()
		const username = (ev.currentTarget.elements[0] as HTMLInputElement)
			.value
		const password = (ev.currentTarget.elements[1] as HTMLInputElement)
			.value
		login({ username, password })
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
			<button>登录</button>
		</form>
	)
}

export default form
