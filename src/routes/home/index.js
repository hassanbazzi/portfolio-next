import { h } from 'preact';
import style from './style.scss';

const Home = () => (
	<div class={style.home}>
		<h1>Hassan Bazzi</h1>
		<h2>Full-Stack Developer</h2>
		<h2>Designer</h2>
		<h2>Life Coach</h2>
		<a href="mailto:contact@hassanbazzi.com">Contact</a>
		<p>Website temporarily down for a redesign.</p>
	</div>
);

export default Home;
