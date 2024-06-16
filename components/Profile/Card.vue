<template>
    <div>
      <h1>Profile Page</h1>
      <p v-if="userMetadata">Username: {{ userMetadata.username }}</p>
      <p v-else>User metadata is not available.</p>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params }) {
      try {
        // Replace with your actual data fetching logic
        const user = await fetchUser(params.id); // Assuming fetchUser is a function that fetches user data
        return { user };
      } catch (error) {
        console.error("Error fetching user data:", error);
        return { user: null };
      }
    },
    computed: {
      userMetadata() {
        return this.user && this.user.user_metadata ? this.user.user_metadata : null;
      }
    }
  }
  </script>
  