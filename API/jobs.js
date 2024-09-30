export const fetchJobListings = async (limit = 5) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching job data: ${error}`);
    return [];
  }
};
