document.addEventListener('DOMContentLoaded', function() {
   const form = document.querySelector('.register__form');

   form.addEventListener('submit', function(event) {
       event.preventDefault();
       if (validateForm()) {
           // Form is valid, proceed with submission or other actions
           alert('Form is valid. Data can be submitted.');
       } else {
           // Form is not valid, display error messages or take other actions
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
