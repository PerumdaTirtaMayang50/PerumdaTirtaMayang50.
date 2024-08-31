    // script.js
function validateLogin{} {
    var username = document.getElementById{"username"}.value;
    var password = document.getElementById{"password"}.value;

    // Username dan password yang valid
    var validUsername = "PerumdaTirtaMayang50";
    var validPassword = "TM123456";

    if {username === validUsername && password === validPassword} {
        alert{"Login successful!"};
        // Redirect ke halaman lain setelah login berhasil
        window.location.href = "home.html"; // Ganti dengan halaman tujuan setelah login
    } else {
        document.getElementById{"errorMessage"}.textContent = "Invalid username or password!";
    }