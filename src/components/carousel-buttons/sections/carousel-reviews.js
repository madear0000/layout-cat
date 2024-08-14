export default function carouselReviews() {
    const sliderReviews = document.querySelector('.reviews__comments');
    const buttonForRightReviews = document.getElementById('right-slider-reviews');
    const buttonForLeftReviews = document.getElementById('left-slider-reviews');
    const slidersReviews = document.querySelectorAll('.reviews__comments__comment');
    const labelsForSliderRadioButtonReviews = document.querySelectorAll('.slider-for-reviews');
    let offsetReviews = 0;
    let counterOfCounterReviews = 0;
    let counterReviews = 0;
    
    labelsForSliderRadioButtonReviews[0].style.background = "#FAC663";
    
    function forCheckRadioButtonReviewsRightFull() {
        counterReviews++;
        let checkNumberOfReviews = Math.floor((slidersReviews.length - 3) / 2);
        if (counterReviews == checkNumberOfReviews) {
            counterOfCounterReviews++;
            if (counterOfCounterReviews < 3) {
                for (let i = 0; i < 3; i++) {
                    if (i == counterOfCounterReviews) {
                        labelsForSliderRadioButtonReviews[i].style.background = "#FAC663";
                    } else {
                        labelsForSliderRadioButtonReviews[i].style.background = "#E1E1E1";
                    }
                }
            }
            counterReviews = 0;
        }
    }
    
    function forCheckRadioButtonReviewsRight768() {
        counterReviews++;
        let checkNumberOfReviews = Math.floor((slidersReviews.length - 1) / 2);
        if (counterReviews == checkNumberOfReviews) {
            counterOfCounterReviews++;
            if (counterOfCounterReviews < 3) {
                for (let i = 0; i < 3; i++) {
                    if (i == counterOfCounterReviews) {
                        labelsForSliderRadioButtonReviews[i].style.background = "#FAC663";
                    } else {
                        labelsForSliderRadioButtonReviews[i].style.background = "#E1E1E1";
                    }
                }
            }
            counterReviews = 0;
        }
    }
    
    function forCheckRadioButtonReviewsRight320() {
        counterReviews++;
        let checkNumberOfReviews = Math.floor((slidersReviews.length) / 2);
        if (counterReviews == checkNumberOfReviews) {
            counterOfCounterReviews++;
            if (counterOfCounterReviews < 3) {
                for (let i = 0; i < 3; i++) {
                    if (i == counterOfCounterReviews) {
                        labelsForSliderRadioButtonReviews[i].style.background = "#FAC663";
                    } else {
                        labelsForSliderRadioButtonReviews[i].style.background = "#E1E1E1";
                    }
                }
            }
            counterReviews = 0;
        }
    }
    
    
    
    function forCheckRadioButtonReviewsLeftFull() {
        counterReviews--;
        let checkNumberOfReviews = Math.floor((slidersReviews.length - 3) / 2);
        if (counterReviews == -checkNumberOfReviews) {
            counterOfCounterReviews--;
            if (counterOfCounterReviews < 3) {
                for (let i = 0; i < 3; i++) {
                    if (i == counterOfCounterReviews) {
                        labelsForSliderRadioButtonReviews[i].style.background = "#FAC663";
                    } else {
                        labelsForSliderRadioButtonReviews[i].style.background = "#E1E1E1";
                    }
                }
            }
            counterReviews = 0;
        }
    }
    
    function forCheckRadioButtonReviewsLeft768() {
        counterReviews--;
        let checkNumberOfReviews = Math.floor((slidersReviews.length - 1) / 2);
        if (counterReviews == -checkNumberOfReviews) {
            counterOfCounterReviews--;
            if (counterOfCounterReviews < 3) {
                for (let i = 0; i < 3; i++) {
                    if (i == counterOfCounterReviews) {
                        labelsForSliderRadioButtonReviews[i].style.background = "#FAC663";
                    } else {
                        labelsForSliderRadioButtonReviews[i].style.background = "#E1E1E1";
                    }
                }
            }
            counterReviews = 0;
        }
    }
    
    function forCheckRadioButtonReviewsLeft320() {
        counterReviews--;
        let checkNumberOfReviews = Math.floor((slidersReviews.length) / 2);
        if (counterReviews == -checkNumberOfReviews) {
            counterOfCounterReviews--;
            if (counterOfCounterReviews < 3) {
                for (let i = 0; i < 3; i++) {
                    if (i == counterOfCounterReviews) {
                        labelsForSliderRadioButtonReviews[i].style.background = "#FAC663";
                    } else {
                        labelsForSliderRadioButtonReviews[i].style.background = "#E1E1E1";
                    }
                }
            }
            counterReviews = 0;
        }
    }
    
    
    buttonForRightReviews.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            if (offsetReviews > (slidersReviews.length - 3) * -31.5) {
                offsetReviews -= 31.5;
                sliderReviews.style.left = offsetReviews + 'rem';
                forCheckRadioButtonReviewsRightFull();
            }
        } else if (window.innerWidth > 320 && window.innerWidth <= 768) {
            if (offsetReviews > (slidersReviews.length - 1) * -31.5) {
                offsetReviews -= 31.5;
                sliderReviews.style.left = offsetReviews + 'rem';
                forCheckRadioButtonReviewsRight768();
            }
        } else if (window.innerWidth <= 320) {
            if (offsetReviews > (slidersReviews.length) * -20.9) {
                offsetReviews -= 20.9;
                sliderReviews.style.left = offsetReviews + 'rem';
                forCheckRadioButtonReviewsRight320();
            }
        } 
    });
    
    buttonForLeftReviews.addEventListener('click', () => {
        if (window.innerWidth > 768) {
            if (offsetReviews < 0) {
                offsetReviews += 31.5;
                sliderReviews.style.left = offsetReviews + 'rem';
                forCheckRadioButtonReviewsLeftFull();
            }
        } else if (window.innerWidth > 320 && window.innerWidth <= 31.5) {
            if (offsetReviews < 0) {
                offsetReviews += 31.5;
                sliderReviews.style.left = offsetReviews + 'rem';
                forCheckRadioButtonReviewsLeft768();
            }
        } else if (window.innerWidth <= 320) {
            if (offsetReviews < 0) {
                offsetReviews += 20.9;
                sliderReviews.style.left = offsetReviews + 'rem';
                forCheckRadioButtonReviewsLeft320();
            }
        }
    });
}