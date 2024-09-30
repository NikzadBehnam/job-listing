import { fetchJobListings } from "./API/jobs.js"; // Correct import path

document.addEventListener("DOMContentLoaded", async () => {
  const jobListings = document.getElementById("job-listings");

  // Function to render job data into HTML
  function renderJobs(jobs) {
    jobListings.innerHTML = ""; // Clear the section before rendering
    jobs.forEach((job) => {
      const jobCard = `
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold">${job.title}</h2>
          <p class="text-gray-600">Company Placeholder</p>
          <p class="text-gray-500">Location Placeholder</p>
          <p class="text-green-600">Salary Placeholder</p>
          <p class="text-gray-700 mt-2">${job.body}</p>
        </div>
      `;
      jobListings.innerHTML += jobCard;
    });
  }

  // Fetch and render job listings from the API
  const jobs = await fetchJobListings(5); // Limit to 5 jobs
  renderJobs(jobs);
});
