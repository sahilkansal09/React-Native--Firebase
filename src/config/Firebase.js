class FirebaseStart {

    firebaseInit() {
        console.log('here we are in ----');
                firebase.initializeApp({
                apiKey: 'AIzaSyCyHZ2H9fppxQIPlZgCmlL457ryuEEpy6w',
                authDomain: 'authentication-913cf.firebaseapp.com',
                databaseURL: 'https://authentication-913cf.firebaseio.com',
                projectId: 'authentication-913cf',
                storageBucket: 'authentication-913cf.appspot.com',
                messagingSenderId: '199235904547',
            })
        }
        
};

export default FirebaseStart;