import React, { Component } from 'react';
import LoadingScreen from './LoadingScreen.js';
import SearchBar from './SearchBar.js';
import Card from '../users/UserCard.js';
import List from '../users/UserList.js';
import '../../css/App.css';
import userList from '../../services/UserService.js';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './Header.js';
import Message from './Message.js';
import Footer from './Footer.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			showCard: JSON.parse(localStorage.getItem('showCard')) || false,
			inputValue: '',
			search: [],
			load: true,
			male: [],
			female: []
		};

	}

	setUserDataState = () => {
		userList.fetchUsers()
			.then(usersData => {
				localStorage.setItem('lastVisitUsers', JSON.stringify(usersData));
				this.setState({
					users: usersData,
					search: usersData,
					load: false,
					refreshTime: new Date(),

				});

				this.filterGender(usersData);
			})
	}

	countTime = () => {
		setInterval(() => {
			this.setState({
				passedTime: new Date() - this.state.refreshTime
			})
		}, 3000)
	}

	componentDidMount() { // after render / Starting API calls to load in data for your component

		let storageData = JSON.parse(localStorage.getItem('lastVisitUsers'));
		this.countTime();

		if (storageData) {
			this.filterGender(storageData);
			this.setState({
				users: storageData,
				search: storageData,
				load: false,
				refreshTime: new Date(),

			})
		} else {
			this.setUserDataState();
			this.filterGender(this.state.users);
		}
		
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	if (this.state.bla === nextState.bla) {
	// 		return true
	// 	}
	// 	return false;
	// }

	handleClick = (event) => {
		localStorage.setItem('showCard', JSON.stringify(!this.state.showCard));

		this.setState((prevState) => {
			return { showCard: !prevState.showCard }
		});
	}

	handleRefresh = (event) => {
		localStorage.removeItem('lastVisitUsers');
		this.setUserDataState();

	}

	handleChange = (event) => {
		const filtered = this.state.users.filter(el => {
			return (el.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
		});
		this.setState({
			search: filtered,
			inputValue: event.target.value
			
		});
		this.filterGender(filtered);
	}

	filterGender = (arr) => {
		this.setState({
			male: arr.filter(el => {
				return el.gender == 'male';
			}),
			female: arr.filter(el => {
				return el.gender == 'female';
			})
		})
	}

	render() {
		return (
			<React.Fragment>
				<Header handleClick={this.handleClick} handleRefresh={this.handleRefresh} showCard={this.state.showCard} />
				{this.state.load ? <LoadingScreen /> :
					<main>
						<SearchBar handleChange={this.handleChange} inputValue={this.state.inputValue} />
						<div>male:{this.state.male.length} female:{this.state.female.length}</div>
						<div className="row">
							<div className="col s12 m12">
								{(this.state.search.length === 0) ? <Message /> :
									this.state.search.map((el, i) => {
										return (this.state.showCard ? <Card value={el} key={i} /> : <List value={el} key={i} />)
									})}
							</div>
						</div>
					</main>}
				<Footer countTime={this.state.passedTime} />
			</React.Fragment>
		)
	}
}

export default Home;
