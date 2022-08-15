const submitCommentButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const comment = document.querySelector('#blog-post-comment').value.trim();

        if (comment) {
            const response = await fetch(`/api/blog-post-comments`, {
                method: 'POST',
                body: JSON.stringify({
                    comment,
                    blog_post_id: id
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to add comment on this blog post');
            }
        } else {
            alert('Please enter a non-empty comment on this blog post');
        }
    }
};

document
    .querySelector('.submit-comment-button')
    .addEventListener('click', submitCommentButtonHandler);