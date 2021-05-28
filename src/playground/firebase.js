import * as firebase from "firebase";

const firebaseConfig = {
    // apiKey: "AIzaSyAeuvM-cX13DDUS_Zeb5pYVTiRjHFra3lo",
    // authDomain: "expensify-a0ecd.firebaseapp.com",
    // databaseURL: "https://expensify-a0ecd-default-rtdb.firebaseio.com",
    // projectId: "expensify-a0ecd",
    // storageBucket: "expensify-a0ecd.appspot.com",
    // messagingSenderId: "472712682767",
    // appId: "1:472712682767:web:cc55e85ab92b8e3c04327a",
    // measurementId: "G-2XC53JQXVG"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref('notes/-MakKHaM92qiYf4BhDl2').update({
    body: 'Buy food'
});
database.ref('notes/MakKHaM92qiYf4BhDl2').remove();

database.ref('notes').push({
    title: 'To Do',
    body: 'Go for a run'
})
database.ref('notes').push({
    title: 'Course topics',
    body: 'React'
})
















const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});

database.ref().on('value', (snapshot) => {
    console.log(snapshot.val())
});

setTimeout(() => {
    database.ref('location/city').set('LA');
}, 3500);

setTimeout(() => {
    database.ref('location/city').set('NYC');
}, 3500);

database.ref()
.once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log(val)
}).catch((e) => {
    console.log('Error: ', e);
});

database.ref().set({
    name: "Leah Zeisner",
    age: 19,
    stressLevel: 10,
    isSingle: false,
    location: {
        city: "North Haven",
        country: "United States"
    }
}).then(() => {
    console.log('Data is saved')
}).catch((e) => {
    console.log("Error: ", e);
});



database.ref('isSingle')
.remove()
.then(() => {
    console.log('Data was removed')
}).catch((e) => {
    console.log('Data was not removed. Error: ', e)
})
database.ref('isSingle').set(null);


database.ref().update({
    name: "Taylor Swift",
    age: 31,
    job: "queen of the world / singer",
    isSingle: null
});

database.ref().update({
    'location/city': 'Nashville'
});