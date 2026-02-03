<script lang="ts">
	export let mediaSrc: string = '';
	export let alt: string = '';
	export let linkUrl: string = '';

	import '$styles/components/advert.scss';
	import { Section } from '$lib/components';
</script>

<Section className="advert">
	<div class="row">
		<div class="col-12 d-flex justify-content-center">
			<a href={linkUrl} target="_blank" aria-label={alt}>
				<enhanced:img src={mediaSrc} {alt} class="img-fluid"></enhanced:img>
			</a>
		</div>
	</div>
</Section>
