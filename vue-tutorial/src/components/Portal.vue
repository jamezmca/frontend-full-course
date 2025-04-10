<script setup>
    defineProps({
        showModal: Boolean,
        handleCloseModal: Function
    })
</script>

<template>
    <Teleport v-if="showModal" to="#portal">
        <div class="portal-container">
            <div class="portal-underlay" role="button" tabindex="0" @click="handleCloseModal" ></div>    
            <div class="portal-content">
                <slot/>
            </div>    
        </div>
    </Teleport>
</template>

<style scoped></style>
