"use strict";
// && 'PushManager' in window
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('9');
        navigator.serviceWorker.register('https://ohtaeyang95.github.io/KaKao/service-worker.js')
            .then(function (success) {
                console.log('[Service Worker 등록 완료]', success);
            })
            .catch(function (error) {
                console.log('[Service Worker 등록 실패]', error);
            });
    });
}