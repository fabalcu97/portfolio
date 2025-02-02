import { get } from 'svelte/store';

import { errorToast } from '$lib/toast';
import { pb } from '$lib/pocketbase';
import { currentUser } from '$lib/pocketbase/auth';
import type { MessagesResponse, UsersResponse } from '../../types/pocketbase';

export const messagesCollection = pb.collection('Messages');

export async function getMessages() {
	try {
		const resultList = await messagesCollection.getList<
			MessagesResponse<{ sentBy: UsersResponse }>
		>(1, 50, {
			sort: '-created',
			expand: 'sentBy'
		});

		console.log(resultList.items);
		return resultList.items.map((m) => ({
			...m,
			user: { username: m.expand?.sentBy.username, id: m.expand?.sentBy.id }
		}));
	} catch (error: unknown) {
		if ((error as { originalError: { code: number } }).originalError.code === 20) {
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
			text
		});
	} catch {
		errorToast('Something went wrong, please try again');
	}
}
