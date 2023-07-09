const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

async function shareProd(){
    try {
        await navigator.share({
            title: 'Deal Breaker',
            text: 'Checkout *Air Pods Pro* TWS for just *Rs 499/-* & _Free Shipping_, for more info visit',
            url: 'https://dealbreaker.in/airpods',
          });
    } catch (err) {
        alert(err)
    }
}

window.addEventListener('resize', slideImage);