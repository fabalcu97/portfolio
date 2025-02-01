import PocketBase from 'pocketbase';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import type { TypedPocketBase } from '../../types/pocketbase';

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL) as TypedPocketBase;
