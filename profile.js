document.addEventListener("DOMContentLoaded", function () {
    const profilePicture = document.querySelector(".profile-picture");
    const fileInput = document.getElementById("fileInput");

    profilePicture.addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePicture.querySelector("img").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
