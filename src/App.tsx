import { useAuth } from 'context/AuthContext'
import React from 'react'
import Authenticated from 'views/athenticated'
import UnAuthenticated from 'views/unAuthenticated'
// import { ConfigProvider } from 'antd';

function App() {
	const { user } = useAuth()
	return (
		// <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
		<div className='App'>{user ? <Authenticated /> : <UnAuthenticated />}</div>
		// </ConfigProvider>
	)
}

export default App
