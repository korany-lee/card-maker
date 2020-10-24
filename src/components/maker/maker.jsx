import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState([
		{
			id: '1',
			name: 'Koeun Lee',
			company: 'Kakao',
			theme: 'light',
			title: 'Software Engineer',
			email: 'aeranee91@gmail.com',
			message: 'go korany!',
			fileName: 'koeun',
			fileURL: 'koeun.png',
		},
		{
			id: '2',
			name: 'Jeahun Park',
			company: 'Kakao',
			theme: 'dark',
			title: 'Software Engineer',
			email: 'aeranee91@gmail.com',
			message: 'go Java!',
			fileName: 'jhp',
			fileURL: null,
		},
		{
			id: '3',
			name: 'Kim',
			company: 'Naver',
			theme: 'colorful',
			title: 'Software Engineer',
			email: 'aeranee91@gmail.com',
			message: 'go Kimmy!',
			fileName: 'Kimmy',
			fileURL: null,
		},
	]);
	const history = useHistory();
	const onLogout = () => {
		authService.logout();
	};
	useEffect(() => {
		authService.onAuthChange(user => {
			if (!user) {
				history.push('/');
			}
		});
	});
	const addCard = card => {
		const updated = [...cards, card];
		setCards(updated);
	};
	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor cards={cards} addCard={addCard} />
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
