import "../style.dist.css"; // Import the global styles
import { Item } from "../types";
import { env } from "../util/env";

const id = new URLSearchParams(window.location.search).get("id");

if (!id) {
  throw new Error("No ID provided");
}

fetch(`${env.VITE_API_URL}/${id}`).then(async (response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const DetailContainer = document.getElementById("detail-container")!;
  const { item } = (await response.json()) as { item: Item };

  DetailContainer.innerHTML = `
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
       <div class="flex justify-around items-center px-4 py-5 sm:px-6">
            <div>
                <img src="${item.image}" alt="${item.title}" class="rounded-md hover:scale-110 transition-all duration-300 ease-in-out" width="250" height="250" />
            </div>
            <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">${item.title}</h3>
                <p class="text-sm text-gray-500">${item.byline}</p>

                <div class="mt-4">
                    <a href="/goal" class="text-indigo-600 hover:text-indigo-900">Back to Goals</a>
                </div>
            </div>
        </div>
    </div>
  `;
});
