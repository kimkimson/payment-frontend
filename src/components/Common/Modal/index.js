import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	background-color: rgba(0, 0, 0, 0.45);
	z-index: 9000;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
`;

const Content = styled.div`
	border-radius: 3px;
	padding: 12px;
	background-color: white;
	position: absolute;
	top: ${({ top }) => top || '50px'};
	width: ${({ width }) => width || '600px'};
	min-height: 250px;

	#header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		#close-button {
			cursor: pointer;
			&:after {
				content: '✕';
				color: gray;
			}
		}
	}

	#content {
		padding: 20px 12px;
	}
`;

const Modal = (props) => {
	const { show, title, width, top, height, onClose } = props;

	return (
		<React.Fragment>
			{show && (
				<div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
					<Wrapper>
						<Content width={width} top={top}>
							<div id='header'>
								<div>{title}</div>
								<div id='close-button' onClick={onClose} />
							</div>
							<div>{props.children}</div>
						</Content>
					</Wrapper>
				</div>
			)}
		</React.Fragment>
	);
};

export default Modal;
