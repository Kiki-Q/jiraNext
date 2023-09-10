import React from 'react'
import { useArray } from 'utils'

interface Person {
	name: string
	age: number
}

function MyArray() {
	const persons: Person[] = [
		{ name: 'kiki', age: 19 },
		{ name: 'kiki2', age: 29 },
	]

	const { value, add, remove, clear } = useArray(persons)

	// useMount(() => {
	// 	console.log(value.noEx);
	// 	add({age: 10})
	// })

	return (
		<>
			<div>
				<button onClick={() => add({ name: 'jhon', age: 20 })}>
					add jhon
				</button>
				<button onClick={() => remove(0)}>remove 0</button>
				<button onClick={() => clear()}>clear</button>
			</div>

			<ul>
				{value?.map((person: Person, index: number) => {
					return (
						<li key={index}>
							{index}-{person.name}-{person.age}
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default MyArray
