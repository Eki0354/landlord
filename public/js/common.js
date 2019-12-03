$(function () {
    window.addEventListener('beforeunload', function () {
        $.get('/user/leave', () => {});
    });
});