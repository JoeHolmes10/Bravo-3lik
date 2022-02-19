let icon = document.querySelector('.fas');
let iconContainer = document.querySelector('.icon');

iconContainer.addEventListener('mouseover', function () {
    icon.style.rotate = '360deg';
    iconContainer.addEventListener('mouseleave', function () {
        icon.style.rotate = '0deg';
    });
});

let video = document.getElementById('video');

let video_2 = document.getElementById('video2');

let videoContainer = document.querySelector('.vidContainer');

let input = document.forms['form']['abc'].value;

let vidContainer_2 = document.querySelector('.vidContainer2');

let remove = document.querySelector('.else');

let submit = document.querySelector('.submit');

let input_2 = document.getElementById('text');

iconContainer.setAttribute('type', 'submit');

iconContainer.addEventListener('click', function () {
    if (
        (videoContainer.classList.contains('remove') && input.length > 0) ||
        input_2.value.length > 0
    ) {
        videoContainer.classList.remove('remove');
        video.muted = false;
        video.play();
        remove.classList.add('elremove');
    } else {
        vidContainer_2.classList.remove('remove_2');
        video_2.muted = false;
        video_2.play();
        remove.classList.remove('elremove');
    }
});

vidContainer_2.addEventListener('click', function () {
    vidContainer_2.classList.add('remove_2');
    video_2.muted = 'muted';
});

videoContainer.addEventListener('click', function () {
    videoContainer.classList.add('remove');
    video.muted = 'muted';
});

window.onload = function () {
    video.pause();
    video_2.pause();
    video.muted = 'muted';
    video_2.muted = 'muted';
};
