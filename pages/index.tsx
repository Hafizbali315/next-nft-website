import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'
import Prose from '../components/Prose'
import Minting from '../components/Minting'
import Faq from '../components/Faq'
import Save from '../components/Save'
import Problems from '../components/Problems'
import topImage from '../public/assets/hot.jpg'
import topImage1 from '../public/assets/p2p.jpg'
import topImage2 from '../public/assets/ku.jpg'

import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
// import dynamic from 'next/dynamic'
import Whats from '../components/Whats'
import Bar from '../components/Bar'
import PadCoin from '../components/PadCoin'

const Home: NextPage = () => {
	return (
		<Layout>
			<Head>
				<title>{process.env.NEXT_PUBLIC_NFT_NAME}</title>
			</Head>

			<div className="top">
				<p className="pt-10 font-bold text-center bg text-8xl">MY BODY MY RIGHTS</p>
				<br></br>
				<br></br>
				<ul className="flex items-center justify-center space-x-4 sup">
					<button type="button" className="px-4 py-2 font-bold bg-red-600 rounded w-100 text-white-500">
						SUPPORT A GIRL TODAY
					</button>
				</ul>
			</div>

			<div className="py-8 font-bold text-center">
				<Prose>
					<Minting />
				</Prose>
			</div>

			<div className="py-8 bg-black">
				<Prose>
					<h1 className="mb-2 text-5xl font-bold text-center">{process.env.NEXT_PUBLIC_NFT_NAME}</h1>

					<p className="text-xl">
						Pad nft is a nft which can be held in your wallet to receive padcoin. Snap shots will be taken of all users holding padnft and
						will be rewarded with padcoins. 3000 pad nft created on blockchain. Hold pad nft to get padcoin. Pad nft empowers women ,help
						provide sanitary pads for rural women and educate girls and women on sanitary pad importance
					</p>
				</Prose>
			</div>

			<div className="py-8 bg-black">
				<Prose>
					<Save />
				</Prose>
			</div>

			<div className="bg-black">
				<Prose>
					<Problems />
				</Prose>
			</div>

			<div className="py-4 bg-black">
				<Prose>
					<Whats />
				</Prose>
			</div>

			<div className="py-4 text-center bg-black">
				<Prose>
					<Bar />
				</Prose>
			</div>

			<div className="py-4 text-center bg-black">
				<Prose>
					<PadCoin />
					<br></br>
					<div className="img align-right">
						<Image alt="image" src={topImage} />
					</div>
					<div className="img1">
						<Image alt="image" src={topImage1} />
					</div>
					<br></br>
					<div className="img2">
						<Image alt="image" src={topImage2} />
					</div>
				</Prose>
			</div>

			<div className="py-8 bg-black">
				<Prose>
					<Faq />
				</Prose>
			</div>

			<div className="py-8">
				<Prose>
					<Roadmap />
				</Prose>
			</div>

			<div className="py-8 bg-black">
				<Prose>
					<Team />
				</Prose>
			</div>
		</Layout>
	)
}

export default Home
