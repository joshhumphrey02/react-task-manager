import { cn } from '@/lib/utils';

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
			<a
				href={link}
				className={cn(
					'hover:bg-gray-50 py-2 px-3 transition-all flex-1 flex items-center justify-start space-x-2',
					className
				)}>
				{children}
			</a>
		</div>
	);
};

export default ActiveLink;
