<script>
	let { children } = $props();
</script>

<nav>
	<a href="/admin/events" class="active">Events</a>
	<a href="/admin/locations">Locations</a>
	<a href="/admin/categories">Categories</a>
</nav>

{@render children()}

<style>
	nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: linear-gradient(135deg, #4caf50, #81c784);
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
		transition: background 0.3s ease;
	}

	nav:hover {
		background: linear-gradient(135deg, #388e3c, #66bb6a);
	}

	a {
		color: white;
		text-decoration: none;
		font-weight: bold;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		transition:
			background 0.3s ease,
			transform 0.2s ease;
	}

	a:hover {
		background: rgba(255, 255, 255, 0.2);
		transform: scale(1.05);
	}

	a.active {
		background: rgba(255, 255, 255, 0.3);
		border-bottom: 2px solid white;
	}
</style>
