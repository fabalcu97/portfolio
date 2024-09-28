<script lang="ts">
  export let message: { text: string; user: { username: string; id: string } };
  export let own: boolean = false;
</script>

<div
  class="flex {own ? 'flex-row' : 'flex-row-reverse'} items-center justify-end"
>
  <div
    class="rounded-md {own ? 'bg-emerald-200' : 'bg-stone-200'} m-1 {own
      ? 'ml-16'
      : 'mr-16'} px-2 py-1 min-w-[25%] max-w-[70%] flex flex-col"
  >
    <span class="break-words text-justify">
      {message.text}
    </span>
    <small class="{own ? 'text-right' : 'text-left'} text-[9px]"
      >{message.user.username}</small
    >
  </div>
  <img
    class="h-5 w-5 basis-0 self-end my-1"
    src="https://api.dicebear.com/7.x/rings/svg?seed={message.user.id}&size=20"
    alt={message.user.username}
  />
</div>
