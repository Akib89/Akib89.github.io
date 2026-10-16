(function () {
    'use strict';

    var form = document.getElementById('myForm');

    if (!form) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        var formData = new FormData(form);
        var subject = String(formData.get('subject') || 'Portfolio inquiry').trim();
        var projectUrl = String(formData.get('url') || '').trim();
        var message = [
            'Name: ' + String(formData.get('name') || '').trim(),
            'Email: ' + String(formData.get('email') || '').trim(),
            'Phone: ' + String(formData.get('phone') || '').trim(),
            'Project URL: ' + (projectUrl || 'Not provided'),
            '',
            'Message:',
            String(formData.get('body') || '').trim()
        ].join('\r\n');

        window.location.href = 'mailto:' + form.dataset.recipient
            + '?subject=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(message);
    });
}());
