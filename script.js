//Image Aspect Ratio
const image = document.querySelector("img");

image.addEventListener("load", (event) => {
    const { naturalWidth, naturalHeight, width, height } = image;
});

//Code to display current time and date
document.addEventListener("DOMContentLoaded", () => {
    const currentTime = document.getElementById("currentTime");
    const currentDay = document.getElementById("currentDay");

    const updateDateTime = () => {
        const presentDay = new Date();

        currentTime.textContent = presentDay.toUTCString().split(' ')[4];
        currentDay.textContent = presentDay.toLocaleDateString("en-US", { weekday: "long" });
    };

    updateDateTime();

    setInterval(updateDateTime, 1000);
});