---
title: Contact
content:
    items: '@self.modular'
process:
    markdown: true
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
        captcha:
            type: turnstile
            theme: light
    buttons:
        submit:
            type: submit
            value: Soumettre
        reset:
            type: reset
            value: Réinitialiser
    process:
        turnstile: true
        save:
            fileprefix: contact-
            dateformat: Ymd-His-u
            extension: txt
            body: '{% include ''forms/data.txt.twig'' %}'
        email:
            from: '{{ config.plugins.email.from }}'
            to:
                - '{{ form.value.email }}'
            bcc:
                - '{{ config.plugins.email.bcc }}'
            subject: '[Site Contact Form] {{ form.value.name|e }}'
            body: '{% include ''forms/data.html.twig'' %}'
        message: 'Merci pour votre prise de contact!'
        display: thankyou
published: false
hide_git_sync_repo_link: false
---

# Formulaire de contact
{% include "forms/form.html.twig" with {form: forms('contact-form')} %}