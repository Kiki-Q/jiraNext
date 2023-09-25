import { useAuth } from 'context/AuthContext'
import React from 'react'
import { useDocumentTitle } from 'utils'
import MyList from 'views/MyList'

function Authenticated() {
	const { loginOut } = useAuth()
	useDocumentTitle('项目列表', false)

	return (
		<div>
			<button onClick={() => loginOut()}>登出</button>
			<MyList />
		</div>
	)
}

export default Authenticated
