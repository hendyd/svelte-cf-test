<script lang="ts">
	import { anchors } from '$lib/data/anchors';
	import '$styles/components/anchor-navigation.scss';

	const scrollToAnchor = (e: MouseEvent) => {
		e.preventDefault();
		const element = e.target as HTMLElement;
		const target: string = element.dataset.target ?? '';
		const targetEl = document.getElementById(target);
		targetEl?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};
</script>

<nav>
	<ul class="nav">
		{#each Object.entries(anchors) as [key, value]}
			<li class="nav-item">
				<button onclick={scrollToAnchor} data-target={key} class="nav-link">{value}</button>
			</li>
		{/each}
	</ul>
</nav>
