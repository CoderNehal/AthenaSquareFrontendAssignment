import React from 'react';
// user imports
import style from '../styles/Navbar.module.scss';
const Navbar = () => {
	return (

		<nav className={style.navbar}>
			{' '}
			{/*Navbar container*/}
			<div className={style.left}>
				{' '}
				{/*Navbar left section*/}
				<img
					src='https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png'
					alt='logo'
				/>{' '}
				{/* Logo */}
				<div className={style.navbar__links}>
					{' '}
					{/*Navbar links*/}
					<a href='#'>
						<span>Product</span>{' '}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 8.25l-7.5 7.5-7.5-7.5'
							/>
						</svg>{' '}
						{/* Arrow down*/}
					</a>
					<a href='#'>Our Story</a>
					<a href='#'>
						<span>Resources</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 8.25l-7.5 7.5-7.5-7.5'
							/>
						</svg>
					</a>
				</div>{' '}
				{/*Navbar links*/}
			</div>{' '}
			{/*Navbar left section*/}
			<div className={style.right}>  {/*Navbar right section*/}
				<a href='#'>Book now</a>
				<svg
					className={style.ham}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/> {/*Hamburger menu for mobile devices*/}
				</svg>
			</div> {/*Navbar right section*/}
			{/*Navbar container*/}
		</nav>
	);
};

export default Navbar;
