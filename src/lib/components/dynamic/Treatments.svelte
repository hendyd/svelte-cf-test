<script lang="ts">
	export let title: string = '';

	import { inview } from 'svelte-inview';
	import { treatments, categories } from '$lib/data/treatments';
	import type { CategoryKey, Treatment } from '$lib/data/treatments';
	const treatmentsByCategory = Object.keys(categories).reduce(
		(acc, key) => {
			acc[key as CategoryKey] = treatments.filter((t) => t.category === key && t.active);
			return acc;
		},
		{} as Record<CategoryKey, Treatment[]>
	);

	const categoryEntries = Object.entries(categories) as [
		CategoryKey,
		(typeof categories)[CategoryKey]
	][];

	const formatPrice = (price: number) => `£${price.toFixed(2)}`;
</script>

<section class="treatments">
	<div class="container">
		<div class="row g-4">
			<div class="col-12">
				<h2 class="mb-0">{title}</h2>
			</div>
			{#if Object.entries(categories).length > 0}
				<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
					{#each categoryEntries as [key, category]}
						{#if treatmentsByCategory[key]?.length}
							<div
								class="col"
								use:inview={{ threshold: 0.9 }}
								oninview_enter={(event) => {
									const { node } = event.detail;
									node.classList.add('s-inview-enter');
								}}
							>
								<div class="card">
									<div class="card-body">
										<h4 class="card-title">{category.label}</h4>
										<ul class="list-unstyled">
											{#each treatmentsByCategory[key] as treatment}
												<li>{treatment.name} – {formatPrice(treatment.price)}</li>
											{/each}
										</ul>
									</div>
								</div>
							</div>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>
