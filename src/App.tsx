import React from 'react';
import styled from 'styled-components';
import './App.css';


const Wrapper = styled.div`
	background-color: hsl(0, 0%, 100%);
	padding: 15px;
	border-radius: 25px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;	
	gap: 10px;

	max-width: 300px;

	/* width: 200px; */
`

const Image = styled.img`
	width: 100%;
	border-radius: 10px;
`

export default function App() {
	return <>
		<Wrapper>
			<Image src='./images/image-qr-code.png' />
			<div style={{

				paddingLeft: '8px',
				paddingRight: '8px',
				paddingTop: '15px',
				paddingBottom: '15px',

				display: 'flex',
				flexDirection: 'column',
				gap: '15px',
				alignItems: 'center',
				justifyContent: 'space-around',

				// background: 'red',
				// opacity: 0,
				// height:'200px',
			}}>

				<div style={{
					color: 'hsl(218, 44%, 22%)',
					fontWeight: 'bold',
					fontSize: 25,


					textAlign: 'center',
				}}>
					Improve your front-end skills by building projects
				</div>
				<div style={{
					color: 'hsl(220, 15%, 55%)',
					fontWeight: '400',
					fontSize: '15',

					marginLeft: '15px',
					marginRight: '15px',
					textAlign: 'center',
				}}>
					Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
				</div>
			</div>

		</Wrapper>
	</>
}