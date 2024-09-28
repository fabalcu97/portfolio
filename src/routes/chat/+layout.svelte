<script>
	import { isLoading } from '$lib/loader';
	import { onMount } from 'svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import { currentUser } from '$lib/pocketbase/auth';
	import { goto } from '$app/navigation';

	import Loader from 'chat/loader.svelte';
	import SvelteLogo from 'assets/icons/svelte.svelte';
	import Pocketbase from 'assets/icons/pocketbase.svelte';
	import Tailwindcss from 'assets/icons/tailwindcss.svelte';

	onMount(() => {
		if (!$currentUser) {
			goto('/chat/login');
		}
	});
</script>

<main class="flex">
	<slot />
</main>
<footer class="invisible hidden sm:visible sm:flex text-center justify-center items-center text-sm">
	Built with &nbsp; <a target="_blank" href="https://kit.svelte.dev"><SvelteLogo /></a>
	&nbsp;
	<a target="_blank" href="https://pocketbase.io"><Pocketbase /></a>
	&nbsp;
	<a target="_blank" href="https://tailwindcss.com"><Tailwindcss /></a>
</footer>

{#if $isLoading}
	<Loader />
{/if}
<SvelteToast />

<style lang="postcss">
	main {
		@media (min-width: 640px) {
			height: calc(100vh - 50px);
		}
		height: 100vh;
	}
	footer {
		height: 50px;
	}

	a {
		cursor: pointer;
	}
</style>
