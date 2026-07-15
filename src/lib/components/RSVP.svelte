<section class="content bg-primary">
	<div class="rsvp-container">

		<h2 class="heading-5">
			Reserve Your Seat
		</h2>

		<p class="heading-4">
			We would be honored to celebrate this special day with you.
			Kindly confirm your attendance by filling out the form below.
		</p>

		<form class="rsvp-form">

			<!-- Full Name -->
			<div class="rsvp-field">
				<label class="rsvp-label" for="name">
					Full Name *
				</label>

				<input
					id="name"
					type="text"
					class="rsvp-input"
					placeholder="Enter your full name"
					required
				/>
			</div>

			<!-- Phone -->
			<div class="rsvp-field">
				<label class="rsvp-label" for="phone">
					Phone Number *
				</label>

				<input
					id="phone"
					type="tel"
					class="rsvp-input"
					placeholder="+961 XX XXX XXX"
					required
				/>
			</div>

			<!-- Attendance -->
			<div class="rsvp-field">

				<label class="rsvp-label">
					Will you attend? *
				</label>

				<div class="rsvp-radio-group">

					<label class="rsvp-radio">

						<input
							type="radio"
							name="attendance"
							value="yes"
							checked
						/>

						<span>Joyfully Accept</span>

					</label>

					<label class="rsvp-radio">

						<input
							type="radio"
							name="attendance"
							value="no"
						/>

						<span>Regretfully Decline</span>

					</label>

				</div>

			</div>

			<!-- Guests -->
			<div class="rsvp-field">

				<label
					class="rsvp-label"
					for="guests"
				>
					Number of Guests *
				</label>

				<select
					id="guests"
					class="rsvp-select"
				>
					<option value="1">
						1 Guest
					</option>

					<option value="2">
						2 Guests
					</option>
				</select>

			</div>

			<!-- Message -->
			<div class="rsvp-field">

				<label
					class="rsvp-label"
					for="message"
				>
					Message (Optional)
				</label>

				<textarea
					id="message"
					class="rsvp-textarea"
					rows="5"
					placeholder="Share your wishes with Ali & Mireille..."
				></textarea>

			</div>

			<button
				type="submit"
				class="btn-variant-filled"
			>
				Reserve My Seat
			</button>

		</form>

	</div>
</section>