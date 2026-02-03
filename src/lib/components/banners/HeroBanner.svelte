<script lang="ts">
	export let type: string = 'image';
	export let title: string = '';
	export let content: string = '';
	export let media: string = '';
	export let linkText: string = '';
	export let linkUrl: string = '';

	import '$styles/components/banner.scss';
	import { Section } from '$lib/components';
</script>

{#if title || media || linkText || linkUrl}
	<div class="banner">
		<div class="media--wrapper">
			{#if type === 'image' && media}
				<enhanced:img src={media} alt={title} class="media" />
			{/if}

			{#if type === 'video' && media}
				<video class="media" controls muted loop>
					<source src={media} type="video/mp4" />
				</video>
			{/if}
		</div>

		{#if title || content || linkText || linkUrl}
			<Section className="banner__overlay">
				<div class="row">
					<div class="col-12 col-md-9">
						{#if title}
							<h1>{title}</h1>
						{/if}

						{#if content}
							<div class="content">
								{@html content}
							</div>
						{/if}

						{#if linkText && linkUrl}
							<a href={linkUrl} class="btn btn-primary">{linkText}</a>
						{/if}
					</div>
				</div>
			</Section>
		{/if}
	</div>
{/if}
