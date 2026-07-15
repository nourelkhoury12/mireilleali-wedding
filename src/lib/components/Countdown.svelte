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

<section class="content bg-primary">

	<p class="heading-5">
		13 August 2026 • 8:00 PM
	</p>

	<h2 class="heading-1">
		Counting Down to Our Special Day
	</h2>

	<p class="heading-4">
		Every moment brings us one step closer to celebrating together.
	</p>

	<div class="countdown-container">

		<div class="countdown-item">
			<h3>{days}</h3>
			<span>Days</span>
		</div>

		<div class="countdown-divider"></div>

		<div class="countdown-item">
			<h3>{hours}</h3>
			<span>Hours</span>
		</div>

		<div class="countdown-divider"></div>

		<div class="countdown-item">
			<h3>{minutes}</h3>
			<span>Minutes</span>
		</div>

		<div class="countdown-divider"></div>

		<div class="countdown-item">
			<h3>{seconds}</h3>
			<span>Seconds</span>
		</div>

	</div>

</section>

