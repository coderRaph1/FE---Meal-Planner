<script>
    import 'add-to-calendar-button';
    import { atcb_action } from "add-to-calendar-button";
    console.log(atcb_action,'<<atcb_action')
 let breakfast="",lunch="",dinner="",extras=""
 const config = {
   name: "",
   description: "Check out the maybe easiest way to include Add to Calendar Buttons to your web projects:[br]→ [url]https://add-to-calendar-button.com/|Click here![/url]",
   startDate: "2024-08-24",
   startTime: "10:15",
   endTime: "23:30",
   options: ["Google", "iCal"],
   timeZone: "America/Los_Angeles"
 };

 function addBreakfast() {
   config.name = breakfast
   
   }
   function addLunch() {
   config.name = lunch
   }
   function addDinner() {
   config.name = dinner
   }
   function addExtras() {
   config.name = extras
   }
</script> 


<section class="mx-auto flex items-center flex-col">
<section class="flex flex-row items-center justify-between border border-zinc-950 w-5/12 my-2 pl-8">
  

<label for="breakfast">Breakfast 
  <input type="text" name="breakfast" id="brakfast" class="border border-zinc-950" bind:value={breakfast}>
</label>
<button type="submit" on:click={addBreakfast}>Set My Meal</button>
  <add-to-calendar-button
  label='Add a meal'
  name={config.name}
  options='Google'
  location="World Wide Web"
  startDate="2024-08-22"
  endDate="2024-08-22"
  startTime="10:15"
  endTime="23:30"
  timeZone="America/Los_Angeles"
  >
</add-to-calendar-button>
<a href="/choose-meals"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  <span class="sr-only">Icon description</span>
  </button></a>
</section>

<section class="flex flex-row items-center justify-between border border-zinc-950 w-5/12 my-2 pl-8">
  <label for="breakfast">Lunch 
    <input type="text" name="breakfast" id="brakfast" class="border border-zinc-950" bind:value={lunch}>
  </label>
  <button type="submit" on:click={addLunch}>Set My Meal</button>
  <add-to-calendar-button
  label='Add a meal'
    name={config.name}
    options='Google'
    location="World Wide Web"
    startDate="2024-08-22"
    endDate="2024-08-22"
    startTime="10:15"
    endTime="23:30"
    timeZone="America/Los_Angeles"
  ></add-to-calendar-button>
  <a href="/choose-meals"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    <span class="sr-only">Icon description</span>
    </button></a>
</section>

<section class="flex flex-row items-center justify-between border border-zinc-950 w-5/12 my-2 pl-8">
  <label for="breakfast">Dinner 
    <input type="text" name="breakfast" id="brakfast" class="border border-zinc-950" bind:value={dinner}>
  </label>
  <button type="submit" on:click={addLunch}>Set My Meal</button>
  <add-to-calendar-button
  label='Add a meal'
    name={config.name}
    options='Google'
    location="World Wide Web"
    startDate="2024-08-22"
    endDate="2024-08-22"
    startTime="10:15"
    endTime="23:30"
    timeZone="America/Los_Angeles"
  ></add-to-calendar-button>
  <a href="/choose-meals"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    <span class="sr-only">Icon description</span>
    </button></a>
</section>
<section class="flex flex-row items-center justify-between border border-zinc-950 w-5/12 my-2 pl-8">
  
  <label for="breakfast">Add extras 
    <input type="text" name="breakfast" id="brakfast" class="border border-zinc-950" bind:value={extras}>
  </label>
  <button type="submit" on:click={addLunch}>Set My Meal</button>
  <add-to-calendar-button
  label='Add a meal'
    name={config.name}
    options='Google'
    location="World Wide Web"
    startDate="2024-08-22"
    endDate="2024-08-22"
    startTime="10:15"
    endTime="23:30"
    timeZone="America/Los_Angeles"
  ></add-to-calendar-button>
  <a href="/choose-meals"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
    <span class="sr-only">Icon description</span>
    </button></a>
</section>
</section>