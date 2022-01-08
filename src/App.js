import React from 'react'
import './App.css';
import AboutMe from './AboutMe'
import Intro from './Intro'
import NavBar from './NavBar'
import ContactMe from './ContactMe'
class App extends React.Component {

	constructor(props) {
		super()
		this.state = {
			visible: true,
		}
		this.scrollToSection = this.scrollToSection.bind(this);
	}

	scrollToSection(e) {
		window.scrollTo(0, document.getElementById(e.target.getAttribute("data-scrollto")).offsetTop)
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="App">
    				<header className="App-header">
    					<Intro scrollToSection={this.scrollToSection} />
			</header>
					
					<AboutMe scrollToSection={this.scrollToSection} />
		
			</div>
			</div>
		);
	}
}
export default App;