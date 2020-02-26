import Home from '../pages/Home';
import About from '../pages/About';

 const routes = [
    {
        path:'/',
        component:Home,
        protected: false
    },
    {
        path:'/about',
        component:About,
        protected: true
    },
  
];

export default routes;