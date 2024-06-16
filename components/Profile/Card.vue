<script setup>
definePageMeta({
    layout: "custom",
}
);
const supabase = useSupabaseClient();
const login = async () => {
    const { error } = supabase.auth.signInWithOAuth(
        {
            provider: "google",
        }
    )
};
const user = useSupabaseUser();
</script>
<template>
<section class="">
     <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img v-if="user" class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="user.user_metadata.avatar_url || '/img/default_avatar.jpg'" alt="User image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name: {{ user.user_metadata.full_name }}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Email: {{ user.email }}</span>
        <div v-if="user" class="text-sm text-gray-500 dark:text-gray-400">
            <p>Last sign-in: {{ new Date(user?.last_sign_in_at).toLocaleString() }}</p>
            <p>Phone: {{ user?.user_metadata?.phone }}</p>
            <p>Location: {{ user?.user_metadata?.location }}</p>
        </div>
    </div>
</section>
   

</template>