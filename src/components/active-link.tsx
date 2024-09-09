import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

interface ActiveLinkProps {
	link: string;
	children: React.ReactNode;
	className?: string;
	containerClassName?: string;
}

const ActiveLink = ({
	children,
	link,
	className,
	containerClassName,
}: ActiveLinkProps) => {
	return (
		<div className={cn('flex w-full', containerClassName)}>
			<NavLink
				to={link}
				className={({ isActive, isPending }) =>
					cn(
						'px-2 h-10 w-full items-center flex transition-all justify-between rounded-lg hover:bg-gray-100',
						isActive ? 'text-primary bg-primary/10 ' : '',
						isPending ? 'text-primary' : '',
						className
					)
				}>
				{children}
			</NavLink>
		</div>
	);
};

export default ActiveLink;
