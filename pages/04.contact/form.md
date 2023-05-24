---
title: Contact
external_links: {  }
hide_git_sync_repo_link: true
content:
    items: '@self.modular'
form:
    name: contact-form
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
        email:
            from: '{{ config.plugins.email.from }}'
            to:
                - '{{ form.value.email }}'
            cc:
                - '{{ config.plugins.email.cc }}'
            bcc:
                - '{{ config.plugins.email.bcc }}'
            subject: '[Contact FSMV] {{ form.value.name|e }}'
            body: '{% include ''forms/data.html.twig'' %}'
        save:
            fileprefix: contact-
            dateformat: Ymd-His-u
            extension: txt
            body: '{% include ''forms/data.txt.twig'' %}'
        message: 'Merci pour votre prise de contact!'
        display: thankyou
process:
    markdown: true
    twig: true
twig_first: true
never_cache_twig: true
---

# Formulaire de contact


