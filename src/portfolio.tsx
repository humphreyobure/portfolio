import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Obure',
	title: 'Hello I\'m Humphrey',
	subTitle: emoji("System Administrator ❤"),
	role: "Software Engineer",
	resumeLink: "Your resume link... google drive or something else",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/humphreyobure',
	linkedin: 'https://www.linkedin.com/in/humphrey-tom-b0b092156/',
	email: 'humphreytom14@gmail.com',
	facebook: 'https://www.facebook.com/humphrey.tom.94',
	twitter: "https://twitter.com/humphreyobure",
	instagram: "https://www.instagram.com/humphreyobure001/",
	medium: 'https://medium.com/@humphreytom14',
	stackoverflow: 'https://stackoverflow.com/users/14770426/humphrey-tom'
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "My Skills",
	describeSkills: [
		emoji("✔ Versatile Web Developer with a number of technologies ranging from PHP to Python to JavaScript."),
		emoji("✔ Highly motivated Blockchain Developer with extensive knowledge in Ethereum Blockchain software development lifecycle and knowledge with Solidity programming language. Developed many projects with Land Registry with Blockchain as the key achievement."),
		emoji("✔ Skilled JavaScript developer, using Vanilla JavaScript; Uses Nodejs in Backend part. "),
		emoji("✔ Innovative Machine Learning Programmer with wide knowledge in Deep Learning using Tensorflow framework. Undertaken a number of projects under the same."),
		emoji("✔ Inventive network engineer with wide knowledge in installation and configuration of network equipments e.g Routers, switches, hubs, PoE, able crimping, wifi installation e.t.c"),
		emoji("✔ Highly Skilled System Administrator with knowledge in working with Windows Server. Has skills in Database Server; both SQL and NoSQL(MongoDB)."),
		emoji("✔ Advanced Python Developer, reserched and worked on  a number of projects under the sam."),
		emoji("✔ Highly Creative React Developer; Engaged in a project on MERN(MongoDB, ExpressJS, React, NodeJS)."),
		emoji("✔ Creative Angular Developer. Engaged in a number of projects under the same."),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-html5", text: "Web", proficiency: 80},
		{fontAwesome: "fas fa-link", text: "Block chain", proficiency: 70},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		{fontAwesome: "fas fa-robot", text: "M.L", proficiency: 60},
		{fontAwesome: "fas fa-network-wired", text: "Network Eng.", proficiency: 75},
		{fontAwesome: "fas fa-server", text: "System Adm.", proficiency: 70},
		{fontAwesome: "fab fa-python", text: "Python", proficiency: 60},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 80},
		{fontAwesome: "fab fa-angular", text: "Angular", proficiency: 70}
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "April 2019 - August 2019",
			company: "Kenya Institute of Professional Studies (KIPS)",
			role: "Intern System Administrator",
		},
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "Programming Projects",
	lists: [
		{
			title: "Land Registry Using Blockchain",
			desc: "A project based in Ethereum Smart Contract for securely storing land records. Blockchain developed by Solidity",
			url: "#"
		},
		{
			title: "E-Commerce",
			desc: "An online Shop based on React and Redux",
			url: "https://humphreyobure.github.io/humphy-shop/"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "So far so good",
	lists: [
		{
			img: require("./assets/your photo.JPG"),
			alt: "Degree",
			title: "South Eastern Kenya University",
			desc: "This is where I was introduced to the software development world while pursuing my Degree. Not yet Graduated"
		},
		{
			img: require("./assets/your photo.JPG"),
			alt: "Certicicate",
			title: "Certificate in Micro-Computers and Applications",
			desc: "Studied Microsoft publisher, word, excel, access, powerpoint, Internet and Mail. Also an introduction to Micro-computers. Awarded a Distinction(76 Points)."
		},
	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: false
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "Reach me out!",
	introduce: emoji("+254799451713❤"),
	view: true
}