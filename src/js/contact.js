const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const submitBtn = document.getElementById('form-submit');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  status.className = 'form-status';
  status.textContent = '';

  const payload = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await res.json();

    if (res.ok) {
      status.textContent = "Message sent. We'll get back to you within 72 hours.";
      status.className = 'form-status success';
      form.reset();
    } else {
      status.textContent = result.error || 'Something went wrong. Please try again.';
      status.className = 'form-status error';
    }
  } catch (err) {
    status.textContent = 'Something went wrong. Please try again.';
    status.className = 'form-status error';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});
