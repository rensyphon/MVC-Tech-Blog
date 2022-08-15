const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blog-posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog post');
        }
    }
};

document
    .querySelector('.delete-button')
    .addEventListener('click', delButtonHandler);

const saveButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const name = document.querySelector('#blog-post-name').value.trim();
        const description = document.querySelector('#blog-post-desc').value.trim();

        if (name && description) {
            const response = await fetch(`/api/blog-posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({name, description}),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to update blog post');
            }
        } else {
            alert('Please enter a non-empty blog post name and description');
        }
    }
};

document
    .querySelector('.save-button')
    .addEventListener('click', saveButtonHandler);
