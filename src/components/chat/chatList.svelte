<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { currentUser, userCollection } from '$lib/pocketbase/auth';
  import { getMessages, messagesCollection } from '$lib/pocketbase/messages';
  import type { Message } from '$lib/pocketbase/types';
  import ChatBubble from './chatBubble.svelte';

  let messages: Message[] = [];
  let unsubscribe: () => void;

  onMount(async () => {
    messages = await getMessages();
    unsubscribe = await messagesCollection.subscribe<Message>(
      '*',
      async ({ action, record }) => {
        switch (action) {
          case 'create':
            const user = await userCollection.getOne(record.sentBy);
            messages = [
              { ...record, user: { username: user.username, id: user.id } },
              ...messages,
            ];
            return;
          default:
            return;
        }
      },
    );
  });

  onDestroy(() => unsubscribe && unsubscribe());
</script>

<div
  class="basis-11/12 overflow-y-auto flex flex-col-reverse flex-nowrap overflow-auto no-scrollbar"
>
  {#each messages as message (message.id)}
    {#if message.user.id === $currentUser?.id}
      <ChatBubble {message} own />
    {:else}
      <ChatBubble {message} />
    {/if}
  {/each}
</div>

<style lang="postcss">
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
