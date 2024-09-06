import {
	Book,
	Briefcase,
	BusFront,
	CalendarCheck,
	Home,
	UserRound,
	Utensils,
} from 'lucide-react';
import ActiveLink from './active-link';

const Sidebar = () => {
	return (
		<div className="px-4 py-8 flex flex-col space-y-4 bg-white shadow">
			<div>
				<h1 className="text-xl md:text-2xl font-bold">Task Manager</h1>
			</div>
			<div className="flex flex-col space-y-1">
				{SidebarLinks.map((link) => (
					<ActiveLink key={link.id} link={link.link}>
						<link.icon className="w-5 h-5" />
						<span className="text-sm font-medium">{link.label}</span>
					</ActiveLink>
				))}
			</div>
		</div>
	);
};

export default Sidebar;

const SidebarLinks = [
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
