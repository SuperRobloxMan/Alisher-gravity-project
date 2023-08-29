const calculateButton = document.getElementById('calculate-button')
calculateButton.addEventListener('click', calculateWeight);


function calculateWeight() {
    const massInput = document.getElementById('massInput')
    const planetSelection = document.getElementById('planetSelection')
    const resultElement = document.getElementById('result')

    const mass = parseFloat(massInput.value)
    const planet = planetSelection.value;

    if (isNaN(mass)) {
        resultElement.textContent = "You didn't fill everything out";
        return;
    }

    const gravity = {
        earth: 9.81,
        mercury: 3.7,
        venus: 8.87,
        mars: 3.71,
        jupiter: 24.79,
        saturn: 10.44,
        uranus: 8.69,
        neptune: 11.15,
    }
    if (!gravity[planet]) {
        resultElement.textContent = "Invalid planet selection.";
        return;
    }

    const weight = (mass * gravity[planet]).toFixed(2);
    resultElement.textContent = `Weight on ${capitilize(planet)} is ${weight} N`

    const planetImage = document.getElementById('planetImage')

    planetImage.src = getImageUrl(planet);
}

function capitilize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getImageUrl(planet) {
    const imageUrls = {
        earth: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/earth.png",
        mercury: "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/images/Mercury_cropped_transparent.png",
        venus: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Venus_globe_-_transparent_background.png/1200px-Venus_globe_-_transparent_background.png",
        mars: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png",
        jupiter: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/jupiter.png",
        saturn: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Saturn_01.svg/800px-Saturn_01.svg.png",
        uranus: "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/uranus.png",
        neptune: "https://www.childrensmuseum.org/legacy-games/cosmicquest/assets/neptune.png",
    };

    return imageUrls[planet] || "";
}






