document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.register__form');
    const fullname = document.getElementById("nama_lengkap");
    const email = document.getElementById("email");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form is valid. Data can be submitted.');
        } else {
            alert('Please fill in all required fields.');
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate each required input
        const inputs = form.querySelectorAll('.register__input[required]');
        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        // Additional validation for name and email
        if (!/^[a-zA-Z\s]+$/.test(fullname.value)) {
            isValid = false;
            alert("Nama harus berisi teks saja");
            fullname.classList.add('error');
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            isValid = false;
            alert("Email tidak valid");
            email.classList.add('error');
        }

        return isValid;
    }

    // Custom styling for select dropdown
    const selectInputs = form.querySelectorAll('select');
    selectInputs.forEach(function(select) {
        select.addEventListener('change', function() {
            this.classList.remove('error');
        });
    });
});
