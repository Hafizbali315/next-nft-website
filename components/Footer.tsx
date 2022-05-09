import dynamic from 'next/dynamic'
import { FaHome, FaTwitter, FaDiscord, FaShip } from 'react-icons/fa'

import Container from './Container'
import NextLink from './NextLink'

const ReactTooltip = dynamic(() => import('react-tooltip'), {
	ssr: false,
})

const getCurrentYear = () => new Date().getFullYear()

export default function Footer() {
	return (
		<footer className="border-t">
			<Container>
				<div className="flex flex-col-reverse items-center justify-between py-8 sm:flex-row">
					<div>
						© {getCurrentYear()} {process.env.NEXT_PUBLIC_NFT_NAME}
					</div>

					<div className="flex items-center mb-4 space-x-2 sm:mb-0">
						<ReactTooltip id="footer" place="top" type="dark" effect="solid" textColor="#e2e8f0" />
						<NextLink href="/" aria-label="Home" data-tip="Home" data-for="footer" className="p-2 bg-black rounded-full hover:bg-red-600">
							<FaHome />
						</NextLink>
						<a
							href="https://mobile.twitter.com/PadNftOfficial"
							aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on Twitter`}
							rel="noopener noreferrer"
							target="_blank"
							data-tip="Twitter"
							data-for="footer"
							className="p-2 bg-black rounded-full hover:bg-red-600"
						>
							<FaTwitter />
						</a>

						<a
							href={process.env.NEXT_PUBLIC_OPENSEA_URL}
							aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on OpenSea`}
							rel="noopener noreferrer"
							target="_blank"
							data-tip="OpenSea"
							data-for="footer"
							className="p-2 bg-black rounded-full hover:bg-red-600"
						>
							<FaShip />
						</a>
					</div>
				</div>
			</Container>
		</footer>
	)
}
