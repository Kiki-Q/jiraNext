import React, { useState } from 'react'
import Login from 'views/unAuthenticated/Login'
import Register from 'views/unAuthenticated/Register'

function UnAuthenticated() {
	const [isRegister, setRegister] = useState(false)

	return (
		<div>
			{isRegister ? <Register /> : <Login />}

			<button onClick={() => setRegister(!isRegister)}>
				{isRegister ? '登录' : '注册'}
			</button>
		</div>
	)
}

export default UnAuthenticated
