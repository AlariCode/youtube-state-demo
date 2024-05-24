import styles from "./Filter.module.css";
import { FilterProps } from "./Filter.props";
import { filterByDirectionVariants, filterByTypeVariants } from "./constants";
import { Chip } from "../Chip/Chip";
import Link from 'next/link';

export function Filter({
	courseType,
	courseDirection,
}: FilterProps) {
	return (
		<div className={styles.filter}>
			<div className={styles.row}>
				<h3 className={styles.title}>Тип обучения</h3>
				{filterByTypeVariants.map((variant) => (
					<Link href={{ query: { type: variant.value, dir: courseDirection } }}>
						<Chip
							key={variant.id}
							color={variant.value === courseType ? "primary" : "ghost"}
						>
							{variant.name}
						</Chip>
					</Link>
				))}
			</div>
			<div className={styles.row}>
				<h3 className={styles.title}>Направление</h3>
				{filterByDirectionVariants.map((variant) => (
					<Link href={{ query: { type: courseType, dir: variant.value } }}>
						<Chip
							key={variant.name}
							color={variant.value === courseDirection ? "primary" : "ghost"}
						>
							{variant.name}
						</Chip>
					</Link>
				))}
			</div>
		</div>
	);
}
