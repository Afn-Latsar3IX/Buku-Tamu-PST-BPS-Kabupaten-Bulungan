document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.register__form');
    const fullname = document.getElementById("nama_lengkap");
    const email = document.getElementById("email");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            // Form is valid, proceed with submission or other actions
            alert('Form is valid. Data can be submitted.');
        } else {
            // Form is not valid, display error messages or take other actions
            // Errors are handled within validateForm()
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

        // Validasi nama hanya berisi huruf
        var namaRegex = /^[a-zA-Z\s]+$/;
        if (!namaRegex.test(fullname.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Nama hanya boleh berisi huruf!'
            });
            isValid = false;
            fullname.classList.add('error');
        } else {
            fullname.classList.remove('error');
        }

        // Validasi format email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Format email tidak valid!'
            });
            isValid = false;
            email.classList.add('error');
        } else {
            email.classList.remove('error');
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
