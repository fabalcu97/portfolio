import { get } from 'svelte/store';

import { errorToast } from '$lib/toast';
import type { Message } from '$lib/pocketbase/types';
import { pb } from '$lib/pocketbase';
import { currentUser } from '$lib/pocketbase/auth';

export const messagesCollection = pb.collection('Messages');

export async function getMessages() {
  try {
    const resultList = await messagesCollection.getList<Message>(1, 50, {
      sort: '-created',
      expand: 'sentBy',
    });

    return resultList.items.map((m) => ({
      ...m,
      user: { username: m.expand.sentBy.username, id: m.expand.sentBy.id },
    }));
  } catch (error: any) {
    if (error.originalError.code === 20) {
      return [];
    }
    console.error({ error });
    errorToast('Something went wrong, please try again');
    return [];
  }
}

export async function createMessage(text: string) {
  try {
    await messagesCollection.create({
      sentBy: get(currentUser)?.id,
      text,
    });
  } catch (error) {
    errorToast('Something went wrong, please try again');
  }
}
