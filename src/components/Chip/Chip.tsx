'use client';
import { ChipProps } from './Chip.props';
import styles from './Chip.module.css';
import classNames from 'classnames';

export const Chip = ({
	color = 'primary',
	children,
	className,
	bordered = true,
	...props
}: ChipProps): JSX.Element => {
	return (
		<span
			className={classNames(styles.span, className, {
				[styles.primary]: color == 'primary',
				[styles.ghost]: color == 'ghost',
				[styles.yellow]: color == 'yellow',
				[styles.green]: color == 'green',
				[styles.blue]: color == 'blue',
				[styles.cyan]: color == 'cyan',
				[styles.purple]: color == 'purple',
				[styles.bordered]: bordered,
			})}
			{...props}
		>
			{children}
		</span>
	);
};
