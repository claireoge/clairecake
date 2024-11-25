document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        const bookingDetails = {
            name: name,
            email: email,
            phone: phone,
            service: service,
            date: date,
            time: time
        };

        fetch('https://example.com/submit-appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Your appointment request has been submitted!');
            bookingForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting your request. Please try again.');
        });
    });
});