type Props = {
	children: React.ReactNode
}

export default function Prose({ children }: Props) {
	return <div className="auto-w-prose mx-auto">{children}</div>
}
