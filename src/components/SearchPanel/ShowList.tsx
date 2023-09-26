import React from 'react'
import { Table } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'
import { Link } from 'react-router-dom'
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
			// dataIndex: 'name',
			key: 'name',
			sorter: (a, b) => a.name.localeCompare(b.name),
			render(value, record) {
				return <Link to={String(record.id)}>{value.name}</Link>
			},
		},
		{
			title: '小组',
			key: 'organization',
			render(value, record, index) {
				return <span key={value.organization}>{value.organization}</span>
			},
		},
	]

	return (
		<div>
			<Table
				columns={columns}
				{...props}
				rowKey={(record) => record.id}></Table>
		</div>
	)
}
