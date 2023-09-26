import { useAuth } from 'context/AuthContext'
import React from 'react'
import { useDocumentTitle } from 'utils'
import MyList from 'views/MyList'
import { Route, Routes, Navigate } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import MyArray from 'views/MyArray'

function Authenticated() {
	const { loginOut } = useAuth()
	useDocumentTitle('项目列表', false)

	return (
		<div>
			<button onClick={() => loginOut()}>登出</button>
			<Router>
				<Routes>
					<Route path={'/projects'} element={<MyList />} />
					<Route path={'/projects/:projectId'} element={<MyArray />} />
				</Routes>
			</Router>
			{/* <MyList /> */}
		</div>
	)
}

export default Authenticated
