function startCountdown() {
    const now = new Date().getTime();
    const eventDate = new Date(now + 10 * 24 * 60 * 60 * 1000).getTime();

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const timeLeft = eventDate - currentTime;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            document.querySelector(".countdown").innerHTML = "<h2>The hackathon has started!</h2>";
            return;
        }
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}
document.addEventListener("DOMContentLoaded", startCountdown);
