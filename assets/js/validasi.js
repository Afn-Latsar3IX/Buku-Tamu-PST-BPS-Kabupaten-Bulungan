document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#register-form');
    const fullname = document.getElementById("nama_lengkap");
    const email = document.getElementById("email");
    const phone = document.getElementById("no_hp");

    function validateForm() {
        let isValid = true;
        const nama = fullname.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();

        // Validasi nama hanya berisi huruf
        var namaRegex = /^[a-zA-Z\s]+$/;
        if (!namaRegex.test(nama)) {
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
        if (emailValue && !emailRegex.test(emailValue)) {
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

        // Validasi nomor telepon Indonesia
        var phoneRegex = /^(\+62|62|0)8[1-9][0-9]{7,10}$/;
        if (phoneValue && !phoneRegex.test(phoneValue)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Format nomor telepon tidak valid!'
            });
            isValid = false;
            phone.classList.add('error');
        } else {
            phone.classList.remove('error');
        }

        // Pastikan salah satu dari email atau nomor telepon terisi
        if (!emailValue && !phoneValue) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email atau nomor telepon harus diisi salah satu!'
            });
            isValid = false;
            email.classList.add('error');
            phone.classList.add('error');
        } else {
            email.classList.remove('error');
            phone.classList.remove('error');
        }

        // Validate other required fields
        const inputs = form.querySelectorAll('.register__input[required]');
        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Field ${input.name} is required!`
                });
            } else {
                input.classList.remove('error');
            }
        });

        return isValid;
    }

    // Custom styling for select dropdown
    const selectInputs = form.querySelectorAll('select');
    selectInputs.forEach(function(select) {
        select.addEventListener('change', function() {
            this.classList.remove('error');
        });
    });

    // Export validateForm to global scope
    window.validateForm = validateForm;
});
