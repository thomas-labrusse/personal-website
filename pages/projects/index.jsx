import React from 'react'
import Head from 'next/head'
import Projects from '../../components/projects/Projects'

export const PROJECTS = [
	{
		id: '1',
		name: 'React Hooks',
		slug: 'react-hooks',
		shortDescription:
			'Explaining how and when using React hooks, with visual examples.',
		thumbnail: '../images/react-hooks-thumbnail.png',
		image: '../images/react-hooks-300h.png',
		description:
			'The React framework and its team is noticeably tilting towards more use of functional components and hooks. The React team is even rethinking and rewriting its documentation, currently (2022) in beta. This website is the continuation of that effort to help developpers understand React, and provides practical / visual examples to do so. The website itself is a NextJS hosted with Vercel.',
		stack: ['NextJS', 'React', 'Vercel'],
		github: 'https://github.com/thomas-labrusse/react-inception',
		url: 'https://react-fishing-rod.vercel.app/',
	},
	{
		id: '2',
		name: 'Races Medal NFTs',
		slug: 'solana-mint-dapp',
		shortDescription:
			'Low carbon footprint NFTs that act as digital medals only races finishers can redeem.',
		thumbnail: '../images/minter-thumbnail.png',
		image: '../images/minter-300h.png',
		description:
			'Web3 application allowing races organizers to offer digital medals (NFTs) to finishers. The NFTs are stored on the Solana blockchain, a proof of history / proof of stake blockchain with very low carbon footprint impact. Finishers can mint their medal NFT directly by connecting their Phantom wallet to the App. A "medal cabinet" page allows medal owners to display all their medals linked to their connected wallet. App developed with React, using solana Metaplex NFT standard and Candy Machine v2 for the mint. Designed on Figma. A first working version was made on the Ethereum blockchain using a Solidity smart contract library for NFTs, Mocha test framework and Chai assertions library. Moved to Solana to limit significantly the environmental impact of transactions.',
		stack: [
			'React',
			'web3',
			'solana-blockchain',
			'scss',
			'figma',
			'mocha',
			'chai',
		],
		github: 'https://github.com/thomas-labrusse/dapp-solana-minter',
		url: 'https://finish-lines.netlify.app/',
	},
	{
		id: '3',
		slug: 'personal-website',
		name: 'Personal Website',
		shortDescription: 'Portfolio of personal projects, powered by NextJS.',
		thumbnail: '../images/personal-website-thumbnail.png',
		image: '../images/personal-website-300h.png',
		description:
			'This personal website project was a good opportunity to learn the basics of NextJS, taking advantage of its page / route feature, SEO friendliness and ease of deployment.',
		stack: ['NextJS', 'React', 'Vercel', 'figma'],
		github: 'https://github.com/thomas-labrusse/personal-website',
		url: 'https://www.thomaslabrusse.com/',
	},
	{
		id: '4',
		slug: 'chrome-extension',
		name: 'OpenSea Rarity Chrome Extension',
		shortDescription:
			'Calculate and display NFT collections rarity directly on page.',
		thumbnail: '../images/chrome-extension-thumbnail.png',
		image: '../images/chrome-extension.gif',
		description:
			"Chrome extension written in React, database on MongoDB with a server ran locally . Displays NFT collection's item's rarity rank directly on the 'item' and 'activity' pages on OpenSea. Any ERC721 compliant NFT collection can be added to the database by inputting the corresponding smart contract hash. URIs of NFT Metadata are fetched by querying the blockchain using the ethers library. Individual NFT ranks are calculated by retrieving all items in the collection, processing all existing traits and rating them. Each individual item is then stored in a MongoDB database. Using a mutation observer, HTML elements with item's rarity ranking are injected directly into the DOM.",
		stack: ['React', 'ethers', 'NodeJS', 'Express', 'MongoDB'],
		github: 'https://github.com/thomas-labrusse/chrome-extension-os',
	},
	{
		id: '5',
		slug: 'slack-bot',
		name: 'Attendance Slack Bot',
		shortDescription:
			'Small Slack Bot allowing coworking members to flag their presence.',
		thumbnail: '../images/slack-bot-thumbnail.png',
		image: '../images/slack-bot.gif',
		description:
			'Designed for a coworking space who needed to track members presence every day. This small slack bot sends a message to a dedicated channel, on a daily basis, to collect users input. When users notify their presence, the message updates to show their name. Written in Javascript using Bolt (Slack SDK). Deployed on AWS Lambda. A CRON job is setup to send the message daily, using AWS/Serverless scheduling functionnality.',
		stack: ['Javascript', 'Bolt', 'AWS Lambda', 'Serverless'],
		github: 'https://github.com/thomas-labrusse/slack-bot-whos-coming',
	},
]

const ProjectsPage = () => {
	return (
		<>
			<Head>
				<title>Projects</title>
				<meta
					name='description'
					content="Selected projects I've been working on : chrome extension, slack bot, solana mint dapp. Using React, NodeJS, Express, and more..."
				/>
			</Head>
			<Projects projects={PROJECTS} />
		</>
	)
}

export default ProjectsPage
