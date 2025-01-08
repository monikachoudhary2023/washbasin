

// const regulator = document.querySelector('.regulator');
// const waterColor = document.querySelector('.waterColor');
// const audio = document.getElementById('myAudio');


// let currentRotation = 0;


// function handleWaterFlow(rotationDegree) {
    
//     let flowRate = Math.min(Math.max(rotationDegree / 360, 0), 1); 

//     if (flowRate > 0) {
//         waterColor.style.animationDuration = `${(1 - flowRate) * 20}s`;  e
//         waterColor.style.opacity = flowRate;  
        
//     } else {
//         waterColor.style.animationDuration = `0s`; 
//         waterColor.style.opacity = 0; 
       
//     }
// }
// let isDragging = false;

// regulator.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     const startX = e.clientX;
//     const startY = e.clientY;
    
//     const initialRotation = currentRotation;
//     function onMouseMove(e) {
//         if (!isDragging) return;

//         const deltaX = e.clientX - startX;
//         const deltaY = e.clientY - startY;
//         const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//         currentRotation = (initialRotation + angle) % 360;
//         regulator.style.transform = `rotate(${currentRotation}deg)`;
//         handleWaterFlow(currentRotation);
//     }

//     function onMouseUp() {
//         isDragging = false;
//         document.removeEventListener('mousemove', onMouseMove);
//         document.removeEventListener('mouseup', onMouseUp);
//     }

//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('mouseup', onMouseUp);
// });


// regulator.addEventListener('dragstart', (e) => {
//     e.preventDefault();
// });


const regulator = document.querySelector('.regulator');
const waterColor = document.querySelector('.waterColor');
const audio = document.getElementById('myAudio');

let currentRotation = 0;

function handleWaterFlow(rotationDegree) {
    let flowRate = Math.min(Math.max(rotationDegree / 360, 0), 1); 

    if (flowRate > 0) {
        waterColor.style.animationDuration = `${(1 - flowRate) * 20}s`;  
        waterColor.style.opacity = flowRate;  

        // Play the audio if not already playing
        if (audio.paused) {
            audio.play();
        }
    } else {
        waterColor.style.animationDuration = `0s`; 
        waterColor.style.opacity = 0; 

        // Pause the audio
        audio.pause();
    }
}

let isDragging = false;

regulator.addEventListener('mousedown', (e) => {
    isDragging = true;
    const startX = e.clientX;
    const startY = e.clientY;
    
    const initialRotation = currentRotation;

    function onMouseMove(e) {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        currentRotation = (initialRotation + angle) % 360;
        regulator.style.transform = `rotate(${currentRotation}deg)`;
        handleWaterFlow(currentRotation);
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

regulator.addEventListener('dragstart', (e) => {
    e.preventDefault();
});
