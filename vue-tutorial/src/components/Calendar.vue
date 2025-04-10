<script setup>
    import { computed } from 'vue'
    const { data, lifeExpectancy } = defineProps({
        data: Object,
        lifeExpectancy: Object
    })

    const yearsArr = computed(() => [...Array(lifeExpectancy.value).keys()])
    const weeksArr = [...Array(52).keys()]
    const weekNum = computed(() => lifeExpectancy.value * 52 - parseInt(data.value['weeks']))
    const finalWeek = computed(() => lifeExpectancy.value * 52)

    function getWeeksArr(wksArr, yrIndex) {
        return wksArr.map((val, valIndex) => {
            const currWeek = yrIndex * 52 + valIndex
            const dotStyle = currWeek == finalWeek.value - 1 
                ? ' death' 
                : currWeek < weekNum.value 
                ? ' solid'
                : currWeek == weekNum.value 
                ? ' pulse' 
                : '' 
            return {week: val, currWeek, dotStyle}
        })
    }
</script>

<template>
    <section id="calendar">
        <p><i>Each square of dots represents 52 weeks / 1 year of your life.</i></p>
        <div class="dozen-grid">
            <div class="year-grid" v-for="(year, yearIndex) in yearsArr" :key="yearIndex">
                <div 
                v-for="(week, weekIndex) in getWeeksArr(weeksArr, yearIndex)"
                :key="weekIndex"
                class="dot"
                :class="week.dotStyle"  
                ></div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
