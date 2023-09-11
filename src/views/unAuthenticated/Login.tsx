import { useAuth } from 'context/AuthContext'
import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd'

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
	)
}

export default Login
