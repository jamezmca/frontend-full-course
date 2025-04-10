<script setup>
    import { getTimePercentage } from '../utils';

    defineProps({
        data: Object
    })
    let snapshot = getTimePercentage()
    console.log(snapshot)
</script>

<template>
    <section id="clocks">
        <p><i>Time remaining in different units.</i></p>
        <div class="clocks-grid">
            <div class="card clock-card" v-for="(clock, index) in Object.keys(data.value)" :key="index">
                <div class="circle" :style="{rotate: snapshot[clock] + 'deg'}">
                    <div class="ticker" 
                    :class="{[clock]: true}"
                    ></div>
                </div>
                <div>
                    <h5>{{ data.value[clock] }}</h5>
                    <p>{{ clock }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
