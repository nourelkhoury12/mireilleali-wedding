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

<svelte:head>
	<title>Ali & Mireille Wedding</title>

	<meta
		name="description"
		content="Join Ali & Mireille's wedding on 13 August 2026 at Glamour Garden, Daher Nassar Ilat, Akkar, Lebanon."
	/>

	<meta property="og:type" content="website" />

	<meta
		property="og:title"
		content="Ali & Mireille Wedding"
	/>

	<meta
		property="og:description"
		content="13 August 2026 • 8:00 PM • Glamour Garden, Daher Nassar Ilat, Akkar, Lebanon"
	/>

	<meta
		property="og:image"
		content="https://mireilleali-wedding.vercel.app/invitation.png"
	/>

	<meta
		property="og:url"
		content="https://mireilleali-wedding.vercel.app/"
	/>

	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />

	<meta
		name="twitter:image"
		content="https://mireilleali-wedding.vercel.app/invitation.png"
	/>
</svelte:head>

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