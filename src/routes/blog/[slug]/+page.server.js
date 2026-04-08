import { error } from '@sveltejs/kit';
import DOMPurify from 'isomorphic-dompurify';
import { posts } from '../data';

export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);
	if (!post) {
		throw error(404);
	}
	return {
		post: {
			...post,
			content: DOMPurify.sanitize(post.content)
		}
	};
}