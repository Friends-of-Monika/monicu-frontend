export type User = { id: number };
export type Reaction = { emoji_id: number; users: Array<User> };
export type PostImage = {
	url: string;
	width: number;
	height: number;
	size: bigint;
	reactions: Array<Reaction>;
};
export type Post = { id: number; channel_id: number; user_id: number; images: Array<PostImage> };
