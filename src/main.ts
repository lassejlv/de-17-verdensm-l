import "./style.dist.css";
import { env } from "./util/env";
import { Item } from "./types";

fetch(env.VITE_API_URL).then(async (response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const GoalContainer = document.getElementById("goal-container")!;
  const data = (await response.json()) as { items: Item[] };

  GoalContainer.innerHTML = `${data.items
    .map((item) => {
      return `
          <div class="bg-white p-4 rounded-md shadow-md my-4">
            <img src="${item.image}" alt="${item.title}" class="rounded-md hover:scale-110 transition-all duration-300 ease-in-out" />
            <h2 class="font-bold text-xl my-2">${item.title}</h2> 
            <p class="text-gray-500">${item.byline}</p>
            <a href="/goal/?id=${item.id}" style="background: #${item.color}" class="text-white px-4 py-2 rounded-md mt-4 inline-block">${item.title}</a>
          </div>
          `;
    })
    .join("")}`;
});
