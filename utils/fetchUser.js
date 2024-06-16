// Example function to fetch user data
export async function fetchUser(userId) {
    try {
      // Replace with your actual API call
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      return null; // Return null or a default object in case of an error
    }
  }
  