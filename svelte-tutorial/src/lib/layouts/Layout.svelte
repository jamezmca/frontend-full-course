<script>
    import { calculateTimeLeft, getLifePercentageLived } from "../../utils";
    import Form from "../Form.svelte";
    import Portal from "../Portal.svelte";

    const { headache } = $props();

    let showModal = $state(false);
    function handleToggleModal() {
        showModal = !showModal;
    }

    let defaultBD = "1995-06-15";
    let defaultLE = 80;
    let birthDate = $state(defaultBD);
    let lifeExpectancy = $state(defaultLE);
    let name = $state("james");
    let data = $state(calculateTimeLeft(defaultBD, defaultLE));

    let percentage = $derived(
        getLifePercentageLived(birthDate, lifeExpectancy),
    );

    function handleUpdateData(n, b, e) {
        if (!n || !b || !e) {
            return;
        }

        // save to local storage
        localStorage.setItem(
            "formData",
            JSON.stringify({
                name: n,
                birthDate: b,
                lifeExpectancy: e,
            }),
        );

        name = n;
        birthDate = b;
        lifeExpectancy = parseInt(e);
        data = calculateTimeLeft(b, parseInt(e));
        showModal = false;
    }

    function resetData() {
        name = "James";
        birthDate = defaultBD;
        lifeExpectancy = defaultLE;
        data = calculateTimeLeft(defaultBD, defaultLE);
        localStorage.clear();
    }

    $effect(() => {
        const interval = setInterval(() => {
            data = calculateTimeLeft(birthDate, lifeExpectancy);
        }, 1000);
        return () => clearInterval(interval);
    });

    $effect(() => {
        if (!localStorage) {
            // exits function if no localstorage db available
            return;
        }

        //if we get here, we have confirmed we have a databasse
        if (localStorage.getItem("formData")) {
            // that means that we found some data under the key formData
            const {
                name: n,
                birthDate: b,
                lifeExpectancy: e,
            } = JSON.parse(localStorage.getItem("formData"));
            name = n;
            birthDate = b;
            lifeExpectancy = parseInt(e);
            data = calculateTimeLeft(b, parseInt(e));
        }
    });
</script>

{#if showModal}
    <Portal handleCloseModal={handleToggleModal}>
        {#snippet form()}
            <Form {handleUpdateData} />
        {/snippet}
    </Portal>
{/if}

<header>
    <h1 class="text-medium text-gradient">Unalive</h1>
</header>

<main>
    <!-- here is where the children will go -->
    {@render headache({
        data,
        birthDate,
        name,
        percentage,
        lifeExpectancy,
        handleToggleModal,
        resetData,
    })}
</main>
<footer>
    <small>Created by</small>
    <a target="_blank" href="/">
        <img
            src="https://media.licdn.com/dms/image/v2/C5603AQG6Q4W3kWANtw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1630988413596?e=1749081600&v=beta&t=-LtjJJVezcYjUDeQrOM3sl0roJ1TsunuHK0ynMnPuuY"
            alt="pfp"
        />
        <p>@jamezmcarthur</p>
        <i class="fa-brands fa-linkedin-in"></i>
    </a>
</footer>

<style></style>
