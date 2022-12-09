import React from 'react'
import styles from './Firefly.module.sass'


interface Props {
	theme: "light" | "dark"
}

const Firefly: React.FC<Props> = (props): JSX.Element => {
	const {theme} = props;
	const count = theme === "light" ? 5 : 15;
	const fireflies: string[] = Array<string>(count).fill("firefly");

	return (
		<>
			{theme === "dark"
				? <>
						{fireflies.map((_: string, index: number) => (
							<div className={styles.firefly} key={index}></div>
						))}
				</>
			: null
			}
		</>
	)
}

export default Firefly
