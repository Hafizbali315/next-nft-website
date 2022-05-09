import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { FaTwitter, FaDiscord, FaShip, FaInstagram, FaTelegram } from 'react-icons/fa'

import Blockies from './Blockies'
import ConnectButton from './ConnectButton'
import Container from './Container'
import NextLink from './NextLink'
import { useContractContext } from '../context/Contract'
import { injected } from '../utils/wallet/connectors'
import logo from '../public/assets/logo.jpg'

const ReactTooltip = dynamic(() => import('react-tooltip'), {
	ssr: false,
})

export default function Header() {
	const { activate, setError, chainId, account, active } = useWeb3React()

	const { errMsg, setErrMsg } = useContractContext()

	useEffect(() => {
		async function loadInjectedWallet() {
			const isAuthorized = await injected.isAuthorized()
			if (isAuthorized) {
				await activate(injected)
			}
		}
		if (typeof window.ethereum !== 'undefined') {
			try {
				loadInjectedWallet()
			} catch (error) {
				if (error instanceof Error) setError(error)
			}
		}
	}, [activate, setError])

	useEffect(() => {
		if (active) {
			if (chainId && chainId.toString() !== process.env.NEXT_PUBLIC_NETWORK_ID) {
				setErrMsg(`Change the network to ${process.env.NEXT_PUBLIC_NETWORK_ID}.`)
			} else {
				setErrMsg('')
			}
		} else {
			setErrMsg('')
		}
	}, [active, chainId, setErrMsg])

	return (
		<div className="sticky top-0 z-50">
			<header className="py-2 bg-black border-b">
				<Container>
					<div className="flex items-center justify-between">
						<NextLink href="/" className="text-2xl font-bold text-white">
							<span className="flex items-center">
								<Image src={logo} width="50" height="50" className="rounded-full" alt="image" />
								<span className="hidden ml-2 sm:block">{process.env.NEXT_PUBLIC_NFT_NAME}</span>
							</span>
						</NextLink>

						<div className="flex items-center ml-2 space-x-2 sm:ml-0">
							<ReactTooltip id="header" place="bottom" type="dark" effect="solid" textColor="#e2e8f0" />
							<a
								href="https://mobile.twitter.com/PadNftOfficial"
								aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on Twitter`}
								rel="noopener noreferrer"
								target="_blank"
								data-tip="Twitter"
								data-for="header"
								className="p-2 bg-black rounded-full hover:bg-red-600"
							>
								<FaTwitter />
							</a>
							<a
								href="https://www.instagram.com/padnft/"
								aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on Instagram`}
								rel="noopener noreferrer"
								target="_blank"
								data-tip="instagram"
								data-for="header"
								className="p-2 bg-black rounded-full hover:bg-grey-600"
							>
								<FaInstagram />
							</a>
							<a
								href="https://discord.gg/TzBuS5yZ"
								aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on Discord`}
								rel="noopener noreferrer"
								target="_blank"
								data-tip="discord"
								data-for="header"
								className="p-2 bg-black rounded-full hover:bg-grey-600"
							>
								<FaDiscord />
							</a>
							<a
								href="https://t.me/padnftpadcoin"
								aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on Telegram`}
								rel="noopener noreferrer"
								target="_blank"
								data-tip="telegram"
								data-for="header"
								className="p-2 bg-black rounded-full hover:bg-grey-600"
							>
								<FaTelegram />
							</a>
							<a
								href={process.env.NEXT_PUBLIC_OPENSEA_URL}
								aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on OpenSea`}
								rel="noopener noreferrer"
								target="_blank"
								data-tip="OpenSea"
								data-for="header"
								className="p-2 bg-black rounded-full hover:bg-red-600"
							>
								<FaShip />
							</a>

							{active && account ? (
								<span className="flex items-center p-2 space-x-2 bg-black rounded-full">
									<span>
										<Blockies seed={account.toLowerCase()} className="rounded-full" />
									</span>
									<span>{`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}</span>
								</span>
							) : (
								<ConnectButton />
							)}
						</div>
					</div>
				</Container>
			</header>

			{errMsg && <div className="p-4 text-center bg-red-400">{errMsg}</div>}
		</div>
	)
}
