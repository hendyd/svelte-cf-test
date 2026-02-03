<script lang="ts">
	export let fluid = false;
	export let className = '';

	import { inview } from 'svelte-inview';
</script>

<section
	class="section s-inview {className}"
	use:inview={{ threshold: 0.9 }}
	oninview_enter={(event) => {
		const { node } = event.detail;
		node.classList.add('s-inview-enter');
	}}
>
	<div class={fluid ? 'container-fluid' : 'container'}>
		<slot />
	</div>
</section>
