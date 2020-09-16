"use strict";


window.onload = function (e) {
    console.log("알림성공")
    Notification.requestPermission().then(function (result) {
        if (result === 'granted') {
            randomNotification();
        }
    });
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://ohtaeyang95.github.io/KaKao/service-worker.js')
        .then(function (success) {
            console.log('[Service Worker 등록 완료]', success)
        })
        .catch(function (error) {
            console.log('[Service Worker 등록 실패]', error);
        });
}