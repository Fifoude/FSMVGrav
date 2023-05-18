---
title: Contact
content:
    items: '@self.modular'
process:
    twig: true
cache_enable: false
form:
    name: contact
    fields:
        name:
            label: Nom
            placeholder: 'Entrer votre nom'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        email:
            label: Email
            placeholder: 'Entrer votre adresse email'
            type: email
            validate:
                required: true
        message:
            label: Message
            placeholder: 'Entrer votre message'
            type: textarea
            validate:
                required: true
    buttons:
        submit:
            type: submit
            value: Soumettre
        reset:
            type: reset
            value: Réinitialiser
    process:
        save:
            fileprefix: contact-
            dateformat: Ymd-His-u
            extension: txt
            body: '{% include ''forms/data.txt.twig'' %}'
        email:
            subject: '[Site Contact Form] {{ form.value.name|e }}'
            body: '{% include ''forms/data.html.twig'' %}'
        message: 'Thank you for getting in touch!'
        display: thankyou
---

# Formulaire de contact
{% include "forms/form.html.twig" with {form: forms('contact-form')} %}