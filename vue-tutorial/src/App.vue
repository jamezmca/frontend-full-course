<script setup>
import {computed, onMounted, ref, watchEffect} from 'vue'
import Calendar from './components/Calendar.vue';
import Clocks from './components/Clocks.vue';
import Hero from './components/Hero.vue';
import Layout from './components/layouts/Layout.vue';
import Summary from './components/Summary.vue';
import Form from './components/Form.vue'

import {calculateTimeLeft, getLifePercentageLived} from './utils'
import Portal from './components/Portal.vue';

const defaultBD = '1995-06-15'
const defaultLE = 80
const birthDate = ref(defaultBD)
const lifeExpectancy = ref(defaultLE)
const name = ref('james')
const data = ref(calculateTimeLeft(defaultBD, defaultLE))
console.log(data)
let percentage = computed(() => getLifePercentageLived(birthDate.value, lifeExpectancy.value))

const showModal = ref(false)
function handleToggleModal() {
  showModal.value = !showModal.value
}

function handleUpdateData(n, b, e) {
  if (!n || !b || !e) {return }

  // save new data to localstorage browser database
  localStorage.setItem('formData', JSON.stringify({
    name: n,
    birthDate: b,
    lifeExpectancy: e
  }))

  name.value = n
  birthDate.value = b
  lifeExpectancy.value = parseInt(e)
  data.value = calculateTimeLeft(b, parseInt(e))
  showModal.value = false
}

function resetData() {
  name.value = 'James'
  birthDate.value = defaultBD
  lifeExpectancy.value = defaultLE
  data.value = calculateTimeLeft(defaultBD, defaultLE)
  localStorage.clear()
}

const totalProps = {
  birthDate, 
  lifeExpectancy, 
  name,
  data,
  percentage
}

onMounted(() => {
  // is executed on component mount
  if (!localStorage) {return}
  if (localStorage.getItem('formData')) {
    const { name: n, birthDate: b, lifeExpectancy: e } = JSON.parse(localStorage.getItem('formData'))
    name.value = n
    birthDate.value = b
    lifeExpectancy.value = parseInt(e)
    data.value = calculateTimeLeft(b, parseInt(e))
  }
})

watchEffect((onCleanup) => {
  const interval = setInterval(() => {
    data.value = calculateTimeLeft(birthDate.value, lifeExpectancy.value)
  }, 1000)

  onCleanup(() => clearInterval(interval))
})

</script>

<template>
  <Layout>
    <Portal :handleCloseModal="handleToggleModal" :showModal="showModal">
      <Form :handleCloseModal="handleToggleModal" :handleUpdateData="handleUpdateData"/>
    </Portal>
    <Hero :resetData="resetData" :name="name" :data="data" :handleToggleModal="handleToggleModal" :percentage="percentage" />
    <Clocks v-bind="totalProps" />
    <Calendar v-bind="totalProps" />
    <Summary />
  </Layout>
</template>

<style scoped></style>
