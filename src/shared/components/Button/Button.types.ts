import React, { CSSProperties, MouseEventHandler } from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	size?: ButtonSizeTypes,
	color?: ButtonColorTypes,	
	type?: 'submit' | 'button' | 'reset'
	disabled?: boolean,
	onClick?: MouseEventHandler<HTMLButtonElement>
	className?: string
	children?: React.ReactNode
	iconLeft?: React.ReactNode
	iconRight?: React.ReactNode
	something?: boolean
	title?: string
	style?: CSSProperties,
	loading?: boolean
}

export type ButtonSizeTypes = 'small' | 'medium' | 'large' | 'giant'

export type ButtonColorTypes = 'primary' | 'primary-flat' | 'secondary' | 'tertiary' | 'tertiary-flat' |'outline' | 'link' | 'outline-dark' | 'outline-tertiary' | 'secondary-flat'