
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

    const cardHeaders = $$('.card-header')
    const cardBodys = $$('.card-body')
    //Click event in slide section
    cardHeaders.forEach((cardHeader, index) => {
        const cardBody = cardBodys[index]
        cardHeader.onclick = function() {
            $('.card-body.card-body-active').classList.remove('card-body-active')
            
            cardBody.classList.toggle('card-body-active')
        }
    })
}

function modalHandle() {
    const main = $('.main')
    const workCardImgs = $$('.work__card-img')
    const workCards = $$('.card-wrap')
    const modal = $('.modal')
    const modalImg = $('.modal-content')
    const modalContents = $$('.modal-content')
    const closeBtn = $('.close-btn')

    workCards.forEach((workCard, index) => {
        const workCardImg = workCardImgs[index]
        workCard.onclick = (e) => {
            modal.style.display = 'block'
            modalImg.src = workCardImg.src
            e.stopPropagation()
        }
    })

    main.onclick = () => {
        modal.style.display = 'none'
    }

    modalContents.forEach((modalContent) => {
        modalContent.onclick = (e) => {
            e.stopPropagation()
        }
    })

    closeBtn.onclick = () => {
        modal.style.display = 'none'
    }
}
handleClickEvents()
modalHandle()


