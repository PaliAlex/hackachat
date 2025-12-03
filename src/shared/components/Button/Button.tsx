import React, { FC } from 'react';
import { StyledButton } from './Button.styles';
import { ButtonColorTypes, ButtonProps, ButtonSizeTypes } from './Button.types';
import { omit } from 'lodash';

const Button: FC<ButtonProps> = ({ color, size, children, iconLeft, iconRight, loading, ...props }) => {
	const colorClass: ButtonColorTypes = color || 'primary';
	const sizeClass: ButtonSizeTypes = size || 'medium';

	return (
		<StyledButton
			color={colorClass}
			size={sizeClass}
			{...omit(props, ['color', 'size', 'loading'])}
			disabled={props.disabled || loading}
			>
			{loading && <div className="spinner" />}
			{React.isValidElement(iconLeft) && (
				<div className={`button-icon left ${props.disabled && 'disabled'}`}>
				{iconLeft}
				</div>
			)}
			{children}
			{React.isValidElement(iconRight) && (
				<div className={`button-icon right ${props.disabled && 'disabled'}`}>
				{iconRight}
				</div>
			)}
		</StyledButton>
	);
};

export default Button;