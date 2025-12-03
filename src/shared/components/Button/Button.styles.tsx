import styled from 'styled-components';
import { ButtonProps } from './Button.types';
import theme from "../../themes/default";

//Default Size is Medium, Default Color is Primary
export const StyledButton = styled.button<ButtonProps>`
  	display: flex;
	cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
	align-items: center;
	justify-content: center;
	border: 2px solid transparent;
	font-family: ${theme.fonts.heading};
	border-radius: ${theme.borderRadius.average};

	${props => props.size === 'giant' && {
		padding: '12px 24px',
		fontSize: '24px',
		fontWeight: '900',
		lineHeight: '28px',
	}}

	${props => props.size === 'large' && {
		padding: '12px 24px',
		fontSize: '18px',
		fontWeight: '600',
		lineHeight: '24px',
	}}

	${props => props.size === 'medium' && {
		padding: '8px 16px',
		fontSize: '18px',
		fontWeight: '600',
		lineHeight: '24px',
	}}

	${props => props.size === 'small' && {
		padding: '6px 12px',
		fontSize: '16px',
		fontWeight: '600',
		lineHeight: '20px',
	}}

	${props => props.color === 'primary' && `
		background: ${theme.colors.peppermint[500]};
		color: ${theme.colors.midnight[500]};
		border: 2px solid;
		border-color: ${theme.colors.midnight[500]};
		border-radius: ${theme.borderRadius.medium} ${theme.borderRadius.medium} ${theme.borderRadius.subtle} ${theme.borderRadius.medium};
		&:focus { outline: 4px solid ${theme.colors.peppermint[500]}; }
		&:hover { background: #89D29B; }
		&:active { background: ${theme.colors.peppermint[400]}; }
		box-shadow: 0px 4px 0px 0px ${theme.colors.midnight[500]};
	`}

	${props => props.color === 'primary-flat' && `
		background: ${theme.colors.peppermint[500]};
		color: ${theme.colors.midnight[500]};
		border-radius: ${theme.borderRadius.medium} ${theme.borderRadius.medium} ${theme.borderRadius.subtle} ${theme.borderRadius.medium};
		&:focus { outline: 4px solid #B3B3B3; }
		&:hover { background: #89D29B; }
		&:active { background: ${theme.colors.peppermint[400]}; }
		&:disabled {	
			background: ${theme.colors.monochrome[200]};
			color:  ${theme.colors.monochrome[400]};
		}
	`}

	${props => props.color === 'primary' && props.size === 'giant' && `
		box-shadow: 0px 4px 8px rgba(106, 0, 6, 0.3), 0px 12px 32px rgba(106, 0, 6, 0.3)
		&:hover { box-shadow: 0px 4px 8px rgba(106, 0, 6, 0.3), 0px 12px 32px rgba(106, 0, 6, 0.3) }
  	`}

	${props => props.color === 'secondary' && `
		background: ${theme.colors.periwinkle[500]};
		color: ${theme.colors.midnight[500]};
		border: 2px solid;
		border-color: ${theme.colors.midnight[500]};
		border-radius: ${theme.borderRadius.medium} ${theme.borderRadius.medium} ${theme.borderRadius.subtle} ${theme.borderRadius.medium};
		&:focus { outline: 4px solid #B3B3B3; }
		&:hover { background: #A79FD8; }
		&:active { background: ${theme.colors.periwinkle[300]}; }
		box-shadow: 0px 4px 0px 0px ${theme.colors.midnight[500]};
	`}

	${props => props.color === 'secondary-flat' && `
		background: ${theme.colors.periwinkle[500]};
		color: ${theme.colors.midnight[500]};
		border-radius: ${theme.borderRadius.medium} ${theme.borderRadius.medium} ${theme.borderRadius.subtle} ${theme.borderRadius.medium};
		&:focus { outline: 4px solid #B3B3B3; }
		&:hover { background: #A79FD8; }
		&:active { background: ${theme.colors.periwinkle[300]}; }
	`}
  
	${props => props.color === 'secondary' && props.size === 'giant' && `
		box-shadow: 0px 4px 8px rgba(58, 65, 70, 0.3), 0px 12px 32px rgba(58, 65, 70, 0.3);
		&:hover {box-shadow: 0px 4px 8px rgba(58, 65, 70, 0.3), 0px 12px 32px rgba(58, 65, 70, 0.3); }
  	`}

  	${props => props.color === 'tertiary' && `
		background: ${theme.colors.almond[500]};
		border: 2px solid;
		border-color: ${theme.colors.midnight[500]};
		border-radius: ${theme.borderRadius.medium} ${theme.borderRadius.medium} ${theme.borderRadius.subtle} ${theme.borderRadius.medium};
		color: ${theme.colors.midnight[500]};
		&:hover { background: #D7D1CA; }
		&:focus { 
			outline: 4px solid ${theme.colors.almond[500]};
			box-shadow: 4px ${theme.colors.monochrome[400]};
		}
		&:active { background: ${theme.colors.almond[500]}; }
		box-shadow: 0px 4px 0px 0px ${theme.colors.midnight[500]};
  	`}

	${props => props.color === 'tertiary-flat' && `
		background: ${theme.colors.almond[500]};
		border-radius: ${theme.borderRadius.average} ${theme.borderRadius.average} ${theme.borderRadius.square} ${theme.borderRadius.average};
		color: ${theme.colors.midnight[500]};
		&:hover { background: #D7D1CA; }
		&:active { background: ${theme.colors.almond[300]}; }
		&:focus {
			outline: 4px solid ${theme.colors.almond[500]};
			box-shadow: 0px 4px 0px 0px ${theme.colors.monochrome[400]};
		}
  	`}

	${props => props.color === 'outline' && `
		background: ${theme.colors.mono[0]};
		color: ${theme.colors.advance[100]};
		border: 2px solid;
		border-color: ${theme.colors.advance[100]};
		&:hover { background: rgba(106, 0, 6, 0.2); }
		&:focus { 
			border-color: transparent; 
			outline: 4px solid ${theme.colors.advance[30]}; 
		}
		&:active { background:  rgba(106, 0, 6, 0.1); }
	`}

	&:disabled {	
		background: ${theme.colors.monochrome[200]};
		color:  ${theme.colors.monochrome[400]};
		border: 2px solid ${theme.colors.monochrome[400]};
		box-shadow: none;
	}

	.spinner {
		width: 16px;
		height: 16px;
		border: 2px solid #fff;
		border-top: 2px solid #000;
		border-radius: 50%;
		animation: spin 0.6s linear infinite;
		margin-right: 8px;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;