import { writable } from 'svelte/store';

export const userDetails = writable({ user: {} });

export const userLists = writable([]);

export const listData = writable(null);
