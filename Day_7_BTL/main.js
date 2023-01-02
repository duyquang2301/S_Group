
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//functions 
function handleClickEvents() {
    const contentBlocks = $$('.slide__content-item')
    contentBlocks.forEach((contentBlock, index) => {
        const slideImages = $$('.slide-img')
        contentBlock.onclick = function() {
            const slideImage = slideImages[index]
            $('.slide__content-item.slide__content-active').classList.remove('slide__content-active')
            $('.slide-img.img-active').classList.remove('img-active')
            this.classList.add('slide__content-active')
            slideImage.classList.add('img-active')
        }
    })
}

handleClickEvents()





