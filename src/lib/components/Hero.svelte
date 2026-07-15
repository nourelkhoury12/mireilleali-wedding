<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import Invitation from '$lib/assets/invitation.png';
</script>

<section class="hero">

	<div class="hero-content" in:fade={{ duration: 1000 }}>

		<img src={Invitation} alt="Ali & Mireille Wedding Invitation"
			class="hero-card"
			in:fly={{
				y: 30,
				duration: 1200
			}}
		/>

		<div class="hero-scroll"
			in:fade={{
				delay: 1200,
				duration: 700
			}}
		>
		

		</div>

	</div>

</section>