import { COURSES } from "@/app/courses";
import { CatalogProps } from "./Catalog.props";
import styles from "./Catalog.module.css";

export function Catalog({ courseType, courseDirection }: CatalogProps) {
	return (
		<div className={styles.catalog}>
			{COURSES.filter(
				(c) => c.type === courseType && c.direction === courseDirection,
			).map((c) => (
				<div key={c.id} className={styles.item}>
					{c.name}
				</div>
			))}
		</div>
	);
}
