<script>
    const { form, handleCloseModal } = $props();
</script>

<div class="portal-container">
    <div
        role="button"
        tabindex="0"
        onkeydown={() => {}}
        onclick={handleCloseModal}
        class="portal-underlay"
    ></div>
    <div class="portal-content">
        {@render form()}
    </div>
</div>
