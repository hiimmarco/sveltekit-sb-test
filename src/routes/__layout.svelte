<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="p-8 max-w-6xl mx-auto">
	<Nav />
	<slot />
	<Footer />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
