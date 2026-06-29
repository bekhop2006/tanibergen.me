/** Opens the user's mail client with the contact form contents prefilled. */
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);

  window.location.href = `mailto:bekhop2006@gmail.com?subject=${subject}&body=${body}`;
}

document.getElementById("contact-form").addEventListener("submit", handleContactSubmit);
