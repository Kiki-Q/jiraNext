import React, { ReactNode, useState } from 'react'
import * as auth from './AuthProvider'
import { User } from 'components/SearchPanel'

const AuthContext = React.createContext<
	| {
			user: User | null
			login: (form: AuthForm) => Promise<void>
			register: (form: AuthForm) => Promise<void>
			loginOut: () => Promise<void>
	  }
	| undefined
>(undefined)
AuthContext.displayName = 'AuthContext'

interface AuthForm {
	username: string
	password: string
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)
	console.log('ddd===')

	const login = (form: AuthForm) => auth.login(form).then(setUser) //消参
	const register = (form: AuthForm) => auth.register(form).then(setUser)
	const loginOut = () => auth.loginOut().then(() => setUser(null))

	return (
		<AuthContext.Provider
			children={children}
			value={{ user, login, register, loginOut }}
		></AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = React.useContext(AuthContext)

	if (!context) {
		throw new Error('useAuth必须在AuthProvider中使用')
	}
	return context
}
