const password = prompt("Sayfaya giriş için şifre girin:");
if (password !== "0GZ0") {
  document.documentElement.innerHTML = "";
  alert("Şifre yanlış, erişim engellendi.");
  throw new Error("Erişim reddedildi.");
}
