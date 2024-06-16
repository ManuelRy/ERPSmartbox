<script setup>
import debounce from 'lodash/debounce';
</script>
<template>
    <Scroll-progress style="z-index: 1051 !important" />
    <NavBar style="z-index: 1050 !important; position: relative" />
    <ProfileCard/>
    <Scroller />
    <Footer />
</template>