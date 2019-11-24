import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import {Home} from 'pages/Home'
import {Game} from 'pages/Game'
import {Play} from 'pages/Game/Play'
import {ScoreBoard} from 'pages/ScoreBoard'

export const App = () => {
	return (
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
							<Link to="/score">ScoreBoard</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/game/play">
						<Play />
					</Route>
					<Route path="/game">
						<Game />
					</Route>
					<Route path="/score">
						<ScoreBoard />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}
