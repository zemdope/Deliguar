import styled from 'styled-components';
export const Wrapper = styled.div`
	width: 100%;
	form {
		border-radius: 18px;
		border: 3px solid #f28f1d;
		background: rgba(254, 248, 237, 0.1);
		padding: 40px 21px;
		margin-bottom: 40px;
		max-width: 500px;
		margin-inline: auto;
		input:not(input[type='checkbox']) {
			background-color: transparent;
			border: none;
			border-bottom: 2px solid #bfa7c7;
			outline: 0;
			width: 100%;
			margin-top: 16px;
			@media (min-width: 992px) {
				margin-top: 24px;
			}
		}
		input[type='checkbox'] {
			margin-right: 8px;
			margin-bottom: 24px;
			margin-top: 3px;
		}

		input:is(:focus, :active) {
			border-bottom: 2px solid #662472 !important;
		}
		textarea:is(:focus, :active) {
			border: 2px solid #662472;
		}
		.checkbox-container {
			display: flex;
			margin-bottom: 5px;

			label {
				position: relative;
				cursor: pointer;
				max-width: 800px;
				color: #5e286d;

				/* H9 */
				font-family: 'Open Sans';
				font-size: 14px;
				font-style: normal;
				font-weight: 400;
				line-height: 22px; /* 157.143% */
			}
			label::before {
				position: absolute;
				content: '';
				left: -25px;
				top: 5px;
				width: 16px;
				height: 16px;
				background: transparent;
				border: 1px solid #662472;
				border-radius: 3px;
			}
			a {
				/* H9 */
				font-family: 'Open Sans';
				font-size: 14px !important;
				font-style: normal;
				font-weight: 500;
				line-height: 22px; /* 157.143% */
				color: #5e286d;
				text-decoration:underline !important;
				position:relative;
				z-index:99;
			}
			input {
				cursor: pointer;
				opacity: 0;
				width: 20px;
			}
			input:checked + label::before {
				background-color: #bfa7c7;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		button {
			display: flex;
			width: 160px;
			padding: 8px 32px;
			justify-content: center;

			border-radius: 32px;
			background: #f2851d;
			box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.23),
				-5px -5px 10px 0px rgba(250, 251, 255, 0.1);
			color: #fff8ee;
			text-align: center;
			border: none;
			margin-top: 20px;
			margin-left: auto;
			/* H3 */
			font-family: 'Open Sans';
			font-size: 20px;
			font-style: normal;
			font-weight: 700;
			line-height: 30px; /* 150% */
		}
		button:disabled {
			color: #662472;
			opacity: 0.7;
		}
		button.disabled {
			color: #662472;
			opacity: 0.7;
		}
		#birthday {
			margin-bottom: 16px;
			@media (min-width: 992px) {
				margin-bottom: 32px;
			}
		}
		label {
			color: #662472;

			/* H8 */
			font-family: 'Open Sans';
			font-size: 16px;
			font-style: normal;
			font-weight: 700;
			line-height: 20px; /* 125% */
		}
		label,
		textarea,
		input {
			color: #662472;

			/* H8 */
			font-family: 'Open Sans';
			font-size: 16px;
			font-style: normal;
			font-weight: 700;
			line-height: 20px; /* 125% */
			&::placeholder {
				color: #bfa7c7;

				/* H5 */
				font-family: 'Open Sans';
				font-size: 16px;
				font-style: normal;
				font-weight: 400;
				line-height: 26px; /* 162.5% */
			}

			&:-ms-input-placeholder {
				color: #bfa7c7;

				/* H5 */
				font-family: 'Open Sans';
				font-size: 16px;
				font-style: normal;
				font-weight: 400;
				line-height: 26px; /* 162.5% */
			}

			&::-ms-input-placeholder {
				color: #bfa7c7;

				/* H5 */
				font-family: ' Open Sans';
				font-size: 16px;
				font-style: normal;
				font-weight: 400;
				line-height: 26px; /* 162.5% */
			}
		}
		textarea {
			border-radius: 18px;
			border: 2px solid #bfa7c7;
			background: rgba(254, 248, 237, 0.1);
			width: 100%;
			padding: 11px;
			margin-top: 16px;
			margin-bottom: 16px;
			min-height: 75px;
			max-height: 75px;
			outline: 0;
			@media (min-width: 992px) {
				margin-top: 32px;
				margin-bottom: 24px;
				overflow-y: clip;
			}
		}
		h2 {
			color: #5e286d;

			/* H6 */
			font-family: 'Americane';
			font-size: 24px;
			font-style: normal;
			font-weight: 700;
			line-height: 32px; /* 112.5% */
			margin-bottom: 40px;
			@media (min-width: 992px) {
				font-size: 32px;
				line-height: 36px;
				margin-bottom: 72px;
			}
		}
	}
`;
export const AttachmentDiv = styled.div`
	min-width: 60px;
	min-height: 60px;
	max-width: 60px;
	max-height: 60px;
	border-radius: 50%;
	background-color: #e5dae3;
	border: 1px solid #bfa7c7;
	color: #7066fb;
	position: relative;
	cursor: pointer;
	text-align: center;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 99999; /* Change z-index to 2 to make the image appear above the file input */
	}
	.selected-image {
		position: absolute;
		left: 50%;
		top: 50%;
		min-width: 60px;
	min-height: 60px;
	max-width: 60px;
	max-height: 60px;
		display:block;
		border-radius:50%;
		z-index:3;
	}

	#attachment,
	#file-upload-button {
		width: 60px !important;
		height: 60px !important;
		margin-top: 0;
		opacity: 0;
		position: relative;
		inset: 0;
		z-index: 110;
		cursor: pointer;
	}

	#file-upload-button {
		z-index: -1;
	}
`;
