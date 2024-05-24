import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ChipProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	color?: 'primary' | 'ghost' | 'yellow' | 'green' | 'blue' | 'cyan' | 'purple';
	children: ReactNode;
	bordered?: boolean;
}
