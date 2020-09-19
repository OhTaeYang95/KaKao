"use strict";

if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('https://ohtaeyang95.github.io/KaKao/service-worker.js')
        .then(function (success) {
            console.log('[Service Worker 등록 완료]', success);
            console.log('3');
        })
        .catch(function (error) {
            console.log('[Service Worker 등록 실패]', error);
        });

}