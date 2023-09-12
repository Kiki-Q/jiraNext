import React from 'react'
import { Table } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'

interface Project {
	id: number
	name: string
	personId: number
	organization: string
}

interface ListProps extends TableProps<Project> {}

export default function ShowList({ ...props }: ListProps) {
	const columns: ColumnsType<Project> = [
		{
			title: '项目',
			dataIndex: 'name',
			sorter: (a, b) => a.name.localeCompare(b.name),
		},
		{
			title: '小组',
			render(value, record, index) {
				return <span key={index}>{value.organization}</span>
			},
		},
	]

	return (
		<div>
			<Table columns={columns} {...props}></Table>
		</div>
	)
}
