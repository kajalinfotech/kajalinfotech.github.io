// Jquery Code
var widthScreen = $(window).width();

if (widthScreen > 800) {
    $('.btn-1').addClass('btn-active');
} else {
    $('.btn-1').removeClass('btn-active');
}

$(window).resize(() => {
    widthScreen = $(window).width();

    if (widthScreen > 800) {
        $('.btn-1').addClass('btn-active');
    } else {
        $('.btn-1').removeClass('btn-active');
    }
});

var hamburger = true;

$(document).ready(() => {
    $('.hamburger').click(() => {
        console.log('click');
        var menu = $('.header__navigation-list');
        var icon = $('#hamburger');
        menu.slideDown(200);

        if (menu.hasClass('header-show')) {
            menu.slideUp(200);
            menu.removeClass('header-show');
            menu.hide();
        } else {
            menu.addClass('header-show');
        }
        icon.toggleClass('hamburger', 200);
        icon.toggleClass('hamburger-close', 200);
    });

    $('.show-more').click(() => {
        var list = $('.services__items');
        var data = $('.show-more-description');
        data.slideToggle(200);
        list.slideToggle(200);
    });

    $('.show__more').click(() => {
        var list = $('.show-more-about');
        var data = $('.show-more-description-2');
        data.slideToggle(200);
        list.slideToggle(200);
    });

    $('#list-item-1').click(() => {
        $('#list-item-1').addClass('active-link');
        $('#list-item-2').removeClass('active-link');
        $('#list-item-3').removeClass('active-link');
        $('#list-item-4').removeClass('active-link');
    });
    $('#list-item-2').click(() => {
        $('#list-item-2').addClass('active-link');
        $('#list-item-1').removeClass('active-link');
        $('#list-item-3').removeClass('active-link');
        $('#list-item-4').removeClass('active-link');
    });
    $('#list-item-3').click(() => {
        $('#list-item-3').addClass('active-link');
        $('#list-item-2').removeClass('active-link');
        $('#list-item-1').removeClass('active-link');
        $('#list-item-4').removeClass('active-link');
    });
    $('#list-item-4').click(() => {
        $('#list-item-4').addClass('active-link');
        $('#list-item-2').removeClass('active-link');
        $('#list-item-3').removeClass('active-link');
        $('#list-item-1').removeClass('active-link');
    });

    $('.reval').click(() => {
        var list = $('.hidden-items');
        list.slideToggle(200);
        list.css('display', 'flex');
    });

    $('#myCarousel').on('touchstart', function(event) {
        var xClick = event.originalEvent.touches[0].pageX;
        $('#myCarousel').one('touchmove', function(event) {
            var xMove = event.originalEvent.touches[0].pageX;
            if (Math.floor(xClick - xMove) > 5) {
                $('#myCarousel').carousel('next');
            } else if (Math.floor(xClick - xMove) < -5) {
                $('#myCarousel').carousel('prev');
            }
        });
        $('#myCarousel').on('touchend', function() {
            $('#myCarousel').off('touchmove');
        });
    });

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate(
                        {
                            scrollTop: target.offset().top
                        },
                        1000,
                        function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(':focus')) {
                                // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        }
                    );
                }
            }
        });
});

if (widthScreen < 800) {
    var i = document.querySelector('#btn-form-1').classList.remove('btn-center');
}
window.addEventListener('resize', () => {
    if (widthScreen < 800) {
        document.querySelector('#btn-form-1').classList.remove('btn-center');
    } else {
        document.querySelector('#btn-form-1').classList.add('btn-center');
    }
});

if (widthScreen < 800) {
    var i = document.querySelector('#btn-form-2').classList.remove('btn-center');
}
window.addEventListener('resize', () => {
    if (widthScreen < 800) {
        document.querySelector('#btn-form-2').classList.remove('btn-center');
    } else {
        document.querySelector('#btn-form-2').classList.add('btn-center');
    }
});

if (widthScreen < 800) {
    var i = document.querySelector('#btn-form-3').classList.remove('btn-center');
}
window.addEventListener('resize', () => {
    if (widthScreen < 800) {
        document.querySelector('#btn-form-3').classList.remove('btn-center');
    } else {
        document.querySelector('#btn-form-3').classList.add('btn-center');
    }
});

var classs;

document.querySelector('.show-more').addEventListener('click', () => {
    classs = document.querySelector('.show-more-text').textContent;
    if (classs === 'Mehr lesen') {
        document.querySelector('.show-more-text').textContent = 'Weniger lesen';
    } else {
        document.querySelector('.show-more-text').textContent = 'Mehr lesen';
    }

    document.querySelector('.show-more svg').classList.toggle('show-more-svg');
    document.querySelector('.show-more svg').classList.toggle('show-less-svg');
});

var classss;

document.querySelector('.show__more').addEventListener('click', () => {
    classs = document.querySelector('.show__more-text').textContent;
    if (classs === 'Mehr lesen') {
        document.querySelector('.show__more-text').textContent = 'Weniger lesen';
    } else {
        document.querySelector('.show__more-text').textContent = 'Mehr lesen';
    }

    document.querySelector('.show__more svg').classList.toggle('show__more-svg');
    document.querySelector('.show__more svg').classList.toggle('show__less-svg');
});

var classsa;

document.querySelector('.reval').addEventListener('click', () => {
    classsa = document.querySelector('.show-more-text-item').textContent;
    console.log(classsa);
    if (classsa === 'Mehr lesen') {
        document.querySelector('.show-more-text-item').textContent = 'Weniger lesen';
    } else {
        document.querySelector('.show-more-text-item').textContent = 'Mehr lesen';
    }

    document.querySelector('.reval svg').classList.toggle('show-more-svg');
    document.querySelector('.reval svg').classList.toggle('show-less-svg');
});

var primary = ['ca.', 'rund ', 'Über ', 'rund ', 'ca. ', 'ca. '];

var big = ['500.000', '120 Mio.', '12.000', '40.000', '300.000', '6,2 Mio'];

var logoNum = 0;

var path = [
    'Fiverr_Zulassungen_Assets/SGS_TUV_ISO_9001_TCL.png',
    'Fiverr_Zulassungen_Assets/ssl-logo.png',
    'Fiverr_Zulassungen_Assets/SGS_TUV_ISO_27001_TCL.png',
    'Fiverr_Zulassungen_Assets/ekomi_gold.png'
];

var logo = [
    'assets/group-8.svg',
    'assets/group-22_2.svg',
    'assets/group-9.svg',
    'assets/group-22.svg'
];

var sub = [
    'Kfz-Zulassungen/Jahr',
    'Euro Gesamtumsatz',
    'Autohaus-Kunden in der Betreuung',
    'FahrzeughÜberfÜhrungen im Jahr',
    'gelagerte Kfz-SchlÜssel',
    'Kennzeichen pro Jahr'
];

var logoHeading = ['Schnell', 'Vernetzt', 'Entlastend', 'Zuverlässig'];

var logoContent = [
    'Lassen Sie Fahrzeuge regional noch am selben Tag, bundesweit innerhalb von 72 Stunden zu.',
    'KfZ-Experten an über 500 Standorten bundesweit betreuen Ihre Zulassungen flächendeckend.',
    'Unser Service schont die Ressourcen Ihrer Mitarbeiter, um Ihre Produk-tivität im Tagesgeschäft zu steigern.',
    'Professionelle Prozesse ermöglichen Fahrzeugzulassungen, auch wenn Ihre Mitarbeiter ausfallen.'
];

var colrs = ['#a5d2d2', '#005f96', '#37afb9'];

var founderImg = [
    'assets/stefan-gutwirth-stockimage@3x.png',
    'assets/grimminger-freigestellt-2@3x.png'
];
var founderName = ['Stefan Grutwirth', 'Andreas Grimminger'];
var founderPost = ['Gebietsleiter Süd', 'Key Account Manger'];

var imge = 2;
var size;

if (widthScreen < 800) {
    setInterval(() => {
        if (widthScreen < 800) {
            if (
                document.getElementById('dot-zero-founder').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-zero-founder').classList.remove('dot-active-white');
                document.getElementById('dot-zero-founder').classList.remove('dot-active');
                document.getElementById('dot-one-founder').classList.add('dot-active-white');
                document.getElementById('dot-one-founder').classList.add('dot-active');

                document.querySelector('.stefan-gutwirth img').src = founderImg[1];
                document.querySelector('.stefan-gutwirth .info .info-name').textContent =
                    founderName[1];
                document.querySelector('.stefan-gutwirth .info .info-post').textContent =
                    founderPost[1];
            } else if (
                document.getElementById('dot-one-founder').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-one-founder').classList.remove('dot-active-white');
                document.getElementById('dot-one-founder').classList.remove('dot-active');
                document.getElementById('dot-zero-founder').classList.add('dot-active-white');
                document.getElementById('dot-zero-founder').classList.add('dot-active');

                document.querySelector('.stefan-gutwirth img').src = founderImg[0];
                document.querySelector('.stefan-gutwirth .info .info-name').textContent =
                    founderName[0];
                document.querySelector('.stefan-gutwirth .info .info-post').textContent =
                    founderPost[0];
            }
        }

        // <div class="stefan-gutwirth">
        //         <img src="assets/stefan-gutwirth-stockimage.png" alt="">
        //         <div class="info">
        //             <p class="info-name">Stefan Grutwirth</p>
        //             <p class="info-post">Gebietsleiter Süd</p>
        //         </div>
        //     </div>
    }, 4000);
}

if (widthScreen < 800) {
    setInterval(() => {
        if (widthScreen < 800) {
            document.getElementById('abt-tile-1').textContent = primary[0];
            document.getElementById('abt-tile-2').textContent = primary[1];

            if (document.getElementById('dot-one').classList.contains('dot-active-white')) {
                document.getElementById('dot-one').classList.remove('dot-active-white');
                document.getElementById('dot-one').classList.remove('dot-active');
                document.getElementById('dot-two').classList.add('dot-active-white');
                document.getElementById('dot-two').classList.add('dot-active');

                document.getElementById('abt-tile-1').innerHTML =
                    primary[2] + '<span class="big-text">' + big[2] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[3] + '<span class="big-text">' + big[3] + '</span>';
                document.getElementById('abt-tile-1-sec').textContent = sub[2];
                document.getElementById('abt-tile-2-sec').textContent = sub[3];

                document.querySelector('.tile-1').style.backgroundColor = colrs[2];
                document.querySelector('.tile-2').style.backgroundColor = colrs[0];

                document.getElementById('change-tile-1').style.color = colrs[1];
                document.getElementById('change-tile-2').style.color = colrs[1];
                document.getElementById('abt-tile-2').style.borderBottom = ' 3px solid #004b78 ';
            } else if (document.getElementById('dot-two').classList.contains('dot-active-white')) {
                document.getElementById('dot-two').classList.remove('dot-active-white');
                document.getElementById('dot-two').classList.remove('dot-active');
                document.getElementById('dot-three').classList.add('dot-active-white');
                document.getElementById('dot-three').classList.add('dot-active');

                document.getElementById('abt-tile-1').innerHTML =
                    primary[4] + '<span class="big-text">' + big[4] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[5] + '<span class="big-text">' + big[5] + '</span>';

                document.getElementById('abt-tile-1-sec').textContent = sub[4];
                document.getElementById('abt-tile-2-sec').textContent = sub[5];

                document.querySelector('.tile-1').style.backgroundColor = colrs[1];
                document.querySelector('.tile-2').style.backgroundColor = colrs[2];

                document.getElementById('change-tile-1').style.color = '#fff';
                document.getElementById('change-tile-2').style.color = '#fff';
                document.getElementById('abt-tile-1').style.borderBottom = ' 3px solid #fff';
                document.getElementById('abt-tile-2').style.borderBottom = ' 3px solid #fff';
            } else if (
                document.getElementById('dot-three').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-three').classList.remove('dot-active-white');
                document.getElementById('dot-three').classList.remove('dot-active');
                document.getElementById('dot-one').classList.add('dot-active-white');
                document.getElementById('dot-one').classList.add('dot-active');
                document.getElementById('abt-tile-1').innerHTML =
                    primary[0] + '<span class="big-text">' + big[0] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[1] + '<span class="big-text">' + big[1] + '</span>';

                document.getElementById('abt-tile-1-sec').textContent = sub[0];
                document.getElementById('abt-tile-2-sec').textContent = sub[1];

                document.querySelector('.tile-1').style.backgroundColor = colrs[2];
                document.querySelector('.tile-2').style.backgroundColor = colrs[1];

                document.getElementById('change-tile-1').style.color = colrs[1];
                document.getElementById('change-tile-2').style.color = '#fff';
                document.getElementById('abt-tile-1').style.borderBottom = ' 3px solid ' + colrs[1];
                document.getElementById('abt-tile-2').style.borderBottom = ' 3px solid #fff';
            }
        }
    }, 4000);

    setInterval(() => {
        if (widthScreen < 800) {
            if (document.getElementById('dot-zero-brands').classList.contains('dot-active-white')) {
                document.getElementById('dot-zero-brands').classList.remove('dot-active-white');
                document.getElementById('dot-zero-brands').classList.remove('dot-active');
                document.getElementById('dot-one-brands').classList.add('dot-active-white');
                document.getElementById('dot-one-brands').classList.add('dot-active');

                document.querySelector('.brand__image-one').style.width = '91.1px';
                document.querySelector('.brand__image-one').style.height = '91.1px';

                document.querySelector('.brand__image-one').src = path[1];
            } else if (
                document.getElementById('dot-one-brands').classList.contains('dot-active-white')
            ) {
                // ddd
                document.getElementById('dot-one-brands').classList.remove('dot-active-white');
                document.getElementById('dot-one-brands').classList.remove('dot-active');
                document.getElementById('dot-two-brands').classList.add('dot-active-white');
                document.getElementById('dot-two-brands').classList.add('dot-active');
                document.querySelector('.brand__image-one').src = path[2];

                document.querySelector('.brand__image-one').style.width = '92px';
                document.querySelector('.brand__image-one').style.height = '76px';
            } else if (
                document.getElementById('dot-two-brands').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-two-brands').classList.remove('dot-active-white');
                document.getElementById('dot-two-brands').classList.remove('dot-active');
                document.getElementById('dot-three-brands').classList.add('dot-active-white');
                document.getElementById('dot-three-brands').classList.add('dot-active');
                document.querySelector('.brand__image-one').src = path[3];

                document.querySelector('.brand__image-one').style.width = '91.1px';
                document.querySelector('.brand__image-one').style.height = '91.1px';
            } else if (
                document.getElementById('dot-three-brands').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-three-brands').classList.remove('dot-active-white');
                document.getElementById('dot-three-brands').classList.remove('dot-active');
                document.getElementById('dot-zero-brands').classList.add('dot-active-white');
                document.getElementById('dot-zero-brands').classList.add('dot-active');
                document.querySelector('.brand__image-one').src = path[0];

                document.querySelector('.brand__image-one').style.width = '92px';
                document.querySelector('.brand__image-one').style.height = '76px';
            }
        }
    }, 4000);

    setInterval(() => {
        if (widthScreen < 800) {
            if (logoNum === 0) {
                document.getElementById('benefits-img').src = logo[1];
                document.getElementById('benefits-heading').textContent = logoHeading[1];
                document.getElementById('benefits-content').textContent = logoContent[1];

                document.getElementById('dot-zero-benefit').classList.remove('dot-active');
                document.getElementById('dot-one-benefit').classList.add('dot-active');
                logoNum = 1;
            } else if (logoNum === 1) {
                document.getElementById('benefits-img').src = logo[2];
                document.getElementById('benefits-heading').textContent = logoHeading[2];
                document.getElementById('benefits-content').textContent = logoContent[2];

                document.getElementById('dot-one-benefit').classList.remove('dot-active');
                document.getElementById('dot-two-benefit').classList.add('dot-active');
                logoNum = 2;
            } else if (logoNum === 2) {
                document.getElementById('benefits-img').src = logo[3];
                document.getElementById('benefits-heading').textContent = logoHeading[3];
                document.getElementById('benefits-content').textContent = logoContent[3];

                document.getElementById('dot-two-benefit').classList.remove('dot-active');
                document.getElementById('dot-three-benefit').classList.add('dot-active');
                logoNum = 3;
            } else if (logoNum === 3) {
                document.getElementById('benefits-img').src = logo[0];
                document.getElementById('benefits-heading').textContent = logoHeading[0];
                document.getElementById('benefits-content').textContent = logoContent[0];

                document.getElementById('dot-three-benefit').classList.remove('dot-active');
                document.getElementById('dot-zero-benefit').classList.add('dot-active');
                logoNum = 0;
            }
        }
    }, 4000);
}
// SERVICES CAROUSEL{

// Forms Clicks
document.querySelector('.btn-1').addEventListener('click', () => {
    document.querySelector('.form--2').style.display = 'none';
    document.querySelector('.form--3').style.display = 'none';
    document.querySelector('.btn-2').classList.remove('btn-active');
    document.querySelector('.btn-3').classList.remove('btn-active');
    document.querySelector('.btn-1').classList.add('btn-active');
    document.querySelector('.form--1').style.display = 'block';
});
document.querySelector('.btn-2').addEventListener('click', () => {
    document.querySelector('.form--1').style.display = 'none';
    document.querySelector('.form--3').style.display = 'none';
    document.querySelector('.btn-1').classList.remove('btn-active');
    document.querySelector('.btn-3').classList.remove('btn-active');
    document.querySelector('.btn-2').classList.add('btn-active');
    document.querySelector('.form--2').style.display = 'block';
});

document.querySelector('.btn-3').addEventListener('click', () => {
    document.querySelector('.form--1').style.display = 'none';
    document.querySelector('.form--2').style.display = 'none';
    document.querySelector('.btn-1').classList.remove('btn-active');
    document.querySelector('.btn-2').classList.remove('btn-active');
    document.querySelector('.btn-3').classList.add('btn-active');
    document.querySelector('.form--3').style.display = 'block';
});

// Dragable Sliders

var founderSlide = document.getElementById('founder-slide');

var xCordStartFounder = 0,
    xCordEndFounder = 0;

founderSlide.addEventListener('touchstart', (e) => {
    xCordStartFounder = 0;
    xCordStartFounder = e.touches[0].clientX;
    // console.log(xCordStart);
});

founderSlide.addEventListener('touchmove', (e) => {
    xCordEndFounder = 0;
    xCordEndFounder = e.touches[0].clientX;
    // console.log(xCordEnd);
});

founderSlide.addEventListener('touchend', (e) => {
    if (xCordStartFounder - xCordEndFounder > 100 && xCordStartFounder - xCordEndFounder < 350) {
        if (widthScreen < 800) {
            if (
                document.getElementById('dot-zero-founder').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-zero-founder').classList.remove('dot-active-white');
                document.getElementById('dot-zero-founder').classList.remove('dot-active');
                document.getElementById('dot-one-founder').classList.add('dot-active-white');
                document.getElementById('dot-one-founder').classList.add('dot-active');

                document.querySelector('.stefan-gutwirth img').src = founderImg[1];
                document.querySelector('.stefan-gutwirth .info .info-name').textContent =
                    founderName[1];
                document.querySelector('.stefan-gutwirth .info .info-post').textContent =
                    founderPost[1];
            } else if (
                document.getElementById('dot-one-founder').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-one-founder').classList.remove('dot-active-white');
                document.getElementById('dot-one-founder').classList.remove('dot-active');
                document.getElementById('dot-zero-founder').classList.add('dot-active-white');
                document.getElementById('dot-zero-founder').classList.add('dot-active');

                document.querySelector('.stefan-gutwirth img').src = founderImg[0];
                document.querySelector('.stefan-gutwirth .info .info-name').textContent =
                    founderName[0];
                document.querySelector('.stefan-gutwirth .info .info-post').textContent =
                    founderPost[0];
            }
        }
    } else if (xCordStartFounder - xCordEndFounder < -100) {
        if (widthScreen < 800) {
            if (
                document.getElementById('dot-zero-founder').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-zero-founder').classList.remove('dot-active-white');
                document.getElementById('dot-zero-founder').classList.remove('dot-active');
                document.getElementById('dot-one-founder').classList.add('dot-active-white');
                document.getElementById('dot-one-founder').classList.add('dot-active');

                document.querySelector('.stefan-gutwirth img').src = founderImg[1];
                document.querySelector('.stefan-gutwirth .info .info-name').textContent =
                    founderName[1];
                document.querySelector('.stefan-gutwirth .info .info-post').textContent =
                    founderPost[1];
            } else if (
                document.getElementById('dot-one-founder').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-one-founder').classList.remove('dot-active-white');
                document.getElementById('dot-one-founder').classList.remove('dot-active');
                document.getElementById('dot-zero-founder').classList.add('dot-active-white');
                document.getElementById('dot-zero-founder').classList.add('dot-active');

                document.querySelector('.stefan-gutwirth img').src = founderImg[0];
                document.querySelector('.stefan-gutwirth .info .info-name').textContent =
                    founderName[0];
                document.querySelector('.stefan-gutwirth .info .info-post').textContent =
                    founderPost[0];
            }
        }
    } else {
        console.log('touch');
    }
});

// About Tiles Slider

var aboutSlide = document.getElementById('about-tiles');

var xCordStartAbout = 0,
    xCordEndAbout = 0;

aboutSlide.addEventListener('touchstart', (e) => {
    xCordStartAbout = 0;
    xCordStartAbout = e.touches[0].clientX;

    // console.log(xCordStart);
});

aboutSlide.addEventListener('touchmove', (e) => {
    xCordEndAbout = 0;
    xCordEndAbout = e.touches[0].clientX;
    // console.log(xCordEnd);
});
aboutSlide.addEventListener('touchend', (e) => {
    if (xCordStartAbout - xCordEndAbout > 100 && xCordStartAbout - xCordEndAbout < 250) {
        if (widthScreen < 800) {
            document.getElementById('abt-tile-1').textContent = primary[0];
            document.getElementById('abt-tile-2').textContent = primary[1];

            if (document.getElementById('dot-one').classList.contains('dot-active-white')) {
                document.getElementById('dot-one').classList.remove('dot-active-white');
                document.getElementById('dot-one').classList.remove('dot-active');
                document.getElementById('dot-two').classList.add('dot-active-white');
                document.getElementById('dot-two').classList.add('dot-active');

                document.getElementById('abt-tile-1').innerHTML =
                    primary[2] + '<span class="big-text">' + big[2] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[3] + '<span class="big-text">' + big[3] + '</span>';

                document.getElementById('abt-tile-1-sec').textContent = sub[2];
                document.getElementById('abt-tile-2-sec').textContent = sub[3];

                document.querySelector('.tile-1').style.backgroundColor = colrs[2];
                document.querySelector('.tile-2').style.backgroundColor = colrs[0];

                document.getElementById('change-tile-1').style.color = colrs[1];
                document.getElementById('change-tile-2').style.color = colrs[1];
                document.getElementById('abt-tile-2').style.borderBottom = ' 3px solid #004b78 ';
            } else if (document.getElementById('dot-two').classList.contains('dot-active-white')) {
                document.getElementById('dot-two').classList.remove('dot-active-white');
                document.getElementById('dot-two').classList.remove('dot-active');
                document.getElementById('dot-three').classList.add('dot-active-white');
                document.getElementById('dot-three').classList.add('dot-active');

                document.getElementById('abt-tile-1').innerHTML =
                    primary[4] + '<span class="big-text">' + big[4] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[5] + '<span class="big-text">' + big[5] + '</span>';
                document.querySelector('.tile-1').style.backgroundColor = colrs[1];
                document.querySelector('.tile-2').style.backgroundColor = colrs[2];
                document.getElementById('abt-tile-1-sec').textContent = sub[4];
                document.getElementById('abt-tile-2-sec').textContent = sub[5];

                document.getElementById('change-tile-1').style.color = '#fff';
                document.getElementById('change-tile-2').style.color = '#fff';
                document.getElementById('abt-tile-1').style.borderBottom = ' 3px solid #fff';
                document.getElementById('abt-tile-2').style.borderBottom = ' 3px solid #fff';
            } else if (
                document.getElementById('dot-three').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-three').classList.remove('dot-active-white');
                document.getElementById('dot-three').classList.remove('dot-active');
                document.getElementById('dot-one').classList.add('dot-active-white');
                document.getElementById('dot-one').classList.add('dot-active');
                document.getElementById('abt-tile-1').innerHTML =
                    primary[0] + '<span class="big-text">' + big[0] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[1] + '<span class="big-text">' + big[1] + '</span>';

                document.querySelector('.tile-1').style.backgroundColor = colrs[2];
                document.querySelector('.tile-2').style.backgroundColor = colrs[1];

                document.getElementById('abt-tile-1-sec').textContent = sub[0];
                document.getElementById('abt-tile-2-sec').textContent = sub[1];

                document.getElementById('change-tile-1').style.color = colrs[1];
                document.getElementById('change-tile-2').style.color = '#fff';
                document.getElementById('abt-tile-1').style.borderBottom = ' 3px solid ' + colrs[1];
                document.getElementById('abt-tile-2').style.borderBottom = ' 3px solid #fff';
            }
        }
    } else if (xCordStartAbout - xCordEndAbout < -100) {
        if (widthScreen < 800) {
            document.getElementById('abt-tile-1').textContent = primary[0];
            document.getElementById('abt-tile-2').textContent = primary[1];

            if (document.getElementById('dot-one').classList.contains('dot-active-white')) {
                document.getElementById('dot-one').classList.remove('dot-active-white');
                document.getElementById('dot-one').classList.remove('dot-active');
                document.getElementById('dot-three').classList.add('dot-active-white');
                document.getElementById('dot-three').classList.add('dot-active');

                document.getElementById('abt-tile-1').innerHTML =
                    primary[4] + '<span class="big-text">' + big[4] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[5] + '<span class="big-text">' + big[5] + '</span>';

                document.querySelector('.tile-1').style.backgroundColor = colrs[1];
                document.querySelector('.tile-2').style.backgroundColor = colrs[2];

                document.getElementById('abt-tile-1-sec').textContent = sub[4];
                document.getElementById('abt-tile-2-sec').textContent = sub[5];

                document.getElementById('change-tile-1').style.color = '#fff';
                document.getElementById('change-tile-2').style.color = '#fff';
                document.getElementById('abt-tile-1').style.borderBottom = ' 3px solid #fff';
                document.getElementById('abt-tile-2').style.borderBottom = ' 3px solid #fff';
            } else if (
                document.getElementById('dot-three').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-three').classList.remove('dot-active-white');
                document.getElementById('dot-three').classList.remove('dot-active');
                document.getElementById('dot-two').classList.add('dot-active-white');
                document.getElementById('dot-two').classList.add('dot-active');
                document.getElementById('abt-tile-1').innerHTML =
                    primary[2] + '<span class="big-text">' + big[2] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[3] + '<span class="big-text">' + big[3] + '</span>';

                document.getElementById('abt-tile-1-sec').textContent = sub[2];
                document.getElementById('abt-tile-2-sec').textContent = sub[3];

                document.querySelector('.tile-1').style.backgroundColor = colrs[2];
                document.querySelector('.tile-2').style.backgroundColor = colrs[0];

                document.getElementById('change-tile-1').style.color = colrs[1];
                document.getElementById('change-tile-2').style.color = colrs[1];
                document.getElementById('abt-tile-1').style.borderBottom = ' 3px solid ' + colrs[1];
                document.getElementById('abt-tile-2').style.borderBottom = ' 3px solid ' + colrs[1];
            } else if (document.getElementById('dot-two').classList.contains('dot-active-white')) {
                document.getElementById('dot-two').classList.remove('dot-active-white');
                document.getElementById('dot-two').classList.remove('dot-active');
                document.getElementById('dot-one').classList.add('dot-active-white');
                document.getElementById('dot-one').classList.add('dot-active');
                document.getElementById('abt-tile-1').innerHTML =
                    primary[0] + '<span class="big-text">' + big[0] + '</span>';
                document.getElementById('abt-tile-2').innerHTML =
                    primary[1] + '<span class="big-text">' + big[1] + '</span>';

                document.getElementById('abt-tile-1-sec').textContent = sub[0];
                document.getElementById('abt-tile-2-sec').textContent = sub[1];

                document.querySelector('.tile-1').style.backgroundColor = colrs[2];
                document.querySelector('.tile-2').style.backgroundColor = colrs[1];

                document.getElementById('change-tile-1').style.color = colrs[1];
                document.getElementById('change-tile-2').style.color = '#fff';

                document.getElementById('abt-tile-1').style.borderBottom = ' 3px solid ' + colrs[1];
                document.getElementById('abt-tile-2').style.borderBottom = ' 3px solid #fff';
            }
        }
    } else {
        console.log('touch');
    }
});

// Brands Slide

var brandsSlide = document.getElementById('brands-images');

var xCordStartBrand = 0,
    xCordEndBrand = 0;

brandsSlide.addEventListener('touchstart', (e) => {
    xCordStartBrand = 0;
    xCordStartBrand = e.touches[0].clientX;

    // console.log(xCordStart);
});

brandsSlide.addEventListener('touchmove', (e) => {
    xCordEndBrand = 0;
    xCordEndBrand = e.touches[0].clientX;
    // console.log(xCordEnd);
});

brandsSlide.addEventListener('touchend', (e) => {
    if (xCordStartBrand - xCordEndBrand > 100 && xCordStartBrand - xCordEndBrand < 250) {
        if (widthScreen < 800) {
            if (document.getElementById('dot-zero-brands').classList.contains('dot-active-white')) {
                document.getElementById('dot-zero-brands').classList.remove('dot-active-white');
                document.getElementById('dot-zero-brands').classList.remove('dot-active');
                document.getElementById('dot-one-brands').classList.add('dot-active-white');
                document.getElementById('dot-one-brands').classList.add('dot-active');

                document.querySelector('.brand__image-one').style.width = '91.1px';
                document.querySelector('.brand__image-one').style.height = '91.1px';
                document.querySelector('.brand__image-one').src = path[1];
            } else if (
                document.getElementById('dot-one-brands').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-one-brands').classList.remove('dot-active-white');
                document.getElementById('dot-one-brands').classList.remove('dot-active');
                document.getElementById('dot-two-brands').classList.add('dot-active-white');
                document.getElementById('dot-two-brands').classList.add('dot-active');

                document.querySelector('.brand__image-one').style.width = '92px';
                document.querySelector('.brand__image-one').style.height = '76px';
                document.querySelector('.brand__image-one').src = path[2];
            } else if (
                document.getElementById('dot-two-brands').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-two-brands').classList.remove('dot-active-white');
                document.getElementById('dot-two-brands').classList.remove('dot-active');
                document.getElementById('dot-three-brands').classList.add('dot-active-white');
                document.getElementById('dot-three-brands').classList.add('dot-active');
                document.querySelector('.brand__image-one').src = path[3];

                document.querySelector('.brand__image-one').style.width = '91.1px';
                document.querySelector('.brand__image-one').style.height = '91.1px';
            } else if (
                document.getElementById('dot-three-brands').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-three-brands').classList.remove('dot-active-white');
                document.getElementById('dot-three-brands').classList.remove('dot-active');
                document.getElementById('dot-zero-brands').classList.add('dot-active-white');
                document.getElementById('dot-zero-brands').classList.add('dot-active');
                document.querySelector('.brand__image-one').src = path[0];

                document.querySelector('.brand__image-one').style.width = '92px';
                document.querySelector('.brand__image-one').style.height = '76px';
            }
        }
    } else if (xCordStartBrand - xCordEndBrand < -100) {
        if (widthScreen < 800) {
            if (document.getElementById('dot-zero-brands').classList.contains('dot-active-white')) {
                document.getElementById('dot-zero-brands').classList.remove('dot-active-white');
                document.getElementById('dot-zero-brands').classList.remove('dot-active');
                document.getElementById('dot-three-brands').classList.add('dot-active-white');
                document.getElementById('dot-three-brands').classList.add('dot-active');

                document.querySelector('.brand__image-one').style.width = '91.1px';
                document.querySelector('.brand__image-one').style.height = '91.1px';
                document.querySelector('.brand__image-one').src = path[3];
            } else if (
                document.getElementById('dot-three-brands').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-three-brands').classList.remove('dot-active-white');
                document.getElementById('dot-three-brands').classList.remove('dot-active');
                document.getElementById('dot-two-brands').classList.add('dot-active-white');
                document.getElementById('dot-two-brands').classList.add('dot-active');
                document.querySelector('.brand__image-one').src = path[2];

                document.querySelector('.brand__image-one').style.width = '92px';
                document.querySelector('.brand__image-one').style.height = '76px';
            } else if (
                document.getElementById('dot-two-brands').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-two-brands').classList.remove('dot-active-white');
                document.getElementById('dot-two-brands').classList.remove('dot-active');
                document.getElementById('dot-one-brands').classList.add('dot-active-white');
                document.getElementById('dot-one-brands').classList.add('dot-active');
                document.querySelector('.brand__image-one').src = path[1];

                document.querySelector('.brand__image-one').style.width = '91.1px';
                document.querySelector('.brand__image-one').style.height = '91.1px';
            } else if (
                document.getElementById('dot-one-brands').classList.contains('dot-active-white')
            ) {
                document.getElementById('dot-one-brands').classList.remove('dot-active-white');
                document.getElementById('dot-one-brands').classList.remove('dot-active');
                document.getElementById('dot-zero-brands').classList.add('dot-active-white');
                document.getElementById('dot-zero-brands').classList.add('dot-active');
                document.querySelector('.brand__image-one').src = path[0];

                document.querySelector('.brand__image-one').style.width = '91.1px';
                document.querySelector('.brand__image-one').style.height = '91.1px';
            }
        }
    } else {
        console.log('touch');
    }
});
//Benefits Slide

var benefitsSlide = document.getElementById('benefits-slide');

var xCordStartBenefit = 0,
    xCordEndBenefit = 0;

benefitsSlide.addEventListener('touchstart', (e) => {
    xCordStartBenefit = 0;
    xCordStartBenefit = e.touches[0].clientX;

    // console.log(xCordStart);
});

benefitsSlide.addEventListener('touchmove', (e) => {
    xCordEndBenefit = 0;
    xCordEndBenefit = e.touches[0].clientX;
    // console.log(xCordEnd);
});

benefitsSlide.addEventListener('touchend', (e) => {
    if (xCordStartBenefit - xCordEndBenefit > 100 && xCordStartBenefit - xCordEndBenefit < 350) {
        if (widthScreen < 800) {
            if (logoNum === 0) {
                document.getElementById('benefits-img').src = logo[1];
                document.getElementById('benefits-heading').textContent = logoHeading[1];
                document.getElementById('benefits-content').textContent = logoContent[1];

                document.getElementById('dot-zero-benefit').classList.remove('dot-active');
                document.getElementById('dot-one-benefit').classList.add('dot-active');
                logoNum = 1;
            } else if (logoNum === 1) {
                document.getElementById('benefits-img').src = logo[2];
                document.getElementById('benefits-heading').textContent = logoHeading[2];
                document.getElementById('benefits-content').textContent = logoContent[2];

                document.getElementById('dot-one-benefit').classList.remove('dot-active');
                document.getElementById('dot-two-benefit').classList.add('dot-active');
                logoNum = 2;
            } else if (logoNum === 2) {
                document.getElementById('benefits-img').src = logo[3];
                document.getElementById('benefits-heading').textContent = logoHeading[3];
                document.getElementById('benefits-content').textContent = logoContent[3];

                document.getElementById('dot-two-benefit').classList.remove('dot-active');
                document.getElementById('dot-three-benefit').classList.add('dot-active');
                logoNum = 3;
            } else if (logoNum === 3) {
                document.getElementById('benefits-img').src = logo[0];
                document.getElementById('benefits-heading').textContent = logoHeading[0];
                document.getElementById('benefits-content').textContent = logoContent[0];

                document.getElementById('dot-three-benefit').classList.remove('dot-active');
                document.getElementById('dot-zero-benefit').classList.add('dot-active');
                logoNum = 0;
            }
        }
    } else if (xCordStartBenefit - xCordEndBenefit < -100) {
        if (widthScreen < 800) {
            if (logoNum === 0) {
                document.getElementById('benefits-img').src = logo[3];
                document.getElementById('benefits-heading').textContent = logoHeading[3];
                document.getElementById('benefits-content').textContent = logoContent[3];

                document.getElementById('dot-zero-benefit').classList.remove('dot-active');
                document.getElementById('dot-three-benefit').classList.add('dot-active');
                logoNum = 3;
            } else if (logoNum === 3) {
                document.getElementById('benefits-img').src = logo[2];
                document.getElementById('benefits-heading').textContent = logoHeading[2];
                document.getElementById('benefits-content').textContent = logoContent[2];

                document.getElementById('dot-three-benefit').classList.remove('dot-active');
                document.getElementById('dot-two-benefit').classList.add('dot-active');
                logoNum = 2;
            } else if (logoNum === 2) {
                document.getElementById('benefits-img').src = logo[1];
                document.getElementById('benefits-heading').textContent = logoHeading[1];
                document.getElementById('benefits-content').textContent = logoContent[1];

                document.getElementById('dot-two-benefit').classList.remove('dot-active');
                document.getElementById('dot-one-benefit').classList.add('dot-active');
                logoNum = 1;
            } else if (logoNum === 1) {
                document.getElementById('benefits-img').src = logo[0];
                document.getElementById('benefits-heading').textContent = logoHeading[0];
                document.getElementById('benefits-content').textContent = logoContent[0];

                document.getElementById('dot-one-benefit').classList.remove('dot-active');
                document.getElementById('dot-zero-benefit').classList.add('dot-active');
                logoNum = 0;
            }
        }
    } else {
        console.log('touch');
    }
});

// Click Buttons

//benefits

// document.getElementById('dot-zero-benefit').addEventListener('click', () => {
//     document.getElementById('dot-zero-benefit').classList.add('dot-active');
//     document.getElementById('dot-one-benefit').classList.remove('dot-active');
//     document.getElementById('dot-two-benefit').classList.remove('dot-active');
//     document.getElementById('dot-three-benefit').classList.remove('dot-active');

//     document.getElementById('benefits-img').src = logo[0];
//     document.getElementById('benefits-heading').textContent = logoHeading[0];
//     document.getElementById('benefits-content').textContent = logoContent[0];
// });

// document.getElementById('dot-one-benefit').addEventListener('click', () => {
//     document.getElementById('dot-zero-benefit').classList.remove('dot-active');
//     document.getElementById('dot-one-benefit').classList.add('dot-active');
//     document.getElementById('dot-two-benefit').classList.remove('dot-active');
//     document.getElementById('dot-three-benefit').classList.remove('dot-active');

//     document.getElementById('benefits-img').src = logo[1];
//     document.getElementById('benefits-heading').textContent = logoHeading[1];
//     document.getElementById('benefits-content').textContent = logoContent[1];
// });

// document.getElementById('dot-two-benefit').addEventListener('click', () => {
//     document.getElementById('dot-zero-benefit').classList.remove('dot-active');
//     document.getElementById('dot-one-benefit').classList.remove('dot-active');
//     document.getElementById('dot-two-benefit').classList.add('dot-active');
//     document.getElementById('dot-three-benefit').classList.remove('dot-active');

//     document.getElementById('benefits-img').src = logo[2];
//     document.getElementById('benefits-heading').textContent = logoHeading[2];
//     document.getElementById('benefits-content').textContent = logoContent[2];
// });

// document.getElementById('dot-three-benefit').addEventListener('click', () => {
//     document.getElementById('dot-zero-benefit').classList.remove('dot-active');
//     document.getElementById('dot-one-benefit').classList.remove('dot-active');
//     document.getElementById('dot-two-benefit').classList.remove('dot-active');
//     document.getElementById('dot-three-benefit').classList.add('dot-active');

//     document.getElementById('benefits-img').src = logo[3];
//     document.getElementById('benefits-heading').textContent = logoHeading[3];
//     document.getElementById('benefits-content').textContent = logoContent[3];
// });
