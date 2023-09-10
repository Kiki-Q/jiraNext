import { useAuth } from 'context/AuthContext'
import React from 'react'
import MyList from 'views/MyList'

function Authenticated() {
	const { loginOut } = useAuth()

	return (
		<div>
			<button onClick={() => loginOut()}>登出</button>
			<MyList />
		</div>
	)
}

export default Authenticated
