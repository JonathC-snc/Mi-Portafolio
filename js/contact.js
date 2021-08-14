const $form = document.querySelector('#contact');

    $form.addEventListener('submit', handleSubmit)

    async function handleSubmit(event) {
        event.preventDefault();

        const form = new FormData(this);
    
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.ok) {
            this.reset()
            alert('Gracias por contactarme, muy pronto me pondré en contacto contigo!')
        }else{
            this.reset()
            alert('No se enviaron los datos')
        };
    }