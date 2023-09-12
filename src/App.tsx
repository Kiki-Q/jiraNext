import { useAuth } from 'context/AuthContext'
import React from 'react'
import Authenticated from 'views/athenticated'
import UnAuthenticated from 'views/unAuthenticated'
import { ConfigProvider } from 'antd'
import ErrorBoundary from 'components/ErrorBoundary'
import { FullPageErrorFallback } from 'components/lib/lib'

function App() {
	const { user } = useAuth()
	return (
		<ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
			<div className='App'>
				{/* <ErrorBoundary fallbackRender={FullPageErrorFallback}> */}
				{user ? <Authenticated /> : <UnAuthenticated />}
				{/* </ErrorBoundary> */}
			</div>
		</ConfigProvider>
	)
}

export default App
