<script>
	import 'add-to-calendar-button';
	import { atcb_action } from 'add-to-calendar-button';
	console.log(atcb_action, '<<atcb_action');

	// Initialize meal choices with values from localStorage or default to empty strings
	let breakfast = localStorage.getItem('breakfast') || '';
	let lunch = localStorage.getItem('lunch') || '';
	let dinner = localStorage.getItem('dinner') || '';
	let extras = localStorage.getItem('extras') || '';

	$: config = {
		breakfast: breakfast,
		lunch: lunch,
		dinner: dinner,
		extras: extras,
	};

	function addBreakfast() {
		config.breakfast = breakfast;
		localStorage.setItem('breakfast', breakfast); // Save breakfast to localStorage
	}

	function addLunch() {
		config.lunch = lunch;
		localStorage.setItem('lunch', lunch); // Save lunch to localStorage
	}

	function addDinner() {
		config.dinner = dinner;
		localStorage.setItem('dinner', dinner); // Save dinner to localStorage
	}

	function addExtras() {
		config.extras = extras;
		localStorage.setItem('extras', extras); // Save extras to localStorage
	}
</script>

<section class="mx-auto grid w-full grid-cols-1">
	<section class="m-2 flex w-fit flex-wrap justify-between bg-teal-200 p-2 outline outline-1">
		<label class="mb-2 flex grow flex-row font-semibold" for="breakfast"
			>Breakfast
			<input
				type="text"
				name="breakfast"
				id="breakfast"
				class="ml-2 grow outline outline-1"
				bind:value={breakfast}
			/>
		</label>
		<div class="flex w-full flex-row items-center justify-center">
			<button
				type="submit"
				class="h-fit bg-teal-600 px-2 text-sm focus:bg-teal-600"
				on:click={addBreakfast}>Set My Meal</button
			>
			<div class="mx-auto">
				<add-to-calendar-button
					label="Add to Google"
					name={config.breakfast}
					options="Google"
					location="World Wide Web"
					startDate="2024-08-22"
					endDate="2024-08-22"
					startTime="10:15"
					endTime="23:30"
					timeZone="America/Los_Angeles"
				>
				</add-to-calendar-button>
			</div>
			<a href="/choose-meals" class=""
				><button
					type="button"
					class="aspect-square rounded-lg bg-teal-600 p-2 text-center text-sm font-medium text-white"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
					<span class="sr-only">Icon description</span>
				</button></a
			>
		</div>
	</section>

	<section class="m-2 flex w-fit flex-wrap justify-between bg-teal-200 p-2 outline outline-1">
		<label class="mb-2 flex grow flex-row font-semibold" for="lunch"
			>Lunch
			<input
				type="text"
				name="lunch"
				id="lunch"
				class="ml-2 grow outline outline-1"
				bind:value={lunch}
			/>
		</label>
		<div class="flex w-full flex-row items-center justify-center">
			<button
				type="submit"
				class="h-fit bg-teal-600 px-2 text-sm focus:bg-teal-600"
				on:click={addLunch}>Set My Meal</button
			>
			<div class="mx-auto">
				<add-to-calendar-button
					label="Add to Google"
					name={config.lunch}
					options="Google"
					location="World Wide Web"
					startDate="2024-08-22"
					endDate="2024-08-22"
					startTime="10:15"
					endTime="23:30"
					timeZone="America/Los_Angeles"
				>
				</add-to-calendar-button>
			</div>
			<a href="/choose-meals" class=""
				><button
					type="button"
					class="aspect-square rounded-lg bg-teal-600 p-2 text-center text-sm font-medium text-white"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
					<span class="sr-only">Icon description</span>
				</button></a
			>
		</div>
	</section>

	<section class="m-2 flex w-fit flex-wrap justify-between bg-teal-200 p-2 outline outline-1">
		<label class="mb-2 flex grow flex-row font-semibold" for="dinner"
			>Dinner
			<input
				type="text"
				name="dinner"
				id="dinner"
				class="ml-2 grow outline outline-1"
				bind:value={dinner}
			/>
		</label>
		<div class="flex w-full flex-row items-center justify-center">
			<button
				type="submit"
				class="h-fit bg-teal-600 px-2 text-sm focus:bg-teal-600"
				on:click={addDinner}>Set My Meal</button
			>
			<div class="mx-auto">
				<add-to-calendar-button
					label="Add to Google"
					name={config.dinner}
					options="Google"
					location="World Wide Web"
					startDate="2024-08-22"
					endDate="2024-08-22"
					startTime="10:15"
					endTime="23:30"
					timeZone="America/Los_Angeles"
				>
				</add-to-calendar-button>
			</div>
			<a href="/choose-meals" class=""
				><button
					type="button"
					class="aspect-square rounded-lg bg-teal-600 p-2 text-center text-sm font-medium text-white"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
					<span class="sr-only">Icon description</span>
				</button></a
			>
		</div>
	</section>

	<section class="m-2 flex w-fit flex-wrap justify-between bg-teal-200 p-2 outline outline-1">
		<label class="mb-2 flex grow flex-row font-semibold" for="extras"
			>Extras
			<input
				type="text"
				name="extras"
				id="extras"
				class="ml-2 grow outline outline-1"
				bind:value={extras}
			/>
		</label>
		<div class="flex w-full flex-row items-center justify-center">
			<button
				type="submit"
				class="h-fit bg-teal-600 px-2 text-sm focus:bg-teal-600"
				on:click={addExtras}>Set My Meal</button
			>
			<div class="mx-auto">
				<add-to-calendar-button
					label="Add to Google"
					name={config.extras}
					options="Google"
					location="World Wide Web"
					startDate="2024-08-22"
					endDate="2024-08-22"
					startTime="10:15"
					endTime="23:30"
					timeZone="America/Los_Angeles"
				>
				</add-to-calendar-button>
			</div>
			<a href="/choose-meals" class=""
				><button
					type="button"
					class="aspect-square rounded-lg bg-teal-600 p-2 text-center text-sm font-medium text-white"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
					<span class="sr-only">Icon description</span>
				</button></a
			>
		</div>
	</section>
</section>
