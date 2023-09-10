import { useAuth } from 'context/AuthContext'
import React from 'react'
import Authenticated from 'views/athenticated'
import UnAuthenticated from 'views/unAuthenticated'

function App() {
	const { user } = useAuth()
	return (
		<div className='App'>{user ? <Authenticated /> : <UnAuthenticated />}</div>
	)
}

export default App
