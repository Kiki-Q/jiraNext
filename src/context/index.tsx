import { ReactNode } from 'react'
import { AuthProvider } from './AuthContext'

export const AppProviders = ({ children }: { children: ReactNode }) => {
	return <AuthProvider>{children}</AuthProvider>
}
