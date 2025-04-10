<script>
    let { lifeExpectancy, birthDate } = $props();

    const finalYear = $derived(
        parseInt(birthDate.split("-")[0]) + lifeExpectancy,
    );
</script>

<section id="summary">
    <div>
        <p class="text-gradient">
            <i class="fa-solid fa-heart-crack"></i>
            You'll probably die in the year <strong>{finalYear}</strong> at the
            age of <strong>{lifeExpectancy}</strong>.
        </p>
    </div>
    <h4>
        Yesterday is history, tomorrow is a mystery, and today is a gift. That's
        why they call it the present.
    </h4>
    <h4>Master Oogway</h4>
</section>
