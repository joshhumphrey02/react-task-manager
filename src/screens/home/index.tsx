import DurationDropdown from '@/components/duration-dropdown';
import Task from '@/components/task';
import { Button } from '@/components/ui/button';
import { Command, Menu, Plus } from 'lucide-react';

function Home() {
	return (
		<>
			<div className=" flex-col relative">
				<div className="flex-1 space-y-6 md:space-y-12 p-6 sm:p-12 md:p-20 pt-12 md:pt-16">
					<div className="flex flex-col md:flex-row items-center justify-between space-y-6">
						<div className="flex flex-col space-y-2 self-start">
							<h2 className="text-2xl font-bold tracking-tight">
								Good Morning, Humphrey!
							</h2>
							<span>Today, Wed 6 July 2024</span>
						</div>
						<div className="flex gap-x-3 items-center">
							<DurationDropdown />
							<div className="hidden md:flex">
								<Menu />
							</div>
						</div>
					</div>
					<div className="space-y-2">
						{Array(6)
							.fill('')
							.map((_, i) => (
								<Task key={i} />
							))}
					</div>
				</div>
				<div className=" fixed bottom-4 left-4 w-screen">
					<Button
						variant={'outline'}
						className="flex justify-between mx-auto text-white px-4 h-12 md:w-[24rem] border-border space-x-8 bg-black rounded-3xl items-center">
						<div className="flex items-center">
							<Plus className="h-4 w-4 mr-2" />
							<span>Create new task</span>
						</div>
						<div className="flex gap-x-1">
							<span className="rounded-full border border-gray-800 flex items-center justify-center p-1 bg-gray-800 text-gray-200 text-xs">
								<Command className="w-4 h-4" />
							</span>
							<span className="rounded-full border border-gray-800 flex items-center justify-center p-1 px-2 bg-gray-800 text-gray-200 text-xs">
								N
							</span>
						</div>
					</Button>
				</div>
			</div>
		</>
	);
}

export default Home;
