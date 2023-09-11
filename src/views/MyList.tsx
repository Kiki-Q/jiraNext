import SearchPanel from 'components/SearchPanel'
import ShowList from 'components/SearchPanel/ShowList'
import React, { useEffect, useState } from 'react'
import { useDebounce, useMount } from 'utils'
import { useHttp } from 'utils/http'

interface Project {
	id: number
	name: string
	personId: number
	organization: string
}

function MyList() {
	const [list, setList] = useState<Project[]>([])

	const [users, setUsers] = useState([])
	const [user, setUser] = useState({ name: '', id: '' })
	const client = useHttp()
	const debounceValue = useDebounce(user, 1000)

	useMount(() => {
		client('/users').then(setUsers)
	})

	useEffect(() => {
		client('/projects', {
			data: {
				name: debounceValue.name,
				personId: debounceValue.id,
			},
		}).then(setList)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debounceValue])

	return (
		<div>
			<SearchPanel users={users} user={user} setUser={setUser} />
			<ShowList list={list} />
		</div>
	)
}

export default MyList
