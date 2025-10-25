import password from './assets/Backgrounds/password.jpg'
import todo from './assets/Backgrounds/todo.jpg'
import movie from './assets/Backgrounds/movie.jpg'
import chat from './assets/Backgrounds/chat.jpg'
import music from './assets/Backgrounds/music.jpg'

const Backgrounds = [{
    bg:password,
    title:'Password Manager',
    link:'https://github.com/AnilKumar9210/Password-Manager',
    desc:'An application to securely store and manage your passwords with encryption and easy access.',
    tech:['Html5', 'Css3', 'JavaScript'],
    },
 {
        bg:todo, 
        title:'Todo App', 
        link:'https://github.com/AnilKumar9210/Todo-List',
        desc:'A task management application to help you organize and prioritize your tasks.',
        tech:['ReactJs'],
    }, 
    {
        bg:movie, 
        title:'Movie App', 
        link:'https://github.com/AnilKumar9210/movie-finder',
        desc:'An application to browse and discover movies with detailed information.',
        tech:['ReactJs','API'],
    },
    {
        bg:chat, 
        title:'Chat App',
        link:'https://github.com/AnilKumar9210/Chat-App',
         desc:'A real-time chat application for seamless communication.',
         tech:['ReactJs','firebase']
    }, 
    {
        bg:music, 
        title:'Music App', 
        link:'https://github.com/AnilKumar9210/Spotify-clone',
        desc:'A music streaming application to enjoy your favorite songs.',
        tech:['Html','css','javascript']
    }]
export default Backgrounds;