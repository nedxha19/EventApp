<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<h1 class="dashboard-title">Nedit Dashboard</h1>
<a class="create-event-link" href="/admin/events/new">Create a new event</a>

{#each data.events as event (event.id)}
	<div class="box" transition:slide>
		<p class="event-info">{event.id} - {event.title} - {event.locationName}</p>
		<form action="?/deleteEvent" method="POST" use:enhance>
			<input type="hidden" name="id" value={event.id} />
			<button type="submit" class="delete-button">Delete</button>
		</form>
	</div>
{/each}

<style>
	/* Global Styles */
	:global(body) {
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
		background-color: #f4f4f4;
	}

	.dashboard-title {
		text-align: center;
		color: #333;
		margin-bottom: 20px;
	}

	.create-event-link {
		display: block;
		text-align: center;
		background-color: #4caf50;
		color: white;
		padding: 10px 20px;
		border-radius: 5px;
		text-decoration: none;
		margin-bottom: 20px;
		transition: background-color 0.3s;
	}

	.create-event-link:hover {
		background-color: #45a049;
	}

	.box {
		border-radius: 8px;
		padding: 15px;
		margin: 10px 0;
		background: linear-gradient(to right, #ff7e5f, #feb47b);
		transition:
			transform 0.3s,
			box-shadow 0.3s;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	.box:hover {
		transform: scale(1.03);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
	}

	.event-info {
		color: #333;
		font-size: 16px;
		margin: 0;
	}

	.delete-button {
		background-color: #ff4c4c;
		color: white;
		border: none;
		padding: 8px 12px;
		cursor: pointer;
		border-radius: 5px;
		transition:
			background-color 0.3s,
			transform 0.2s;
	}

	.delete-button:hover {
		background-color: #ff1a1a;
		transform: scale(1.05);
	}
</style>
