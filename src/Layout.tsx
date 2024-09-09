import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from './components/sidebar';
import { Outlet } from 'react-router-dom';
import { ModeToggle } from './components/theme/mode-toggle';

export default function Layout() {
	return (
		<div className="grid min-h-screen w-full md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
			<Sidebar />
			<div className="flex flex-col">
				<header className="flex h-14  md:hidden items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon" className="shrink-0">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="flex flex-col">
							<Sidebar />
						</SheetContent>
					</Sheet>
				</header>
				<main className="flex-1 w-full bg-muted/40">
					<Outlet />
					<div className="fixed right-6 bottom-8">
						<ModeToggle />
					</div>
				</main>
			</div>
		</div>
	);
}
