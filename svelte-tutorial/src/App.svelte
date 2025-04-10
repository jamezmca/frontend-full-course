<script>
  import Calendar from "./lib/Calendar.svelte";
  import Clocks from "./lib/Clocks.svelte";
  import Hero from "./lib/Hero.svelte";
  import Layout from "./lib/layouts/Layout.svelte";
  import Summary from "./lib/Summary.svelte";
</script>

<Layout>
  {#snippet headache({
    data,
    birthDate,
    name,
    percentage,
    lifeExpectancy,
    handleToggleModal,
    resetData,
  })}
    <Hero {resetData} {name} {percentage} {data} {handleToggleModal} />
    <Clocks {data} />
    <Calendar {data} {lifeExpectancy} />
    <Summary {birthDate} {lifeExpectancy} />
  {/snippet}
</Layout>
