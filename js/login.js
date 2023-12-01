function validateForm() {
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;

    if (userId.trim() === "" || password.trim() === "") {
        alert("User ID and password must be filled out");
        return false;
    }

    // Add more validation rules as needed
    if(userId == admin && password == admin){
        window.location.href = "../html/dashboard.html";
    }

    return true;
}
