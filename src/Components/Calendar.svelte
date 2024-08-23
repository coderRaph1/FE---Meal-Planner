<script>
	import { onMount } from 'svelte';
	import AddMeal from './Add-meal.svelte';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { auth } from '../firebase.config';

	let selectedDay = null;
	let weekDates = [];

	function getSelectedDayFromUrl() {
		const urlParams = new URLSearchParams(window.location.search);
		return urlParams.get('selectedDay');
	}

	function selectDay(day) {
		window.location.href = `?selectedDay=${day}`;
	}

	function generateWeekDates() {
		const today = new Date();
		const weekStart = today.getDate() - today.getDay();
		const week = [];

		for (let i = 0; i < 7; i++) {
			const date = new Date(today);
			date.setDate(weekStart + i);
			week.push({
				day: date.getDate(),
				weekday: date.toLocaleDateString('en-UK', { weekday: 'short' }),
				dateStr: date.toISOString().slice(0, 10)
			});
		}

		return week;
	}
	onMount(() => {
		selectedDay = getSelectedDayFromUrl();
		weekDates = generateWeekDates();
	});
</script>

<div id="calendar" class="calendar">
	{#each weekDates as date}
		<div
			id="day-{date.day}"
			class="day {selectedDay === date.dateStr ? 'selected' : ''}"
			on:click={() => selectDay(date.dateStr)}
		>
			<p>{date.weekday}</p>
			<p>{date.day}</p>
		</div>
	{/each}
</div>

<AddMeal />

<style>
	.calendar {
		display: flex;
		justify-content: center;
		gap: 8px;
		margin-top: 20px;
		flex-wrap: wrap;
	}

	.day {
		cursor: pointer;
		transition: all 0.3s;
		padding: 16px;
		text-align: center;
		border-radius: 8px;
		margin: 4px;
		width: 60px;
	}

	.day.selected {
		background-color: #6b46c1;
		color: #f7fafc;
		font-weight: bold;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.day:hover {
		background-color: #6b46c1;
		color: #f7fafc;
	}

	@media (max-width: 600px) {
		.day {
			width: 50px;
		}
	}
</style>
