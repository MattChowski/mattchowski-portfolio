import React, { Component } from "react";
import image_01 from "../images/image_01.jpg";
import image_02 from "../images/image_02.png";
import image_03 from "../images/image_03.jpg";
import image_04 from "../images/image_04.png";
import image_05 from "../images/image_05.png";
import image_06 from "../images/image_06.jpg";
import image_07 from "../images/image_07.png";
import image_08 from "../images/image_08.jpg";
import image_09 from "../images/image_09.png";
import image_10 from "../images/image_10.jpg";
import image_11 from "../images/image_11.png";
import image_12 from "../images/image_12.png";

import "./Gallery.css";

const images = [
	{
		imageName: "Crystal",
		imageLink: image_01
    },
    {
		imageName: "Subway",
		imageLink: image_02
    },
    {
		imageName: "Cutie",
		imageLink: image_03
    },
    {
		imageName: "Donut",
		imageLink: image_04
    },
    {
		imageName: "FireCutie",
		imageLink: image_05
    },
    {
		imageName: "Box Of Noise",
		imageLink: image_06
    },
    {
		imageName: "Deagle",
		imageLink: image_07
    },
    {
		imageName: "Tokyo",
		imageLink: image_08
    },
    {
		imageName: "KamojiCats",
		imageLink: image_09
    },
    {
		imageName: "CineFire",
		imageLink: image_10
    },
    {
		imageName: "LowpolyWolf",
		imageLink: image_11
    },
    {
		imageName: "Landscape",
		imageLink: image_12
	},
];

class Gallery extends Component {
	render() {
		return (
			<section className={this.props.className}>
				{images.map(image => (
					<img
						src={image.imageLink}
						key={image.imageName}
						alt={image.imageName}
                        className="mw-gallery-item"
					></img>
				))}
			</section>
		);
	}
}

export default Gallery;
