<script>
    import { getTimePercentage } from "../utils";

    let { data } = $props();
    let snapshot = $derived(getTimePercentage());
    console.log(data)
</script>

<section id="clocks">
    <p><i>Time remaining in different units.</i></p>
    <div class="clocks-grid">
        {#each Object.keys(data) as clock, clockIndex}
            <div class="card clock-card">
                <div class="circle" style:rotate="{snapshot[clock]}deg">
                    <div class="ticker {clock}"></div>
                </div>
                <div>
                    <h5>{data[clock]}</h5>
                    <p>{clock}</p>
                </div>
            </div>
        {/each}
    </div>
</section>
