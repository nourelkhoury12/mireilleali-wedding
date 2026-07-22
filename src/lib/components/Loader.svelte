<script lang="ts">
    import Image from "$lib/assets/logob.png"
	const text = "Developed by bluProject...";

	let visible = $state("");

	$effect(() => {
		let i = 0;

		const interval = setInterval(() => {
			if (i < text.length) {
				visible += text[i];
				i++;
			} else {
				clearInterval(interval);
			}
		}, 70);

		return () => clearInterval(interval);
	});
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-white px-6">

	<img
		src={Image}
		alt="Blue Project"
		class="mb-12 h-24 w-auto object-contain"
	/>

	<div class="mb-10 h-1 w-64 overflow-hidden rounded-full bg-slate-200 md:w-96">
		<div class="loader-line h-full bg-[#5e9df0]"></div>
	</div>

	<h3 class="text-center text-xl text-slate-700 md:text-2xl">
		{visible}<span class="animate-pulse">|</span>
	</h3>

</div>

<style>
	.loader-line{
		width:0%;
		animation:loading 2.6s linear forwards;
	}

	@keyframes loading{

		from{
			width:0%;
		}

		to{
			width:100%;
		}

	}
</style>