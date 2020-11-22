const formElement = document.querySelector('form');

const validatePasswords = () => {
    const passwordInputs = [
        ...document.querySelectorAll('input[type="password"]')
    ];
    return passwordInputs.length <= 1
        ? true
        : passwordInputs[0].value === passwordInputs[1].value;
};

const validateFormInputs = async (event) => {
    event.preventDefault();

    const formInputs = [...document.getElementsByClassName('validate')];
    const inputsValidated = formInputs.every((formInput) =>
        formInput.checkValidity()
    );
    if (inputsValidated && (validatePasswords() ?? true)) {
        const form = event.target;
        const url = form.action;
        const formData = new FormData(form);
        console.log(...formData)
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body: JSON.stringify(formData)
            });
            
            console.log(response);
            const jsonResponse = await response.json();
            if (jsonResponse.success) {
                console.log('Successful');
            } else {
                console.log('Something went wrong');
            }
            console.log(jsonResponse.message);
        } catch (error) {
            console.log(error);
        }
    }
};

formElement.addEventListener('submit', validateFormInputs);