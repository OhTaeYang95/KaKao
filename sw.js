"use strict";

if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/KaKao/service-worker.js')
            .then(function (success) {
                console.log('[Service Worker 등록 완료]', success);
                console.log('5');
            })
            .catch(function (error) {
                console.log('[Service Worker 등록 실패]', error);
            });
    });
}