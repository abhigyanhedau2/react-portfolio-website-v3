import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import './App.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {

	// Scroll back to top at component did mount
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<div className="nav-and-title">
				<Navbar />
				<Title />
			</div>
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App