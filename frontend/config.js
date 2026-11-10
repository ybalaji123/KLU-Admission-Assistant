// Point the separately hosted frontend to the Render API.
// Leave this empty when the frontend and backend are served from one origin.
window.KLU_API_BASE_URL =
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? ''
    : 'https://admission-and-fee-faq-assistant.onrender.com';
