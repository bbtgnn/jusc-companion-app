import type { LoadEvent } from '@sveltejs/kit';
import { error, redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

/** @type {import('./$types').PageLoad} */
export function load(event: LoadEvent) {
	throw redirect(303, `${base}/sounds`);
}
