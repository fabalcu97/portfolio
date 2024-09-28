<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { clearSession, currentUser } from '$lib/pocketbase/auth';
	import { createMessage } from '$lib/pocketbase/messages';

	import ChatList from 'chat/chatList.svelte';
	import Container from 'chat/container.svelte';

	onMount(() => {
		if (!$currentUser) {
			goto('/chat/login');
		}
	});

	let newMessage = '';

	function logout() {
		clearSession();
		goto('/chat/login');
	}

	function sendMessage() {
		if (!newMessage) {
			return;
		}
		createMessage(newMessage);
		newMessage = '';
	}
</script>

<Container>
	<div class="flex flex-row justify-between pb-2">
		<h2>Welcome {$currentUser?.username}</h2>
		<button class="flex-0 bg-red-200 rounded-md hover:bg-red-300 px-2" on:click={logout}
			>Logout</button
		>
	</div>
	<ChatList />
	<form on:submit|preventDefault={sendMessage} class="basis-0 flex mt-5">
		<input
			bind:value={newMessage}
			class="flex-1 border-2 rounded-full mr-3 pl-5"
			placeholder="Enter your message"
		/>
		<button class="flex-2 bg-emerald-200 hover:bg-emerald-300 rounded-full px-5" type="submit"
			>Send</button
		>
	</form>
</Container>
