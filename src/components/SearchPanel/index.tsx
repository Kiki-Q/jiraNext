import React from 'react'

export interface User {
	name: string
	id: string
	token?: string
}

interface searchProps {
	users: User[]
	user: User
	setUser: (param: searchProps['user']) => void
}

function SearchPanel({ users, user, setUser }: searchProps) {
	const handleChange = (type: string, value: string) => {
		const param = { ...user }

		param[type as keyof typeof user] = value
		// eslint-disable-next-line eqeqeq
		// if(type == 'name') {
		//     param[type] = value as string
		// }else{
		//     param[type] = value as number
		// }
		setUser(param)
	}

	return (
		<form>
			<input
				type='text'
				onChange={(e) => handleChange('name', e.target.value)}
			/>
			<select
				name=''
				id=''
				onChange={(e) => handleChange('id', e.target.value)}
			>
				<option value=''>负责人</option>
				{users.map((user: User) => {
					return (
						<option value={user.id} key={user.id}>
							{user.name}
						</option>
					)
				})}
			</select>
		</form>
	)
}

export default SearchPanel
