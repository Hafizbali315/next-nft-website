type Props = {
	children: React.ReactNode
}

export default function Prose({ children }: Props) {
	return <div className="px-40 mx-auto min-w-prose">{children}</div>
}
