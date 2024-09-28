/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	ActiveUsers = "ActiveUsers",
	Messages = "Messages",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ActiveUsersRecord = {
	count?: number
}

export type MessagesRecord = {
	sentBy: RecordIdString
	text: string
}

export type UsersRecord = never

// Response types include system fields and match responses from the PocketBase API
export type ActiveUsersResponse<Texpand = unknown> = Required<ActiveUsersRecord> & BaseSystemFields<Texpand>
export type MessagesResponse<Texpand = unknown> = Required<MessagesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	ActiveUsers: ActiveUsersRecord
	Messages: MessagesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	ActiveUsers: ActiveUsersResponse
	Messages: MessagesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'ActiveUsers'): RecordService<ActiveUsersResponse>
	collection(idOrName: 'Messages'): RecordService<MessagesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
