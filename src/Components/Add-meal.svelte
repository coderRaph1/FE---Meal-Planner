<script>
	import 'add-to-calendar-button';
	import { atcb_action } from 'add-to-calendar-button';
	let breakfast = '',
		lunch = '',
		dinner = '',
		extras = '';
	const config = {
		name: '',
		description:
			'Check out the maybe easiest way to include Add to Calendar Buttons to your web projects:[br]→ [url]https://add-to-calendar-button.com/|Click here![/url]',
		startDate: '2024-08-24',
		startTime: '10:15',
		endTime: '23:30',
		options: ['Google', 'iCal'],
		timeZone: 'America/Los_Angeles'
	};

	function addBreakfast() {
		config.name = breakfast;
	}
	function addLunch() {
		config.name = lunch;
	}
	function addDinner() {
		config.name = dinner;
	}
	function addExtras() {
		config.name = extras;
	}
</script>

<section class="mx-auto flex flex-col items-center">
	<section
		class="my-2 flex w-5/12 flex-row items-center justify-between border border-zinc-950 pl-8"
	>
		<label for="breakfast"
			>Breakfast
			<input
				type="text"
				name="breakfast"
				id="brakfast"
				class="border border-zinc-950"
				bind:value={breakfast}
			/>
		</label>
		<button type="submit" on:click={addBreakfast}>Set My Meal</button>
		<add-to-calendar-button
			label="Add a meal"
			name={config.name}
			options="Google"
			location="World Wide Web"
			startDate="2024-08-22"
			endDate="2024-08-22"
			startTime="10:15"
			endTime="23:30"
			timeZone="America/Los_Angeles"
		>
		</add-to-calendar-button>
	</section>
	<section
		class="my-2 flex w-5/12 flex-row items-center justify-between border border-zinc-950 pl-8"
	>
		<label for="breakfast"
			>Lunch
			<input
				type="text"
				name="breakfast"
				id="brakfast"
				class="border border-zinc-950"
				bind:value={lunch}
			/>
		</label>
		<button type="submit" on:click={addLunch}>Set My Meal</button>
		<add-to-calendar-button
			label="Add a meal"
			name={config.name}
			options="Google"
			location="World Wide Web"
			startDate="2024-08-22"
			endDate="2024-08-22"
			startTime="10:15"
			endTime="23:30"
			timeZone="America/Los_Angeles"
		></add-to-calendar-button>
	</section>

	<section
		class="my-2 flex w-5/12 flex-row items-center justify-between border border-zinc-950 pl-8"
	>
		<label for="breakfast"
			>Dinner
			<input
				type="text"
				name="breakfast"
				id="brakfast"
				class="border border-zinc-950"
				bind:value={dinner}
			/>
		</label>
		<button type="submit" on:click={addLunch}>Set My Meal</button>
		<add-to-calendar-button
			label="Add a meal"
			name={config.name}
			options="Google"
			location="World Wide Web"
			startDate="2024-08-22"
			endDate="2024-08-22"
			startTime="10:15"
			endTime="23:30"
			timeZone="America/Los_Angeles"
		></add-to-calendar-button>
	</section>
	<section
		class="my-2 flex w-5/12 flex-row items-center justify-between border border-zinc-950 pl-8"
	>
		<label for="breakfast"
			>Add extras
			<input
				type="text"
				name="breakfast"
				id="brakfast"
				class="border border-zinc-950"
				bind:value={extras}
			/>
		</label>
		<button type="submit" on:click={addLunch}>Set My Meal</button>
		<add-to-calendar-button
			label="Add a meal"
			name={config.name}
			options="Google"
			location="World Wide Web"
			startDate="2024-08-22"
			endDate="2024-08-22"
			startTime="10:15"
			endTime="23:30"
			timeZone="America/Los_Angeles"
		></add-to-calendar-button>
	</section>
</section>
