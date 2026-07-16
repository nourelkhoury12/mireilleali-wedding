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

			successMessage = result.message;

			form = {
				name: '',
				email: '',
				phone: '',
				attend: true,
				guests: 1,
				message: ''
			};
		} catch {
			errorMessage = 'Unable to submit your reservation.';
		} finally {
			loading = false;
		}
	}
</script>

<section class="content bg-primary">
	<div class="Card bg-white">

		<h2 class="heading-5">
			Reserve Your Seat
		</h2>

		<p class="heading-4">
			We would be honored to celebrate this special day with you.
			Kindly confirm your attendance by filling out the form below.
		</p>

		<form on:submit|preventDefault={submitReservation}>

			<!-- Full Name -->
			<div class="rsvp-field">
				<label class="rsvp-label" for="name">Full Name *</label>
				<input id="name" bind:value={form.name} type="text" class="rsvp-input" placeholder="Enter your full name" required/>
			</div>

			<!--Email-->
			<div class="rsvp-field">
				<label class="rsvp-label" for="name">Email *</label>
				<input id="email" bind:value={form.email} type="email" class="rsvp-input" placeholder="Enter your email" required/>
			</div>

			<!-- Phone -->
			<div class="rsvp-field">
				<label class="rsvp-label" for="phone">Phone Number *</label>
				<input id="phone" bind:value={form.phone} type="tel" class="rsvp-input" placeholder="+961 XX XXX XXX" required/>
			</div>

			<!-- Attendance -->
			<div class="rsvp-field">
				<label  for="q" class="rsvp-label">Will you attend? *</label>

				<div class="rsvp-radio-group">
					<label class="rsvp-radio">
						<input type="radio" bind:group={form.attend} value={true} name="attendance" checked/>
						<span>Joyfully Accept</span>
					</label>

					<label class="rsvp-radio">
						<input type="radio" value={false} bind:group={form.attend} name="attendance"/>
						<span>Regretfully Decline</span>
					</label>
				</div>
			</div>

			<!-- Guests -->
			<div class="rsvp-field">
				<label class="rsvp-label" for="guests">
					Number of Guests *
				</label>

				<select bind:value={form.guests} class="rsvp-select">
					<option value={1}>1 Guest</option>
					<option value={2}>2 Guests</option>
				</select>
			</div>

			<!-- Message -->
			<div class="rsvp-field">
				<label class="rsvp-label" for="message">Message (Optional)</label>
				<textarea id="message" bind:value={form.message} class="rsvp-textarea" rows="5" placeholder="Share your wishes with Ali & Mireille..."></textarea>
			</div>

			<button type="submit" class="btn-variant-filled">Reserve My Seat</button>
		</form>
	</div>
</section>