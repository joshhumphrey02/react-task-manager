import { EllipsisVertical, Clock2 } from 'lucide-react';
import { Input } from './ui/input';

export default function Task() {
	return (
		<div className=" bg-card text-card-foreground  md:h-10 py-2 md:py-1 rounded-md px-2 shadow">
			<div className="flex space-x-3 flex-col md:flex-row h-full items-center">
				<div className=" flex-1 flex space-x-3 items-center">
					<Input type="checkbox" className="w-4 h-4 rounded-2xl" />
					<p className="flex-1 text-sm font-bold">
						Keep Coding, it will pay soon!
					</p>
				</div>
				<div className="flex space-x-3">
					<div className="flex items-center bg-gray-200 rounded-md p-1 px-2">
						<Clock2 className="w-4 h-4 mr-2 text-gray-600" />
						<span className="text-xs text-gray-600">08:00 - 10:30</span>
					</div>
					<div className="hidden md:flex bg-gray-200 rounded-md p-1 justify-center">
						<EllipsisVertical className="w-4 h-4 text-gray-600" />
					</div>
				</div>
			</div>
		</div>
	);
}
