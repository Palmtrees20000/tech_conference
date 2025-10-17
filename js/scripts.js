
// Hamburger menu functionality
const navElement = document.querySelector("#primaryNav");
const btnElement = document.querySelector("#hamburgerBtn");

if (btnElement && navElement) {
    btnElement.addEventListener("click", () => {
        btnElement.classList.toggle("open");
        navElement.classList.toggle("open");
    });
}

// Speaker card flip functionality
document.addEventListener('DOMContentLoaded', function() {
    const speakerCards = document.querySelectorAll('.speaker-card');
    
    speakerCards.forEach(card => {
        // Handle click/tap to flip
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
        
        // Handle keyboard interaction (Enter or Space key)
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevent page scroll on spacebar
                this.classList.toggle('flipped');
            }
        });
        
        // Handle ESC key to flip back to front
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && this.classList.contains('flipped')) {
                this.classList.remove('flipped');
            }
        });
    });
});