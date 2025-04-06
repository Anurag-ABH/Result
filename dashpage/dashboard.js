document.getElementById("dropdownBtn").addEventListener("click", function() {
    document.getElementById("popupMenu").classList.toggle("hidden");
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popupMenu").classList.add("hidden");
});

document.getElementById("logout").addEventListener("click", function() {
    window.location.href = "index.html"; // Redirect to main page
});

