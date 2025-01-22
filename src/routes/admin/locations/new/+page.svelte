<h1 class="form-title">Create a New Location</h1>

<form method="POST" action="?/createLocation" class="location-form">
	<label for="name">Name</label>
	<input type="text" placeholder="Name" name="name" required />

	<label for="description">Description</label>
	<textarea placeholder="Description" name="description" required></textarea>

	<button type="submit">Create Location</button>
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

	.location-form {
		background: linear-gradient(135deg, #4caf50, #81c784);
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		max-width: 500px;
		margin: 20px auto;
		transition: transform 0.3s ease;
	}

	.location-form:hover {
		transform: scale(1.02);
	}

	label {
		font-weight: bold;
		margin-top: 10px;
		display: block;
		color: #fff;
	}

	input[type='text'],
	textarea {
		width: calc(100% - 20px);
		padding: 10px;
		margin-top: 5px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 14px;
		transition:
			border 0.3s ease,
			box-shadow 0.3s ease;
	}

	input[type='text']:focus,
	textarea:focus {
		outline: none;
		border: 2px solid #fff;
		box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
	}

	button {
		margin-top: 20px;
		padding: 10px;
		border: none;
		border-radius: 4px;
		background-color: #4caf50; /* Green color */
		color: white;
		font-size: 16px;
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			transform 0.3s ease;
		width: 100%;
	}

	button:hover {
		background-color: #388e3c; /* Darker green on hover */
		transform: translateY(-2px);
	}
</style>
