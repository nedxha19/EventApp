<script>
	let { data } = $props();
</script>

<h1 class="form-title">Create a New Event</h1>

<form method="POST" action="?/createEvent" class="event-form">
	<label for="title">Title</label>
	<input type="text" placeholder="Title" name="title" required />

	<label for="description">Description</label>
	<textarea placeholder="Description" name="description" required></textarea>

	<label for="url">URL</label>
	<textarea placeholder="URL" name="url" required></textarea>

	<label for="startdate">Start Date</label>
	<input type="date" name="startDate" required />

	<label for="enddate">End Date</label>
	<input type="date" name="endDate" required />

	<label for="starttime">Start Time</label>
	<input type="time" name="startTime" required />

	<label for="location">Location</label>
	<select name="locationId" required>
		{#each data.locations as location (location.id)}
			<option value={location.id}>{location.name}</option>
		{/each}
	</select>

	<label for="category">Categories</label>
	<select name="categoryId" required>
		{#each data.categories as category (category.id)}
			<option value={category.id}>{category.name}</option>
		{/each}
	</select>

	<button type="submit">Create Event</button>
</form>

<style>
	/* Global Styles */
	:global(body) {
		background-color: #f4f4f4;
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
	}

	.form-title {
		text-align: center;
		color: #333;
		margin-bottom: 20px;
	}

	.event-form {
		background: linear-gradient(135deg, #4caf50, #81c784);
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		max-width: 600px;
		margin: 20px auto;
		transition: transform 0.3s ease;
	}

	.event-form:hover {
		transform: scale(1.02);
	}

	.event-form label {
		display: block;
		margin-bottom: 5px;
		color: #fff;
		font-weight: bold;
	}

	.event-form input,
	.event-form textarea,
	.event-form select {
		width: calc(100% - 20px);
		padding: 10px;
		margin-bottom: 15px;
		border: none;
		border-radius: 5px;
		transition:
			border 0.3s ease,
			box-shadow 0.3s ease;
	}

	.event-form input:focus,
	.event-form textarea:focus,
	.event-form select:focus {
		outline: none;
		box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
		border: 2px solid #fff;
	}

	.event-form button {
		background-color: #4caf50;
		color: white;
		border: none;
		padding: 12px;
		border-radius: 5px;
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			transform 0.3s ease;
		font-size: 16px;
		width: 100%;
	}

	.event-form button:hover {
		background-color: #388e3c;
		transform: translateY(-2px);
	}

	h1 {
		text-align: center;
		color: #333;
	}
</style>
