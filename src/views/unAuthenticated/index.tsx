import React, { useState } from 'react'
import Login from 'views/unAuthenticated/Login'
import Register from 'views/unAuthenticated/Register'
import styled from '@emotion/styled'
import { Typography } from 'antd'
import { useDocumentTitle } from 'utils'
// import { helmet } from 'react-helmet';

function UnAuthenticated() {
	const [isRegister, setRegister] = useState(false)
	const [error, setError] = useState<Error | null>(null)
	useDocumentTitle(isRegister ? '注册' : '登录', false)
	return (
		<Container>
			{error ? (
				<Typography.Text type='danger'>{error.message}</Typography.Text>
			) : null}
			{isRegister ? <Register /> : <Login onError={setError} />}

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
