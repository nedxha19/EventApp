<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<h1 class="dashboard-title">Admin Dashboard</h1>
<a class="create-link" href="/admin/categories/new">Create a New Category</a>

{#if form && form.success}
	<Warning message={form.message} />
{/if}

<div class="categories">
	{#each data.categories as category (category.id)}
		<div class="box" transition:slide>
			<p class="category-info">{category.id} - {category.name}</p>
			<form action="?/deletecategory" method="POST" use:enhance>
				<input type="hidden" name="id" value={category.id} />
				<button type="submit" class="delete-button">Delete</button>
			</form>
		</div>
	{/each}
</div>

<style>
	/* Global Styles */
	:global(body) {
		background-color: #f4f4f4;
		font-family: 'Arial', sans-serif;
		margin: 0;
		padding: 0;
	}

	.dashboard-title {
		text-align: center;
		margin-bottom: 20px;
		font-size: 2.5rem;
		color: #333;
	}

	.create-link {
		display: block;
		text-align: center;
		margin-bottom: 20px;
		padding: 10px 15px;
		background: #4caf50; /* Green color */
		color: white;
		border-radius: 5px;
		text-decoration: none;
		transition: background 0.3s ease;
	}

	.create-link:hover {
		background: #388e3c; /* Darker green on hover */
	}

	.categories {
		max-width: 600px;
		margin: auto;
		padding: 0 20px;
	}

	.box {
		background: rgba(255, 255, 255, 0.9);
		border-radius: 10px;
		padding: 20px;
		margin: 10px 0;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		position: relative;
	}

	.box:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
	}

	.category-info {
		margin: 0;
		font-size: 1.1rem;
		color: #333;
	}

	.delete-button {
		background: #dc3545; /* Red color for delete button */
		border: none;
		color: white;
		padding: 10px;
		border-radius: 5px;
		cursor: pointer;
		transition: background 0.3s ease;
		position: absolute;
		right: 10px;
		top: 10px;
	}

	.delete-button:hover {
		background: #c82333; /* Darker red on hover */
	}
</style>
