import SearchPanel from 'components/SearchPanel'
import ShowList from 'components/SearchPanel/ShowList'
import { useAsync } from 'hooks/use-async'
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
	const [users, setUsers] = useState([])
	const [user, setUser] = useState({ name: '', id: '' })
	const client = useHttp()
	const debounceValue = useDebounce(user, 1000)
	const { run, isLoading, data: list } = useAsync<Project[]>()

	useMount(() => {
		client('/users').then(setUsers)
	})

	useEffect(() => {
		run(
			client('/projects', {
				data: {
					name: debounceValue.name,
					personId: debounceValue.id,
				},
			}),
		)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debounceValue])

	return (
		<div>
			<SearchPanel users={users} user={user} setUser={setUser} />
			<ShowList dataSource={list || []} loading={isLoading} />
		</div>
	)
}

export default MyList
