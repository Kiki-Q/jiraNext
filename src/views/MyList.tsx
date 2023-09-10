import SearchPanel from 'components/SearchPanel'
import ShowList from 'components/SearchPanel/ShowList'
import React, { useEffect, useState } from 'react'
import { stringify } from 'qs'
import { cleanObject, useDebounce, useMount } from 'utils'

const apiURL = process.env.REACT_APP_API_URL

function MyList() {
	const [list, setList] = useState([])

	const [users, setUsers] = useState([])
	const [user, setUser] = useState({ name: '', id: '' })
	const debounceValue = useDebounce(user, 1000)

	useMount(() => {
		fetch(`${apiURL}/users`).then(async (res) => {
			if (res.ok) {
				let data = await res.json()
				setUsers(data)
			}
		})
	})

	useEffect(() => {
		fetch(
			`${apiURL}/projects?${stringify(
				cleanObject({
					name: debounceValue.name,
					personId: debounceValue.id,
				}),
			)}`,
		).then(async (res) => {
			if (res.ok) {
				setList(await res.json())
			}
		})
	}, [debounceValue])

	return (
		<div>
			<SearchPanel users={users} user={user} setUser={setUser} />
			<ShowList list={list} />
		</div>
	)
}

export default MyList
