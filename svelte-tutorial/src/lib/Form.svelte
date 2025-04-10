<script>
    let { handleUpdateData, handleCloseModal } = $props();

    let name = $state("");

    let currYear = new Date().getFullYear();
    let day = $state(1);
    let month = $state(1);
    let year = $state(currYear);

    let lifeExpectancy = $state(80);

    // Generate numeric options
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const years = Array.from({ length: 100 }, (_, i) => currYear - i);
</script>

<section id="form">
    <div>
        <h4 class="text-gradient">Your Details</h4>
        <button
            aria-label="button"
            class="link-button"
            onclick={handleCloseModal}
        >
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
    <div>
        <label for="name">Name</label>
        <input bind:value={name} type="text" id="name" required />
    </div>
    <div>
        <div>Birthday</div>
        <div class="bday">
            <select bind:value={day}>
                {#each days as day}
                    <option value={day}>{day}</option>
                {/each}
            </select>
            <select bind:value={month}>
                {#each months as month, mI}
                    <option value={mI + 1}>{month}</option>
                {/each}
            </select>
            <select bind:value={year}>
                {#each years as year}
                    <option value={year}>{year}</option>
                {/each}
            </select>
        </div>
    </div>
    <div>
        <label for="lifeExpectancy">Life Expectancy (years)</label>
        <input
            type="number"
            required
            max={120}
            id="lifeExpectancy"
            bind:value={lifeExpectancy}
        />
    </div>
    <button
        onclick={() => {
            handleUpdateData(name, `${year}-${month}-${day}`, lifeExpectancy);
        }}>Save</button
    >
</section>
