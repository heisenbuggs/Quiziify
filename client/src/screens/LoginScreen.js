import React, { useState, useEffect } from 'react'
import './LoginScreen.css'
import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from '../firebase/firebase'
import LoadingScreen from './LoadingScreen'
import { Col, Container, Row } from 'react-bootstrap'

const LoginScreen = ({ setUser }) => {
	const [loading, setLoading] = useState(true)
	var uiConfig = {
		signInflow: 'popup',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			signInSuccessWithAuthResult: () => false,
		},
	};

	useEffect(() => {
		let isMounted = true
		firebase.auth().onAuthStateChanged((user) => {
			// setIsLoggedIn(!!user)
			if (user && isMounted) {
				setUser({
					uid: firebase.auth().currentUser.uid,
					name: firebase.auth().currentUser.displayName,
					email: firebase.auth().currentUser.email,
				})
				console.log('User Logged In')
			} else {
				console.log('User Signed Out')
				setUser({})
			}
			console.log('auth change')
			if (isMounted) setLoading(false)
		})
		return () => (isMounted = false)
	}, [setUser]);

	return (
		<Container fluid>
			{loading ? (
				<LoadingScreen />
			) : (
				<Container className="Home">
					<Row className="row">
						<Col className="logo" xs={12} lg={6}>
							<Col className="logo-name">
								<b>Quiz</b>iify
							</Col>
							<Col className="description">
								Create and Join Quiz at a single platform. You can create and participate
								trivia quizzes, personality test, polls and surveys.
								Especially created for blind students too.
								Share out your quiz with your students with a unique code.
							</Col>
						</Col>

						<Col className="login-card" xs={12} lg={6}>
							<label className="login-label">
								<b>Q</b>
							</label>
							<StyledFirebaseAuth
								borderRadius="40px"
								uiConfig={uiConfig}
								firebaseAuth={firebase.auth()}
							/>
						</Col>
					</Row>
				</Container>
			)}
		</Container>
	)
}

export default LoginScreen;
