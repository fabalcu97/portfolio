<script lang="ts">
  import { goto } from '$app/navigation';
  import { isLoading } from '$lib/loader';
  import { pb } from '$lib/pocketbase/index';
  import { errorToast, successToast } from '$lib/toast';

  import Container from 'chat/container.svelte';

  let email = '';
  let password = '';
  let error = '';

  async function login() {
    isLoading.set(true);
    try {
      await pb.collection('users').authWithPassword(email, password);
      goto('/chat');
      successToast('Welcome!');
    } catch (error: any) {
      errorToast(error.response.message);
    } finally {
      isLoading.set(false);
    }
  }
</script>

<Container>
  <form
    on:submit|preventDefault={login}
    class="h-full flex flex-col p-10 justify-center"
  >
    <h2 class="text-center">Welcome!</h2>
    <input
      required
      bind:value={email}
      class="my-5 border-2 rounded-lg pl-5"
      placeholder="Email"
    />
    <input
      required
      bind:value={password}
      class="mb-5 border-2 rounded-lg pl-5"
      placeholder="Password"
      type="password"
    />
    {#if error}
      <p class="text-xs text-red-700">* {error}</p>{/if}
    <button
      type="submit"
      class="basis-0 rounded-full mb-5 py-1 bg-emerald-200 hover:bg-emerald-300"
      >Login</button
    >
    <a
      href="/chat/sign-up"
      class="basis-0 text-center rounded-full mb-5 py-1 bg-blue-200 hover:bg-emerald-300"
      >Sign Up</a
    >
  </form>
</Container>
