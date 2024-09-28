<script lang="ts">
  export let placeholder = 'Input text';
  export let value = '';
  export let error: { message: string };

  $: console.log({ error });
</script>

<div class="flex flex-col mb-5">
  <input
    bind:value
    class=" border-2 rounded-lg pl-5"
    {placeholder}
    {...$$props}
  />
  {#if error}
    <span class="text-xs text-red-700">* {error.message}</span>
  {/if}
</div>
