<script lang="ts">
	import { onMount } from 'svelte';

	const weddingDate = new Date(2026, 7, 13, 20, 0, 0);

	let days = $state('00');
	let hours = $state('00');
	let minutes = $state('00');
	let seconds = $state('00');

	function format(value: number) {
		return value.toString().padStart(2, '0');
	}

	function updateCountdown() {
		const now = Date.now();
		const distance = weddingDate.getTime() - now;

		if (distance <= 0) {
			days = '00';
			hours = '00';
			minutes = '00';
			seconds = '00';
			return;
		}

		days = format(Math.floor(distance / (1000 * 60 * 60 * 24)));
		hours = format(Math.floor((distance / (1000 * 60 * 60)) % 24));
		minutes = format(Math.floor((distance / (1000 * 60)) % 60));
		seconds = format(Math.floor((distance / 1000) % 60));
	}

	onMount(() => {
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	});
</script>

<section class="content text-center bg-primary">

	<p class="heading-5">
		13 August 2026 • 8:00 PM
	</p>

	<h2 class="heading-1">
		Counting Down to Our Special Day
	</h2>

	<p class="heading-4">
		Every moment brings us one step closer to celebrating together.
	</p>

	<div class="contdown-container flex justify-center items-center gap-9 flex-wrap">
		<div class="min-w-[120px]">
			<h3 class="heading-3">{days}</h3>
			<span class="heading-2">Days</span>
		</div>

		<div class="countdown-container max-md:grid max-md:grid-cols-2 max-md:gap-8"></div>

		<div>
			<h3 class="heading-3">{hours}</h3>
			<span class="heading-2">Hours</span>
		</div>

		<div class="countdown-container max-md:grid max-md:grid-cols-2 max-md:gap-8"></div>

		<div>
			<h3 class="heading-3">{minutes}</h3>
			<span class="heading-2">Minutes</span>
		</div>

		<div class="countdown-container max-md:grid max-md:grid-cols-2 max-md:gap-8"></div>

		<div>
			<h3 class="heading-3">{seconds}</h3>
			<span class="heading-2">Seconds</span>
		</div>

	</div>

</section>

