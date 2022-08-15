const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-post-name').value.trim();
    const description = document.querySelector('#blog-post-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/blog-posts`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blog post');
      }
    }
  };
  
  document
    .querySelector('.new-blog-post-form')
    .addEventListener('submit', newFormHandler);
  