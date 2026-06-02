<script lang="ts">
	import { BarChart } from 'layerchart';
	import * as Chart from '$lib/components/ui/chart/index.js';

	const data = [
		{
			source: 'Cal Poly',
			compost: 156.72,
			recycle: 868.8 + 12.5,
			landfill: 3046.02,
			other: 0
		},
		{
			source: 'California',
			compost: 9_522_164,
			recycle: 13_201_284 + 9_850_707,
			landfill: 39_970_881,
			other: 389_658 + 2_372_018 + 1_024_820 + 320_219 + 653_256 + 57_600 + 58_852 + 3_005
		}
	];
</script>

<div>
	<span class="text-sm"
		>Cal Poly 2024 (<a
			href="https://afd.calpoly.edu/sustainability/campus-action/zero-waste/composting-recycling.php"
			rel="external"
			target="_blank">source</a
		>) v.s. California 2020 (<a
			href="https://www2.calrecycle.ca.gov/Docs/Publications/Details/1706"
			rel="external"
			target="_blank">source</a
		>), in tons</span
	>
	<Chart.Container config={{}} class="h-64 w-full px-4 md:px-16">
		<BarChart
			{data}
			y="source"
			series={[
				{ key: 'compost', label: 'Compost', color: '#154734' },
				{ key: 'recycle', label: 'Recycled', color: '#4895ef' },
				{ key: 'other', label: 'Other', color: '#cccccc' },
				{ key: 'landfill', label: 'Landfill', color: '#666666' }
			]}
			orientation="horizontal"
			seriesLayout="stackExpand"
			props={{
				xAxis: { format: 'percentRound' },
				yAxis: { format: 'none' },
				tooltip: {
					header: { format: 'metric' }
				},
				bars: {
					strokeWidth: 0,
					radius: 10
				}
			}}
			stackPadding={3}
			legend
		>
			{#snippet tooltip()}
				<Chart.Tooltip hideLabel />
			{/snippet}
		</BarChart>
	</Chart.Container>
</div>
