---
title: 'Devenir associé'
external_links: {  }
hide_git_sync_repo_link: true
content:
    items: '@self.modular'
form:
    name: souscription-form
    fields:
        civilite:
            type: select
            size: short
            classes: fancy
            label: Civilité
            help: ''
            placeholder: Civilité
            options:
                madame: Madame
                monsieur: Monsieur
            validate:
                required: true
        firstname:
            label: Prénom
            placeholder: Prénom
            autofocus: 'off'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        lastname:
            label: Nom
            placeholder: Nom
            autofocus: 'off'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        birthday:
            type: date
            label: 'Date de naissance'
            validate:
                min: '1923-05-07'
                max: '2023-05-07'
                required: true
        nationality:
            label: Nationalité
            placeholder: nationalité
            default: française
            autofocus: 'off'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        situation:
            type: select
            size: short
            classes: fancy
            label: 'Situation familiale'
            help: ''
            placeholder: 'Situation familiale'
            options:
                single: Célibataire
                married: Marié.e
                pacse: Pacsé.e
            validate:
                required: true
        address:
            label: 'N° & nom de rue'
            placeholder: 'N° & nom de rue'
            autofocus: 'off'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        cp:
            type: number
            label: 'Code Postal'
            default: 92150
            help: ''
            validate:
                min: 1000
                max: 99000
                step: 10
                pattern: '[0-9][1-9][0-9][0-9][0]'
                required: true
        town:
            label: Ville
            placeholder: Ville
            autofocus: 'off'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        email:
            label: Courriel
            placeholder: jmartin@domaine.com
            type: email
            validate:
                required: true
        phone:
            type: tel
            label: Téléphone
            validate:
                required: true
                pattern: '[0][1-9] [0-9][0-9] [0-9][0-9] [0-9][0-9] [0-9][0-9]'
        share:
            type: number
            label: 'Nombre de part(s) souscrite(s)'
            default: 1
            help: '10 parts maximum'
            validate:
                min: 1
                max: 10
                step: 1
                required: true
        reglement:
            type: radio
            label: 'Mode de règlement'
            default: virement
            options:
                virement: Virement
                check: Chèque
            validate:
                required: true
        connu:
            type: checkboxes
            label: 'Comment avez-vous connu les FSMV ?'
            default: null
            options:
                1: 'Bouche à oreille'
                2: 'Réseaux sociaux'
                3: 'Énergie Partagée'
                4: Événement
                5: Presse
                6: Newsletter
            validate:
                required: false
            use: keys
            state:
                visible: false
        agree_to_terms:
            type: checkbox
            label: 'J''atteste la validité des informations ci-dessus renseignées et avoir pris connaissance des statuts'
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
            bcc:
                - '{{ config.plugins.email.to }}'
            subject: '[Souscription] {{ form.value.firstname|e }} {{ form.value.lastname|e }}'
            body: '{% include ''forms/data.html.twig'' %}'
        save:
            fileprefix: feedback-
            dateformat: Ymd-His-u
            extension: txt
            body: '{% include ''forms/data.txt.twig'' %}'
        message: 'Merci pour votre souscription!'
        display: thankyou
process:
    markdown: true
    twig: true
twig_first: true
never_cache_twig: true
---

## Devenir associé
Si vous connaissez exactement vos motivations ainsi que les conséquences d’une souscription d’actions à une coopérative citoyenne alors vous pouvez continuer à remplir le formulaire ci-dessous. Sinon nous vous conseillons de consulter la [FAQ](https://faq.fsmv.fr/) des FSMV qui vous permettra de faire votre idée. Si vous avez encore des questions n’hésitez pas à nous envoyer un message!
<script>let result = addNumbers(5, 3);
console.log(result); // Output: 8</script>
Dans tous les cas, la consultation des [Statuts](https://www.google.com/url?q=https://drive.google.com/file/d/1Wm-hCciqrirz9Dr5PCAuVlpkT0VyI1YP/view?usp%3Dsharing&sa=D&ust=1595158470555000&usg=AFQjCNHFzhPONnIAwDtlt12XGmzB6PtqmQ) et du [Document d’Information Synthétique](https://docs.google.com/document/d/1hyiYaa286eemfbzz6AJsbfWFojmbR7W8/edit?usp=sharing&ouid=116751752890100411817&rtpof=true&sd=true) (DIS) est également fortement conseillée!
### ## Bulletin de souscription d’actions aux Fermes Solaires du Mont-Valérien

Ce formulaire permettra l’envoi d’une demande de souscription au Conseil de Gestion des FSMV. A travers ce formulaire, vous concrétisez votre envie de participer à l’aventure de l’énergie citoyenne qui reste à la portée de chacun en souscrivant une ou plusieurs actions de la société à gouvernance coopérative FSMV. A partir de 200 €, vous investissez dans la transition écologique et vous participez, en tant que fermier, à la gouvernance de votre coopérative.
Ce formulaire s’adresse aux personnes physiques. Si vous représentez une personne morale, nous vous suggérons de nous appeler au préalable ou nous vous rappellerons en nous laissant vos coordonnées à l’adresse suivante: https://www.fsmv.fr/contact .
#### ### ## Procédure pour devenir sociétaire:

1. Remplissez le formulaire ci-dessous,
2. Réglez le montant de souscription préférentiellement par virement en indiquant précisément votre nom et prénom dans l’intitulé de votre virement:
> **IBAN FR76 1027 8060 8600 0210 4680 250 – BIC : CMCIFR2A**
3. Vous recevrez une attestation de confirmation après le délai de traitement administratif et notamment l’acceptation de votre souscription par le Conseil de Gestion des FSMV.

Si vous ne pouvez pas faire autrement, vous pouvez également envoyer un chèque du montant correspondant à l’ordre de « SAS Fermes Solaires du Mont-Valérien », par courrier à l’adresse suivante: 19 rue des Ibiscus 92500 Rueil-Malmaison

Merci de prendre note que toute souscription vaut acceptation des [statuts](https://www.google.com/url?q=https://drive.google.com/file/d/1Wm-hCciqrirz9Dr5PCAuVlpkT0VyI1YP/view?usp%3Dsharing&sa=D&ust=1595158470555000&usg=AFQjCNHFzhPONnIAwDtlt12XGmzB6PtqmQ) de la coopérative.


