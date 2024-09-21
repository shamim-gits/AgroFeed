function openModal() {
    document.getElementById("signupModal").style.display = "block";
}

function closeModal() {
    document.getElementById("signupModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("signupModal");
    if (event.target === modal) {
        closeModal();
    }
}

document.querySelector('.auth-buttons .btn:nth-child(2)').onclick = openModal;
