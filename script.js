document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const skills = document.getElementById('skills').value;
    const availability = document.getElementById('availability').value;
    console.log('Profile Created:', { name, skills, availability });
});

document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value;
    console.log('Search for:', searchInput);
});

document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;
    console.log('Review Submitted:', { review, rating });
});

document.getElementById('message-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const message = document.getElementById('message').value;
    console.log('Message Sent:', message);
});