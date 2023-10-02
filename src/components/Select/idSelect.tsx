import { Select } from 'antd'
import { DefaultOptionType } from 'antd/es/select'
import React from 'react'
type SelectProps = React.ComponentProps<typeof Select>

interface IdSelectProps
	extends Omit<
		SelectProps,
		'value' | 'onChange' | 'DefaultOptionName' | 'option'
	> {
	value: string | number | null | undefined
	onChange: (value?: number) => void
	defaultOptionName?: string
	option?: { name: string; id: number }[]
}

export default function idSelect(props: IdSelectProps) {
	const { value, onChange, defaultOptionName, option, ...restProps } = props
	return (
		<Select
			value={toNumber(value)}
			onChange={(value) => onChange(toNumber(value) || undefined)}
			{...restProps}>
			{defaultOptionName ? (
				<Select.Option value={0}>{defaultOptionName}</Select.Option>
			) : null}
			{option?.map((option) => (
				<Select.Option key={option.id} value={option.id}>
					{option.name}
				</Select.Option>
			))}
		</Select>
	)
}

const toNumber = (value: unknown) => {
	return isNaN(Number(value)) ? 0 : Number(value)
}
