const SLIDERS_PER_PAGE = 3;
const SLIDERS_PER_PAGE_MOB = 2;

document.addEventListener('DOMContentLoaded', () => {
  const btnNext = document.querySelector('.popular__splide-btn_right')
  const btnPrev = document.querySelector('.popular__splide-btn_left')
  const currentPageIndex = document.querySelector('.popular__current-slide')
  const slidesNum = document.querySelector('.popular__slides-num')

  const splide = new Splide('.popular__cards', {
    arrows: false,
    pagination: false,
    perPage: SLIDERS_PER_PAGE,
    perMove: SLIDERS_PER_PAGE,
    speed: 1000,
    gap: '2rem',
    trimSpace: false,


    breakpoints: {
      1248: {
        perPage: SLIDERS_PER_PAGE_MOB,
        perMove: SLIDERS_PER_PAGE_MOB,
        gap: '2.5rem',
      },
      714: {
        gap: '1.4rem',
      },
      340: {
        perPage: 1,
        perMove: 1,
      }
    },
  })

  const defineCurrentPageIndex = () => {
    splide.on('moved', (newIndex, prevIndex, destIndex) => {
      const pageIndex = Math.ceil((newIndex) / splide.options.perPage + 1)
      currentPageIndex.textContent = '0'.concat(String(pageIndex))
    });
  }

  const initNavBtnsActions = () => {
    btnNext.addEventListener('click', e => {
      splide.go(`>`)
    })

    btnPrev.addEventListener('click', e => {
      splide.go(`<`)
    })
  }

  splide.on('mounted', () => {
    // console.log('mounted')
    
    const slidesNumPerPage = Math.ceil(splide.length / splide.options.perPage)
    slidesNum.textContent = '0'.concat(String(slidesNumPerPage))

    defineCurrentPageIndex()
    initNavBtnsActions()
  })
  
  splide.on('resize', () => {
    // console.log('resize')
    // console.log(splide.options.perPage)

    const slidesNumPerPage = Math.ceil(splide.length / splide.options.perPage)
    slidesNum.textContent = '0'.concat(String(slidesNumPerPage))
    defineCurrentPageIndex()
  })

  splide.mount();
})