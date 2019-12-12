import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {GlobalStyle} from 'styled/GlobalStyle'
import {Home} from 'pages/Home'
import {Game} from 'pages/Game'
import {Play} from 'pages/Game/Play'
import {ScoreBoard} from 'pages/ScoreBoard'

export const App = () => {
	const currentDucks = useSelector(state => state.currentDucks)

	return (
		<>
			<GlobalStyle />
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/game">Game</Link>
							</li>
							<li>
								<Link to="/scoreboard">ScoreBoard</Link>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/game/play">
							{!currentDucks && <Redirect to="/game" />}
							<Play />
						</Route>
						<Route path="/game">
							<Game />
						</Route>
						<Route path="/scoreboard">
							<ScoreBoard />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	)
}
