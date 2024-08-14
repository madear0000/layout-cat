import './carousel-buttons.scss'

const slider = document.querySelector('.rooms__area__carousel');
const buttonForRight = document.getElementById('right-slider');
const buttonForLeft = document.getElementById('left-slider');
const labelsForSliderRadioButton = document.querySelectorAll('.carousel-buttons__check-points--one-point');
let offset = 0;
let count = 0;
    
    
labelsForSliderRadioButton[0].style.background = "#FAC663";
    
    function checkForRadioButtonPlus() {
        count++;
        for (let i = 0; i < 3; i++) {
            if (i == count) {
                labelsForSliderRadioButton[i].style.background = "#FAC663";
            } else {
                labelsForSliderRadioButton[i].style.background = "#E1E1E1";
            }
        }
    }
    
    function checkForRadioButtonMinus() {
        count--;
        for (let i = 0; i < 3; i++) {
            if (i == count) {
                labelsForSliderRadioButton[i].style.background = "#FAC663";
            } else {
                labelsForSliderRadioButton[i].style.background = "#E1E1E1"
            }
        }
    }
    
    
    
    buttonForRight.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            if (offset > -1325) {
                offset -= 662.5;
                slider.style.left = offset + 'rem';
                checkForRadioButtonPlus();
            }
        } else if (window.innerWidth > 320 && window.innerWidth <= 768) {
            if (offset > -1325) {
                offset -= 662.5;
                slider.style.left = offset + 'rem';
                checkForRadioButtonPlus();
            }
        } else if (window.innerWidth <= 320) {
            if (offset > -1286) {
                offset -= 643;
                slider.style.left = offset + 'rem';
                checkForRadioButtonPlus();
            }
        } 
    });
    
    buttonForLeft.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            if (offset < 0) {
                offset  += 662.5;
                slider.style.left = offset + 'rem';
                checkForRadioButtonMinus();
            }  
        }  else if (window.innerWidth > 320 && window.innerWidth <= 768) {
            if (offset < 0) {
                offset  += 662.5;
                slider.style.left = offset + 'rem';
                checkForRadioButtonMinus();
            }  
        } else if (window.innerWidth <= 320) {
            if (offset < 0) {
                offset  += 643;
                slider.style.left = offset + 'rem';
                checkForRadioButtonMinus();
            }  
        }
    
    })


