const $form = document.querySelector('#form');

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
            alert('Gracias por contactarme, te escribire en la brevedad posible')
        }else{
            this.reset()
            alert('No se enviaron los datos')
        };
    }