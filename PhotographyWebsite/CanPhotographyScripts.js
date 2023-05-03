<script>
    // Rotating text index
    let current = 0;

    // Array of adjectives
    const adjectives = ["Classic", "Candid", "Fresh", "Elevated", "Heartfelt"];
    // Get DOM element for where the adjective will be placed
    const rotatingText = document.getElementsByClassName('rotating-text');

    // Set timer to change the adjective every 2.5 seconds
    setInterval(function() {
        rotatingText[0].innerText = adjectives[current].toUpperCase();
    // rotatingText[0].style.opacity = '1';
    // rotatingText[0].style.transform = 'translateY(0)';

    // Increment the index of the current adjective
        current++;

    // If the index is greater than or equal to the number of adjectives, reset it to 0
        if (current >= adjectives.length) {
            current = 0
        }
    }, 2500);
</script>