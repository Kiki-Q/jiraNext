import styled from '@emotion/styled'

export const Row = styled.div<{
	gap?: number | boolean
	between?: boolean
}>`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.between ? 'space-between' : undefined)};
	> * {
		margin-right: ${(props) =>
			typeof props.gap === 'number'
				? props.gap + 'rem'
				: props.gap
				? '2rem'
				: undefined};
	}
`
