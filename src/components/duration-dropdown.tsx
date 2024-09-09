'use client';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const DurationDropdown = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [duration, setDuration] = useState(
		searchParams.get('duration') ?? 'today'
	);
	function handleDurationChange({ d }: { d: string }) {
		setDuration(d);
		setSearchParams(d);
	}
	return (
		<Select
			value={duration}
			onValueChange={(value) => handleDurationChange({ d: value })}>
			<SelectTrigger className="w-[170px] py-3 px-3 ">
				<SelectValue placeholder="Select a duration" className="text-sm" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem className="text-sm" value="today">
						Today
					</SelectItem>
					<SelectItem className="text-sm" value="week">
						This week
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default DurationDropdown;
