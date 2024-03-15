import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/Components/Layout';
const publicRoutes = [
    //Dont login still using many function
    { path: '/', Component: Home },
    { path: '/following', Component: Following },
    { path: '/profile', Component: Profile },
    { path: '/upload', Component: Upload, layout: HeaderOnly },
    { path: '/search', Component: Search, layout: null },
];
const privateRoutes = [
    //must login to using special function
];

export { publicRoutes, privateRoutes };
