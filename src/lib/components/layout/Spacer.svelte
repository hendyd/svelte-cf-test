<script lang="ts">
	export let heightSm: number = 0;
	export let heightMd: number = 0;
	export let heightLg: number = 0;
	export let heightXl: number = 0;
	export let heightXxl: number = 0;
	export let heightHd: number = 0;
	export let height4k: number = 0;
</script>

<div class="spacer">
	<div class="d-md-none" style="height: {heightSm}px"></div>
	<div class="d-none d-md-block d-lg-none" style="height: {heightMd}px"></div>
	<div class="d-none d-lg-block d-xl-none" style="height: {heightLg}px"></div>
	<div class="d-none d-xl-block d-xxl-none" style="height: {heightXl}px"></div>
	<div class="d-none d-xxl-block d-xxxl-none" style="height: {heightXxl}px"></div>
	<div class="d-none d-hd-block d-4k-none" style="height: {heightHd}px"></div>
	<div class="d-none d-4k-block" style="height: {height4k}px"></div>
</div>
