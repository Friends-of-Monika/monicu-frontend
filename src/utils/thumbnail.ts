import type { PostImage } from '../types/post';

const maxDim = 500;

export function getThumbnailUrl(im: PostImage): string {
	let [w, h] = [im.width, im.height];
	const asp = im.width / im.height;

	if (w > maxDim) {
		[w, h] = [maxDim, Math.round(maxDim / asp)];
	}
	if (h > maxDim) {
		[w, h] = [Math.round(maxDim * asp), maxDim];
	}

	return im.url + `?width=${w}&height=${h}`;
}
