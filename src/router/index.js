import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import CoursePage from '../pages/CoursePage';
import ProfilePage from '../pages/ProfilePage';

export default createRouter({
    history: createWebHashHistory(),
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/courses',
            component: CoursesPage
        },
        {
            path: '/courses/course',
            component: CoursePage
        },
        {
            path: '/profile',
            component: ProfilePage
        },
    ]
})