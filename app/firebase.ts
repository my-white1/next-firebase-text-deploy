import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyAiLAy0jUlNu0HGR_TdCnaTtwJWnA61FJ4',
	authDomain: 'github-next-js-test-deploy.firebaseapp.com',
	projectId: 'github-next-js-test-deploy',
	storageBucket: 'github-next-js-test-deploy.appspot.com',
	messagingSenderId: '873221644670',
	appId: '1:873221644670:web:004a7b6623e7f10ccc532f',
}

const app = initializeApp(firebaseConfig)

export { app }
