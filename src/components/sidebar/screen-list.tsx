import { Command, Plus } from 'lucide-react';
import ActiveLink from '../active-link';
import { Button } from '../ui/button';
import {
	Book,
	Briefcase,
	BusFront,
	CalendarCheck,
	Home,
	UserRound,
	Utensils,
} from 'lucide-react';
import { Badge } from '../ui/badge';

export default function ScreenList() {
	return (
		<div className="flex-1">
			<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
				{Lists.map((route, index) => (
					<ActiveLink link={route.link} key={index} className="h-8 lg:h-10">
						<div className="flex gap-x-2">
							<route.icon className="h-5 w-5 mr-2" />
							{route.label}
						</div>
						<Badge className="bg-gray-100 text-black rounded-full">0</Badge>
					</ActiveLink>
				))}
			</nav>
			<div className="my-4 px-2 lg:px-4">
				<Button
					variant={'outline'}
					className="flex justify-between w-full border-border bg-gray-200 dark:bg-gray-800 rounded-3xl items-center">
					<div className="flex items-center">
						<Plus className="h-4 w-4 mr-2" />
						<span>Create new list</span>
					</div>
					<div className="flex gap-x-1">
						<span className="rounded-full border border-gray-300 flex items-center justify-center p-1 bg-gray-100 text-gray-600 text-xs">
							<Command className="w-4 h-4" />
						</span>
						<span className="rounded-full border border-gray-300 flex items-center justify-center p-1 px-2 bg-gray-100 text-gray-600 text-xs">
							L
						</span>
					</div>
				</Button>
			</div>
		</div>
	);
}

const Lists = [
	{
		id: 1,
		label: 'Home',
		link: '/',
		icon: Home,
	},
	{
		id: 2,
		label: 'Completed',
		link: '/completed',
		icon: CalendarCheck,
	},
	{
		id: 3,
		label: 'Personal',
		link: '/personal',
		icon: UserRound,
	},
	{
		id: 4,
		label: 'Work',
		link: '/work',
		icon: Briefcase,
	},
	{
		id: 5,
		label: 'Diet',
		link: '/diet',
		icon: Utensils,
	},
	{
		id: 6,
		label: 'List of Books',
		link: '/list-of-books',
		icon: Book,
	},
	{
		id: 7,
		label: 'Road trip list',
		link: '/road-trip-list',
		icon: BusFront,
	},
];
