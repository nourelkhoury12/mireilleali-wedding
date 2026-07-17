<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CountDown from '$lib/components/Countdown.svelte'
	import Venue from '$lib/components/Venue.svelte';
	import RSVP from '$lib/components/RSVP.svelte';
	import MarriageList from '$lib/components/MarriageList.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import { onMount } from 'svelte';

	let showButton = $state(false);
	let loading = $state(true);
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		const timer = setTimeout(() => {
			loading = false;
		}, 4000);

		const handleScroll = () => {
			showButton = window.scrollY > 300;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			clearTimeout(timer);
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if loading}
	<Loader />
{:else}
	<Hero />
	<CountDown />
	<Venue />
	<RSVP />
	<MarriageList />
	<Footer />

	{#if showButton}
		<button class="back-to-top" onclick={scrollToTop}>
			↑
		</button>
	{/if}
{/if}

{#if showButton}
	<button class="back-to-top" onclick={scrollToTop}>
		↑
	</button>
{/if}