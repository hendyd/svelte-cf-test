<script lang="ts">
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	import '$styles/components/map.scss';

	let mapContainer: HTMLDivElement;

	onMount(() => {
		const mapboxAccessToken = import.meta.env.VITE_PUBLIC_MAPBOX_API;
		const what3words = import.meta.env.VITE_PUBLIC_MAP_W3W;
		const siteName = import.meta.env.VITE_PUBLIC_SITENAME;
		const address = import.meta.env.VITE_PUBLIC_MAP_ADDRESS;
		mapboxgl.accessToken = mapboxAccessToken;

		let popupHTML = `<div class="map-marker-popup"><h4>${siteName}</h4><p>${address}</p><a href="${what3words}" target="_blank">Get directions</a></div></div>`;

		let lngLat = import.meta.env.VITE_PUBLIC_MAP_LNGLAT.split(',');
		let mapCenter = new mapboxgl.LngLat(lngLat[0], lngLat[1]);

		const map = new mapboxgl.Map({
			container: mapContainer, // container ID
			style: 'mapbox://styles/davidhendy/cmkzjtnes000t01s583a56lef',
			center: mapCenter,
			zoom: 15,
			interactive: false
		});

		let coords = mapCenter;
		new mapboxgl.Marker({
			color: '#ed6da6'
		})
			.setLngLat(coords)
			.setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(popupHTML))
			.addTo(map);

		return () => {
			map.remove(); // clean up on component destroy
		};
	});
</script>

<div id="map" bind:this={mapContainer}></div>
