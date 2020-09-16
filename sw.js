"use strict";

window.onload = function (e) {
    console.log("알림성공")
}

export const PUSH_APPLICATION_SERVER_KEY = 'AAAANVHcwbk:APA91bEDFGpqgjIBBrbq0MRwmtJsOPmhVo0hP3xc6OXrvjl7sPwFWEhyhhDFs0JcjE1e7hne1CCW9GMmuV9GggbqYq982yNQoUE7Ofh2Y5EZBdmRc9k37FsEJaTAxA1rfNoErWck4Adr';

// 해시 처리
const urlB64ToUint8Array = (base64String: string) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};

// 구독하기
export const subscribeUser = (swRegistration) => {

    const applicationServerKey = urlB64ToUint8Array(PUSH_APPLICATION_SERVER_KEY);
    const ACCESS_PUSH_TOKEN = 'ACCESS_PUSH_TOKEN';

    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey, // 서버 키 등록
    }).then((subscription) => {
        const pwaSubscription = JSON.parse(JSON.stringify(subscription));
        localStorage.setItem(ACCESS_PUSH_TOKEN, pwaSubscription.keys.auth); // 추후 코드 제거를 위해 저장합니다.
        pushSubscription(pwaSubscription);
    }).catch(e => console.log(`subscribe error`, e));
};

export const pushSubscription = (subscription) => {
    // 서버로 구독 정보 전송 
};



if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://ohtaeyang95.github.io/KaKao/service-worker.js')
        .then(function (success) {
            console.log('[Service Worker 등록 완료]', success)
        })
        .catch(function (error) {
            console.log('[Service Worker 등록 실패]', error);
        });
}