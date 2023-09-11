import React, { useState } from 'react'
import Login from 'views/unAuthenticated/Login'
import Register from 'views/unAuthenticated/Register'
import styled from '@emotion/styled'

function UnAuthenticated() {
	const [isRegister, setRegister] = useState(false)

	return (
		<Container>
			{isRegister ? <Register /> : <Login />}

			<button onClick={() => setRegister(!isRegister)}>
				{isRegister ? '登录' : '注册'}
			</button>
		</Container>
	)
}

export default UnAuthenticated

let Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
`
