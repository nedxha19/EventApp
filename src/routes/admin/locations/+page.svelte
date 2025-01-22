<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data, form } = $props();
</script>

<header>
	<h1 class="dashboard-title">Admin Dashboard</h1>
	<a class="create-link" href="/admin/locations/new">Create a New Location</a>
</header>

{#if form && form.success}
	<div class="notification success">
		{form.message}
	</div>
{/if}

<div class="locations">
	{#each data.locations as location (location.id)}
		<div class="box" transition:slide>
			<div class="location-info">
				<p class="location-id">ID: {location.id}</p>
				<p class="location-name">{location.name}</p>
			</div>
			<form action="?/deleteLocation" method="POST" use:enhance>
				<input type="hidden" name="id" value={location.id} />
				<button type="submit" class="delete-button">Delete</button>
			</form>
		</div>
	{/each}
</div>

<style>
	/* Global Styles */
	:global(body) {
		background-color: #f4f4f4;
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
	}

	.dashboard-title {
		text-align: center;
		color: #333;
		margin-bottom: 20px;
	}

	.create-link {
		display: inline-block;
		margin: 10px auto;
		padding: 10px 15px;
		background-color: #4caf50; /* Green color */
		color: white;
		text-decoration: none;
		border-radius: 5px;
		transition: background-color 0.3s;
		text-align: center;
	}

	.create-link:hover {
		background-color: #388e3c; /* Darker green on hover */
	}

	.locations {
		max-width: 600px;
		margin: auto;
		padding: 0 20px;
	}

	.box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #ccc;
		padding: 15px;
		margin: 10px 0;
		border-radius: 5px;
		background-color: #ffffff; /* White background for boxes */
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.3s;
	}

	.box:hover {
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	}

	.location-info {
		flex-grow: 1; /* Allow the info section to grow */
		margin-right: 15px; /* Space between info and button */
	}

	.location-id {
		font-weight: bold;
		color: #555;
		margin: 0;
	}

	.location-name {
		margin: 5px 0 0;
		color: #333;
	}

	.delete-button {
		padding: 10px;
		border: none;
		border-radius: 5px;
		background-color: #155724; /* Red color for delete button */
		color: white;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.delete-button:hover {
		background-color: #155724; /* Darker red on hover */
	}

	.notification {
		background-color: #d4edda; /* Light green for success message */
		color: #155724; /* Dark green text */
		padding: 10px;
		border-radius: 5px;
		margin: 10px auto;
		max-width: 600px;
		text-align: center;
	}

	/* Responsive design */
	@media (max-width: 600px) {
		.box {
			flex-direction: column;
			align-items: flex-start;
		}

		.location-info {
			margin-right: 0; /* Remove margin on smaller screens */
		}
	}
</style>
