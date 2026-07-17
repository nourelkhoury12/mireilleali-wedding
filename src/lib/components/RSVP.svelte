<script lang="ts">

	import type { ReservationRequest, ReservationResponse } from "$lib/types/reservation"

	let form: ReservationRequest = $state({
		name: '',
		email: '',
		phone: '',
		attend: true,
		guests: 1,
		message: ''
	})

	let loading = $state(false);
	let successMessage = $state('');
	let errorMessage = $state('');

	async function submitReservation(event: SubmitEvent) {
		event.preventDefault();

		loading = true;
		successMessage = '';
		errorMessage = '';

		try {
			const response = await fetch('/api/rsvp', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(form)
			});

			const result: ReservationResponse = await response.json();

			if (!response.ok) {
				errorMessage = result.message;
				return;
			}

			successMessage = 'Thank you! Your reservation has been received. We look forward to celebrating with you.';

			form = {
				name: '',
				email: '',
				phone: '',
				attend: true,
				guests: 1,
				message: ''
			};

			setTimeout(() => {
				successMessage = '';
			}, 5000);

		} catch {
			errorMessage = 'Unable to submit your reservation.';
		} finally {
			loading = false;
		}
	}
</script>

<section class="content bg-primary">
	<div class="Card bg-white">

		<div class="text-center">

		<h2 class="heading-5">Reserve Your Seat</h2>

		<p class="heading-4">
			We would be honored to celebrate this special day with you.
			Kindly confirm your attendance by filling out the form below.
		</p>
		</div>

		<form class="form" on:submit|preventDefault={submitReservation}>

			<!-- Full Name -->
			<div class="field">
				<label class="label" for="name">Full Name *</label>

				<input
					id="name"
					type="text"
					class="input"
					bind:value={form.name}
					placeholder="Enter your full name"
					required
				/>
			</div>

			<!-- Email -->
			<div class="field">
				<label class="label" for="email">Email *</label>

				<input
					id="email"
					type="email"
					class="input"
					bind:value={form.email}
					placeholder="Enter your email"
				/>
			</div>

			<!-- Phone -->
			<div class="field">
				<label class="label" for="phone">Phone Number *</label>

				<input
					id="phone"
					type="tel"
					class="input"
					bind:value={form.phone}
					placeholder="+961 XX XXX XXX"
					required
				/>
			</div>

			<!-- Attendance -->
			<div class="field">

				<label for="presence" class="label">Will you attend? *</label>

				<div class="radio-group">

					<label class="radio">
						<input
							type="radio"
							name="attendance"
							value={true}
							bind:group={form.attend}
							checked
						/>

						<span>Joyfully Accept</span>
					</label>

					<label class="radio">
						<input
							type="radio"
							name="attendance"
							value={false}
							bind:group={form.attend}
						/>

						<span>Regretfully Decline</span>
					</label>

				</div>

			</div>

			{#if form.attend}

				<!-- Guests -->
				<div class="field">

					<label class="label" for="guests">
						Number of Guests *
					</label>

					<select
						id="guests"
						class="select"
						bind:value={form.guests}
					>
						<option value={1}>1 Guest</option>
						<option value={2}>2 Guests</option>
					</select>

				</div>

				<!-- Message -->
				<div class="field">

					<label class="label" for="message">
						Message (Optional)
					</label>

					<textarea
						id="message"
						class="textarea"
						rows="5"
						bind:value={form.message}
						placeholder="Share your wishes with Ali & Mireille..."
					></textarea>

				</div>

			{/if}

			<button type="submit" class="btn-variant-filled" disabled={loading}>
				{#if loading}
					Submitting...
				{:else}
					{form.attend ? 'Reserve My Seat' : 'Send My Regrets'}
				{/if}
			</button>

			{#if successMessage}
				<p class="success">
					{successMessage}
				</p>
			{/if}

			{#if errorMessage}
				<p class="error">
					{errorMessage}
				</p>
			{/if}

		</form>
	</div>
</section>