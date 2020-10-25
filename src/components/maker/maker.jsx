import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState({
		1: {
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
		2: {
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
		3: {
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
	});
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

	const addOrupdateCard = card => {
		setCards(cards => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
	};

	const deleteCard = card => {
		setCards(cards => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
	};
	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor
					cards={cards}
					addCard={addOrupdateCard}
					updateCard={addOrupdateCard}
					deleteCard={deleteCard}
				/>
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
