<script>
	import { flip } from 'svelte/animate';
	let { data } = $props();
	let filteredEvents = $state(data.events);
	console.log(data.events);
	let selectedCategorie = $state('all');

	function filterEvents() {
		if (selectedCategorie === 'all') {
			filteredEvents = data.events;
		} else {
			filteredEvents = data.events.filter((e) => e.category_id === selectedCategorie.id);
		}
	}
</script>

<div class="header">
	<div class="header-content">
		{#if data.user}
			<p class="welcome-message">Welcome back, {data.user.username}</p>
			<div class="button-group">
				<form action="/logout?/logout" method="POST">
					<button class="btn logout" type="submit">Logout</button>
				</form>
				<form action="/logout?/deleteAccount" method="POST">
					<button class="btn delete" type="submit">Delete Account</button>
				</form>
			</div>
		{:else}
			<p class="welcome-message">You are not logged in</p>
			<div class="button-group">
				<a class="btn primary" href="/login">Login</a>
				<a class="btn secondary" href="/register">Register</a>
			</div>
		{/if}
	</div>
</div>

<div class="body">
	<div class="container">
		<h1>My Event App</h1>
		<p>Here are the current events.</p>

		<select class="category-select" bind:value={selectedCategorie} onchange={filterEvents}>
			<option value="all">All Categories</option>
			{#each data.categories as category}
				<option value={category.id}>{category.name}</option>
			{/each}
		</select>

		<div class="event-list">
			{#each filteredEvents as event (event.id)}
				<div class="event" animate:flip>
					<p class="event-id">{event.id} - <span class="event-title">{event.title}</span></p>
					<p class="event-date">{event.start_date}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	/* General Styles */
	body {
		margin: 0;
		font-family: 'Arial', sans-serif;
		background-color: #f0f4f8;
		color: #333;
	}

	/* Header Styles */
	.header {
		background-color: #1f2937; /* Dark background */
		color: white;
		padding: 20px 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header-content {
		max-width: 1200px;
		width: 90%;
		text-align: center;
	}

	.welcome-message {
		font-size: 1.2em;
	}

	.button-group {
		margin-top: 10px;
	}

	/* Button Styles */
	.btn {
		background-color: #3b82f6; /* Blue */
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		text-decoration: none;
		margin: 5px;
		cursor: pointer;
		transition:
			background-color 0.3s,
			transform 0.3s;
		font-weight: bold;
		font-size: 1em;
	}

	.btn:hover {
		background-color: #1d4ed8; /* Darker blue */
		transform: scale(1.05);
	}

	.btn.delete {
		background-color: #ef4444; /* Red */
	}

	.btn.delete:hover {
		background-color: #dc2626; /* Dark Red */
	}

	/* Main Body Styles */
	.body {
		background-color: #f4f4f9;
		padding: 20px 0;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		background: white;
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		padding: 40px;
		text-align: center;
	}

	h1 {
		font-size: 2.5em;
		color: #111827; /* Darker Text */
		margin-bottom: 10px;
	}

	p {
		margin-bottom: 20px;
	}

	/* Category Select Styles */
	.category-select {
		width: 100%;
		padding: 15px;
		margin-bottom: 30px;
		border: 2px solid #3b82f6;
		border-radius: 5px;
		font-size: 16px;
		transition:
			border-color 0.3s,
			background-color 0.3s;
	}

	.category-select:focus {
		border-color: #1d4ed8;
		outline: none;
		background-color: #e9ecef;
	}

	/* Event List Styles */
	.event-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 20px;
	}

	.event {
		background: #e0f2fe; /* Light Blue */
		border-radius: 10px;
		padding: 20px;
		transition:
			background 0.3s,
			transform 0.3s;
		border-left: 5px solid #3b82f6; /* Blue border */
	}

	.event:hover {
		background: #cbd5e1; /* Hover background */
		transform: translateY(-3px);
	}

	.event-id {
		font-weight: bold;
		color: #3b82f6; /* Blue */
	}

	.event-title {
		font-size: 1.3em;
		color: #111827; /* Darker Text */
	}

	.event-date {
		color: #6b7280; /* Gray */
		font-size: 0.9em;
	}
</style>
