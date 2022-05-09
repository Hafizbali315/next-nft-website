import { useWeb3React } from '@web3-react/core'
import { FaWallet } from 'react-icons/fa'

import { useContractContext } from '../context/Contract'
import { injected } from '../utils/wallet/connectors'

export default function ConnectButton() {
	const { activate, setError, chainId, error } = useWeb3React()

	const { isConnecting, setErrMsg, setIsConnecting } = useContractContext()

	async function connectMetaMask() {
		if (typeof window.ethereum !== 'undefined') {
			setIsConnecting(true)
			try {
				await activate(injected)
				setIsConnecting(false)
				if (chainId && chainId.toString() !== process.env.NEXT_PUBLIC_NETWORK_ID) {
					setErrMsg(`Change the network to ${process.env.NEXT_PUBLIC_NETWORK_ID}.`)
				}
			} catch (error) {
				if (error instanceof Error) setError(error)
				setIsConnecting(false)
			}
		} else {
			setErrMsg('Please install MetaMask.')
		}
	}

	return (
		<div className="flex justify-center">
			{isConnecting ? (
				<button
					type="button"
					className="flex items-center justify-center w-10 px-4 py-2 bg-black border-2 rounded-full cursor-not-allowed border-white-600"
					disabled
				>
					<svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
					Connecting
				</button>
			) : (
				<button
					type="button"
					className="flex items-center justify-center w-40 px-4 py-2 space-x-2 bg-black border-2 border-green-600 rounded-full hover:border-white"
					onClick={connectMetaMask}
				>
					<FaWallet />
					<span>Connect</span>
				</button>
			)}
		</div>
	)
}
