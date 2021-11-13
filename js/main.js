$('.device__wrapper .tab-top').on('click', function (event) {
    let id = $(this).attr('data-id');

    $('.device__wrapper').find('.tab-items-top').removeClass('active-tab').hide();
    $('.device__wrapper .tabs').find('.tab-top').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();

});
$('.device__wrapper .tab-bottom').on('click', function (event) {
    let id = $(this).attr('data-id');

    $(this).closest('.tab-items-top').find('.tab-items-bottom').removeClass('active-tab').hide();
    $('.tab-items-top').find('.tab-bottom').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tab-items-top').find('#' + id).addClass('active-tab').fadeIn();

});
$('.device__btn').on('click', function () {
    
    $(this).closest('.tab-items-bottom').find('.device__text').toggleClass('active');
    $(this).toggleClass('active');
    if($(this).hasClass('active')){

        $(this).html('Скрыть')
    }
    else{
        $(this).html('Показать полностью')
    }
    
});


$('.card__text-btn').on('click', function () {
    
    $(this).closest('.card__inner').find('.card__list').slideToggle();
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
        $(this).html('Скрыть характеристики')
        
    }
    else{
        $(this).html('Показать все характеристики')
    }
    
});



f12youtube = {
    findVideos: function () {
        let videos = document.querySelectorAll('.video');

        for (let i = 0; i < videos.length; i++) {
            this.setupVideo(videos[i]);
        }
    },

    setupVideo: function (video) {
        let link = video.querySelector('.video__link');
        let media = video.querySelector('.video__media');
        let button = video.querySelector('.video__button');
        let id = this.parseMediaURL(media);

        video.addEventListener('click', () => {
            let iframe = this.createIframe(id);

            link.remove();
            button.remove();
            video.appendChild(iframe);
        });

        link.removeAttribute('href');
        video.classList.add('video--enabled');
    },

    parseMediaURL: function (media) {
        let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
        let url = media.src;
        let match = url.match(regexp);

        return match[1];
    },

    createIframe: function (id) {
        let iframe = document.createElement('iframe');

        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'autoplay');
        iframe.setAttribute('src', this.generateURL(id));
        iframe.classList.add('video__media');

        return iframe;
    },

    generateURL: function (id) {
        let query = '?rel=0&showinfo=0&autoplay=1';

        return 'https://www.youtube.com/embed/' + id + query;
    }
};


f12youtube.findVideos();

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});