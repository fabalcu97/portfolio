import { writable } from 'svelte/store';

import { goto } from '$app/navigation';
import { pb } from '$lib/pocketbase';

export const currentUser = writable(pb.authStore.model);
export const userCollection = pb.collection('Users');

pb.authStore.onChange((auth) => {
  console.log('AuthStore changed', auth);
  currentUser.set(pb.authStore.model);
});

currentUser.subscribe((user) => {
  console.log('Current user changed', user);
  if (user) {
    goto('/chat');
  }
});

export async function clearSession() {
  pb.authStore.clear();
}
