importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBDUDVbfXsOus4Tr5BODQFWbgzdBgOSwGE",
    authDomain: "pwa-test-4b91d.firebaseapp.com",
    databaseURL: "https://pwa-test-4b91d.firebaseio.com",
    projectId: "pwa-test-4b91d",
    storageBucket: "pwa-test-4b91d.appspot.com",
    messagingSenderId: "229006688697",
    appId: "1:229006688697:web:2abac0e5e2f8463d477668",
    measurementId: "G-NEZPNGYGVY"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {

    const title = "Hello World";
    const options = {
        body: payload.data.status
    };

    return self.registration.showNotification(title, options);
});