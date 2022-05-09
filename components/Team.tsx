import Image from 'next/image'

import Creator from '../public/assets/btc.png'

export default function Team() {
	return (
		<div className="text-center">
			<h2 className="mb-4 text-2xl text-red-100 ">DONATE FOR A GIRL</h2>
			<p className="mb-2 text-xl">BTC Address : 16hCkJmVYGRZ2vsaddJsJHADVGsJtUnK7q (BTC Network)</p>
			<p className="mb-2 text-xl">ETH Address : 0x9e109b3ea547b3bb8a0f82333eb774925afe27ca (ERC20 Network)</p>
			<p className="mb-2 text-xl">BNB Address : 0x9e109b3ea547b3bb8a0f82333eb774925afe27ca (BEP20 Network)</p>

			<p>
				@NFTPAD
				<br></br>
				<br></br>
			</p>
		</div>
	)
}
