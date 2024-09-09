import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Command, Plus } from 'lucide-react';

export default function Groups() {
	return (
		<div className="space-y-6 px-2 lg:px-4 flex-1">
			<div className="space-y-3">
				<h3 className="text-xl ">Group</h3>
				<div className="grid grid-cols-2 gap-x-2">
					{Array(2)
						.fill('')
						.map((_, i) => (
							<div key={i} className="space-y-2 ">
								<div className="bg-gray-300 dark:bg-gray-800 w-full h-[6rem] rounded flex justify-center items-center">
									<div className="w-10 h-10 relative">
										{['A', 'B', 'H', 'R', 'O'].map((a, i) => (
											<Avatar
												key={i}
												className={cn(
													'absolute w-8 h-8  z-30 ',
													i == 0
														? '-top-3 -left-3'
														: i == 1
														? '-top-3 left-4'
														: i == 2
														? 'top-4 -left-7'
														: i == 3
														? 'top-4 left-0'
														: 'top-4 left-7'
												)}>
												<AvatarFallback className="text-xs dark:bg-black/40">
													C{a}
												</AvatarFallback>
											</Avatar>
										))}
									</div>
								</div>
								<div className="grid gap-y-1">
									<h3 className="text-xs">Modal Project</h3>
									<span className="text-xs">5 People</span>
								</div>
							</div>
						))}
				</div>
			</div>
			<div className=" ">
				<Button
					variant={'outline'}
					className="flex justify-between w-full border-border bg-gray-200 dark:bg-gray-800 rounded-3xl items-center">
					<div className="flex items-center">
						<Plus className="h-4 w-4 mr-2" />
						<span>Create new group</span>
					</div>
					<div className="flex gap-x-1">
						<span className="rounded-full border border-gray-300 flex items-center justify-center p-1 bg-gray-100 text-gray-600 text-xs">
							<Command className="w-4 h-4" />
						</span>
						<span className="rounded-full border border-gray-300 flex items-center justify-center p-1 px-2 bg-gray-100 text-gray-600 text-xs">
							G
						</span>
					</div>
				</Button>
			</div>
		</div>
	);
}
