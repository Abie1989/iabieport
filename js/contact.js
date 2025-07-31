<script>
  // Bootstrap-style validation
  (function () {
    'use strict';
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        alert('Thank you! Your message has been sent.');
      }
      form.classList.add('was-validated');
    }, false);
  })();
</script>