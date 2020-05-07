import React from "react";
import { Link } from 'react-router-dom';

import mw_logo from "../icons/mw_logo.png";
import fb_logo from "../icons/facebook-logo.png";
import in_logo from "../icons/linkedin-letters.png";
import insta_logo from "../icons/instagram-logo.png";

import "./Navbar.css";

const navButtonClasses = "nav-item nav-link mw-nav-list-buttons";
const navButtons = [
	{
		title: "Home",
		key: "homekey",
		link: "/home",
		classes: navButtonClasses
	},
	{
		title: "Gallery",
		key: "gallerykey",
		link: "/gallery",
		classes: navButtonClasses
	},
	{
		title: "About",
		key: "aboutkey",
		link: "/about",
		classes: navButtonClasses
	},
	{
		title: "Contact",
		key: "contactkey",
		link: "/contact",
		classes: navButtonClasses
	}
];

const navFooterLogosClasses = "mw-footer-logos";
const navFooterLogosImagesClasses = "mw-footer-logos-images";
const navFooterLogos = [
	{
		img: fb_logo,
		alt: "fb_logo",
		link: "#"
	},
	{
		img: in_logo,
		alt: "linkedin_logo",
		link: "#"
	},
	{
		img: insta_logo,
		alt: "instagram_logo",
		link: "#"
	}
];

function Navbar(props) {
	return (
		<nav className="navbar" id="mw-nav">
			<img src={mw_logo} className="mw-logo" alt="Mateusz's Logo"></img>
			<div className="navbar-nav" id="mw-nav-list">
				{navButtons.map(button => (
					<a
						key={button.key}
						className={button.classes}
						href={button.link}
					>
						{button.title}
					</a>
				))}
			</div>
			<footer className="mw-footer">
				<section>
					{navFooterLogos.map(button => (
						<Link
							to={button.link}
							className={navFooterLogosClasses}
							key={button.alt}
						>
							<img
								src={button.img}
								alt={button.alt}
								className={navFooterLogosImagesClasses}
							></img>
						</Link>
					))}
				</section>
				<section className="mw-copyright">
					© 2019 Mateusz Wojciechowski all rights reserved
				</section>
			</footer>
		</nav>
	);
}

export default Navbar;
