import { Logout } from '../logout';
import ScreenList from './screen-list';
import Groups from './groups';

const Sidebar = () => {
	return (
		<div className="hidden border-r bg-muted/40 md:block">
			<div className="flex h-full max-h-screen flex-col gap-y-2">
				<div className="flex h-16 items-center px-2 py-4 lg:px-4">
					<h1 className="text-xl">Task Manager</h1>
				</div>
				<ScreenList />
				<Groups />
				<div className="mt-auto p-2 pb-6">
					<Logout />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
