<script lang="ts">
	export let title: string = '';
	export let content: string = '';
	export let classes: string[] = ['s-inview'];
	export let fluid = false;
	import { Section } from '$lib/components';
</script>

<Section className={['content', ...classes].join(' ')} {fluid}>
	<div class="row">
		<div class="col-12">
			{#if title}
				<h2>{title}</h2>
			{/if}
			{@html content}
		</div>
	</div>
</Section>
