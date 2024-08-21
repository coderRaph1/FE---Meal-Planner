<script>
    import 'add-to-calendar-button';
    let name;
    console.log(name,'>>>>')

  
</script> 


<section class="mx-auto flex items-center flex-col">
<section class="flex flex-row items-center justify-between border border-zinc-950 max-w-md w-2/3 my-2 pl-8">
  <article>Meal Plan</article>
  <add-to-calendar-button
  label='Add a meal'
  name="Meal"
  options='Google'
  location="World Wide Web"
  startDate="2024-08-22"
  endDate="2024-08-22"
  startTime="10:15"
  endTime="23:30"
  timeZone="America/Los_Angeles" 
  value={name} on:input={e => name = e.target.value}
  >
</add-to-calendar-button>
</section>
<section class="flex flex-row items-center justify-between border border-zinc-950 max-w-md w-2/3 my-2 pl-8">
  <article>Meal Plan</article>
  <add-to-calendar-button
  label='Add a meal'
    name="Title"
    options='Google'
    location="World Wide Web"
    startDate="2024-08-22"
    endDate="2024-08-22"
    startTime="10:15"
    endTime="23:30"
    timeZone="America/Los_Angeles"
  ></add-to-calendar-button>
</section>

<section class="flex flex-row items-center justify-between border border-zinc-950 max-w-md w-2/3 my-2 pl-8">
  <article>Meal Plan</article>
  <add-to-calendar-button
  label='Add a meal'
    name="Title"
    options='Google'
    location="World Wide Web"
    startDate="2024-08-22"
    endDate="2024-08-22"
    startTime="10:15"
    endTime="23:30"
    timeZone="America/Los_Angeles"
  ></add-to-calendar-button>
  
</section>
<section class="flex flex-row items-center justify-between border border-zinc-950 max-w-md w-2/3 my-2 pl-8">
  <article>Meal Plan</article>
  <add-to-calendar-button
  label='Add a meal'
    name="Title"
    options='Google'
    location="World Wide Web"
    startDate="2024-08-22"
    endDate="2024-08-22"
    startTime="10:15"
    endTime="23:30"
    timeZone="America/Los_Angeles"
  ></add-to-calendar-button>
</section>
</section>