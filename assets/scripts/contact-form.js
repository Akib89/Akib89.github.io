(function () {
    'use strict';

    var form = document.getElementById('myForm');

    if (!form) {
        return;
    }

    var successMessage = form.querySelector('.message.success');
    var errorMessage = form.querySelector('.message.danger');
    var submitButton = form.querySelector('[type="submit"]');

    function showMessage(message) {
        successMessage.style.display = message === successMessage ? 'block' : 'none';
        errorMessage.style.display = message === errorMessage ? 'block' : 'none';

        window.setTimeout(function () {
            message.style.display = 'none';
        }, 5000);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        var formData = new FormData(form);
        var subject = String(formData.get('subject') || 'Portfolio inquiry').trim();
        formData.set('_subject', 'Portfolio inquiry: ' + subject);
        submitButton.disabled = true;

        fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData
        }).then(function (response) {
            if (!response.ok) {
                throw new Error('Message could not be sent.');
            }

            form.reset();
            showMessage(successMessage);
        }).catch(function () {
            showMessage(errorMessage);
        }).finally(function () {
            submitButton.disabled = false;
        });
    }, true);
}());
