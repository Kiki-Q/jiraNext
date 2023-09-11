import { useAuth } from 'context/AuthContext'
import React, { useEffect } from 'react'
import { Button, Card, Form, Input } from 'antd'
import styled from '@emotion/styled'

function Login() {
	const { user, login } = useAuth()
	interface FieldType {
		username: string
		password: string
	}

	const handleSubmit = (values: FieldType) => {
		// ev.preventDefault()
		login(values)
	}

	useEffect(() => {
		console.log('user=', user)
	}, [user])

	return (
		<div>
			<ShadowCard>
				<Form
					name='basic'
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600 }}
					initialValues={{ remember: true }}
					onFinish={handleSubmit}
					autoComplete='off'
				>
					<Form.Item<FieldType>
						label='用户名'
						name='username'
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input type='text' name='' id='username' />
					</Form.Item>
					<Form.Item<FieldType>
						label='密码'
						name='password'
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type='primary' htmlType='submit'>
							登录
						</Button>
					</Form.Item>
				</Form>
			</ShadowCard>
		</div>
	)
}

export default Login

const ShadowCard = styled(Card)`
	width: 40rem;
	/* min-height: 56rem; */
	padding: 3.2rem 4rem;
	border-radius: 0.3rem;
	box-sizing: border-box;
	box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
`
