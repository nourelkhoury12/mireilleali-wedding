<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import CountDown from '$lib/components/Countdown.svelte'
	import Venue from '$lib/components/Venue.svelte';
	import RSVP from '$lib/components/RSVP.svelte';
	import MarriageList from '$lib/components/MarriageList.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { onMount } from 'svelte';

	let showButton = $state(false);

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		const handleScroll = () => {
			showButton = window.scrollY > 300;
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<Hero />
<CountDown/>
<Venue />
<RSVP />
<MarriageList />
<Footer />

{#if showButton}
	<button class="back-to-top" onclick={scrollToTop}>
		↑
	</button>
{/if}