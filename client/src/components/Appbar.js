import React from 'react'
import Sidebar from './Sidebar'
import './Appbar.css'
import { Link } from 'react-router-dom'
import { Icon } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { Col, Container, Navbar } from 'react-bootstrap'
const Appbar = ({ user, setUser }) => {
	return (
		<Navbar fixed="top">
			<Container className="appbar">
				<Col className="slider">
					<Sidebar />
					<Link to="/" className="home">
						<b>Quiz</b>iify
					</Link>
				</Col>
				<Col className="appbar-user">
					<Icon className="icon">
						<AccountCircle />
					</Icon>
					<p><b>{user.name}</b></p>
				</Col>
			</Container>
		</Navbar>
	)
}

export default Appbar
