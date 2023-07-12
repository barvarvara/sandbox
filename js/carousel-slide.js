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
    rewind: true,
    speed: 1000,
    gap: '2rem',
    cover: true,
    width : '100vw',

    breakpoints: {
      1175: {
        perPage: SLIDERS_PER_PAGE_MOB
      }
      // 714: {
      //   perPage: SLIDERS_PER_PAGE_MOB,
      // }
    },
  })

  const defineSlidesNum = (slidersPerPage) => {
    splide.on('mounted', () => {
      // console.log(splide.length)
      const slidesNumPerPage = Math.ceil(splide.length / slidersPerPage)
      slidesNum.textContent = '0'.concat(String(slidesNumPerPage))
    })
  }

  const defineCurrentPageIndex = (slidersPerPage) => {
    splide.on('moved', (newIndex, prevIndex, destIndex) => {
      // console.log(newIndex);
      const pageIndex = Math.ceil((newIndex) / slidersPerPage + 1)
      currentPageIndex.textContent = '0'.concat(String(pageIndex))
    });
  }

  const initNavBtnsActions = (slidersPerPage) => {
    btnNext.addEventListener('click', e => {
      splide.go(`+${slidersPerPage}`)
    })

    btnPrev.addEventListener('click', e => {
      splide.go(`-${slidersPerPage}`)
    })
  }

  defineSlidesNum(SLIDERS_PER_PAGE)
  defineCurrentPageIndex(SLIDERS_PER_PAGE)
  initNavBtnsActions(SLIDERS_PER_PAGE)
  

  splide.mount();
})