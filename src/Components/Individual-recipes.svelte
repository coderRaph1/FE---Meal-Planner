<script>
	import {  afterUpdate, onMount } from "svelte";
    import { getMealById } from "../utils/api";
    	import { page } from '$app/stores'

    let currentPath = '/'
	let mealData = {}
  
	$: currentPath = $page.url.pathname.split('/').filter(Boolean).pop() || '/'

    
    onMount(() => {
	  getMealById(currentPath).then((data) => {
		mealData = data[0]
	
	  });
	});

  </script>
  
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img class="rounded-t-lg" src={mealData.strMealThumb} alt="Recipe Image" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ingredients needed:</h5>
      </a>
      <ul class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <li>
          <label class="flex items-center">
            <input type="checkbox" class="mr-2">
            {mealData.strIngredient1}
          </label>
        </li>
        <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient2}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient3}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient4}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient5}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient6}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient7}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient8}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient9}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient10}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient11}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient12}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient13}
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2">
              {mealData.strIngredient14}
            </label>
          </li>
      </ul>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Instructions:</h5>
      <p>{mealData.strInstructions}</p>
    </div>
  </div>