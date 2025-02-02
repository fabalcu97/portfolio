<script lang="ts">
	import { isLoading } from '$lib/loader';
	import { userCollection } from '$lib/pocketbase/auth';
	import { successToast } from '$lib/toast';

	import Input from 'chat/Input.svelte';
	import Container from 'chat/container.svelte';
	import { ClientResponseError } from 'pocketbase';

	let username = '';
	let email = '';
	let password = '';
	let passwordConfirm = '';
	let registerErrors: Record<string, { message: string }> = {};

	async function register() {
		isLoading.set(true);
		const data = {
			username,
			email,
			emailVisibility: false,
			password,
			passwordConfirm
		};

		try {
			await userCollection.create(data);
			await userCollection.authWithPassword(email, password);
			successToast('Welcome!');
		} catch (error) {
			if (error instanceof ClientResponseError) {
				registerErrors = error.response.data;
			}
		} finally {
			isLoading.set(false);
		}
	}
</script>

<Container>
	<h2 class="text-center my-5">Welcome!</h2>
	<form on:submit|preventDefault={register} class="h-full flex flex-col p-10">
		<Input
			required
			bind:value={username}
			placeholder="Username"
			error={registerErrors['username']}
		/>
		<Input required bind:value={email} placeholder="Email" error={registerErrors['email']} />
		<Input
			required
			bind:value={password}
			placeholder="Password"
			type="password"
			error={registerErrors['password']}
		/>
		<Input
			required
			bind:value={passwordConfirm}
			placeholder="Confirm Password"
			type="password"
			error={registerErrors['passwordConfirm']}
		/>
		<button type="submit" class="basis-0 rounded-full my-5 py-1 bg-blue-200 hover:bg-blue-300"
			>Register</button
		>
		<a
			href="/login"
			class="basis-0 text-center rounded-full mb-5 py-1 bg-emerald-200 hover:bg-emerald-300"
			>Login</a
		>
	</form>
</Container>
