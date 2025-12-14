const btn = document.createElement("button");
btn.innerText = "▲";
btn.id = "topBtn";
document.body.appendChild(btn);

btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px";

btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
function handleForm(event) {
    event.preventDefault(); // предотвращаем стандартное поведение формы
  
    // Получаем данные формы
    const form = document.getElementById('contactForm');
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };
  
    // Отправка через EmailJS
    emailjs.send('service_j5lsn2a', 'template_otb99ff', formData) // template_XXXXXX замените на ID шаблона
      .then(function(response) {
         alert("Сообщение отправлено успешно!");
         form.reset(); // очищаем форму
      }, function(error) {
         alert("Ошибка при отправке: " + JSON.stringify(error));
      });
  
    return false;
  }
  