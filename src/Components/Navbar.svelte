<script>
	import { userDetails } from '../stores';
	import { browser } from '$app/environment';
	let displayName;
	let user_id;
	let avatar;
	if (browser) {
		user_id = localStorage.getItem('user');
		avatar = localStorage.getItem('avatar');
		displayName = localStorage.getItem('displayName');
	}
	function handleSignOut() {
		localStorage.removeItem('user');
		localStorage.removeItem('avatar');
		localStorage.removeItem('displayName');
	}
</script>

<nav class="border-gray-200 bg-white dark:bg-gray-900">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		<a href="/choose-meals" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
			<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
				>The Daily Dish</span
			>
		</a>
		<div class="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
			<button
				data-collapse-toggle="navbar-user"
				type="button"
				class="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
				id="user-menu-button"
				aria-expanded="false"
				data-dropdown-toggle="user-dropdown"
				data-dropdown-placement="bottom"
			>
				<span class="sr-only">Open user menu</span>
				<div class="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
					{#if user_id}
						<img src={avatar} alt="your user pic" />
					{:else}
						<svg
							class="absolute -left-1 h-12 w-12 text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clip-rule="evenodd"
							></path>
						</svg>
					{/if}
				</div>
			</button>
			<!-- Dropdown menu -->
			<!-- <div
				class="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
				id="user-dropdown"
			>
				<div class="px-4 py-3">
					<span class="block text-sm text-gray-900 dark:text-white">{displayName}</span>
				</div>
				<ul class="py-2" aria-labelledby="user-menu-button">
					<li>
						<p class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
							Settings
						</p>
					</li>
					<li>
						<a
							href="/"
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" on:click={handleSignOut}
							>Sign out</a
						>
					</li>
				</ul>
			</div> -->
			<button
				data-collapse-toggle="navbar-user"
				type="button"
				class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-user"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
		</div>
		<div
			class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
			id="navbar-user"
		>
			<ul
				class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900"
			>
				<li>
					<a
						href="/calendar"
						class="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
						aria-current="page">My Calendar</a
					>
				</li>
				<li>
					<a
						href="/shopping-list"
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>My Shopping List</a
					>
				</li>
				<li>
					<a
						href="/recipes"
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>My Recipes</a
					>
				</li>
				<li>
					<a
						href="/"
						class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						on:click={handleSignOut}>Sign out</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
