<script lang="ts">
	let { data } = $props();
</script>

<h1>Wedding Reservations</h1>

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Phone</th>
			<th>Attend</th>
			<th>Guests</th>
			<th>Message</th>
		</tr>
	</thead>

	<tbody>
		{#each data.reservations as reservation}
			<tr>
				<td>{reservation.name}</td>
				<td>{reservation.email}</td>
				<td>{reservation.phone}</td>
				<td>{reservation.attend ? '✅ Yes' : '❌ No'}</td>
				<td>{reservation.guests}</td>
				<td>{reservation.message}</td>
			</tr>
		{/each}
	</tbody>
</table>