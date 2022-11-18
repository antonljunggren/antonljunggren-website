import { Component, lazy } from 'solid-js';
import { useRoutes } from '@solidjs/router';
import NavBar, { NavProp } from './components/shared/NavBar';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/Home')),
  },
  {
    path: '/photography',
    component: lazy(() => import('./pages/Photography')),
  },
  {
    path: '/*all',
    component: lazy(() => import('./pages/NotFound')),
  },
];

const navProps: NavProp[] = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/photography',
    title: 'Photography',
  },
];

const App: Component = () => {
  const Routes = useRoutes(routes);

  document.getElementsByTagName('title')[0].remove();

  return (
    <div class='flex flex-col min-h-full justify-items-stretch'>
      <header>
        <NavBar props={navProps} />
      </header>
      <main class='m-4 flex-1'>
        <Routes />
      </main>
      <footer class='bg-gray-200 p-2 flex justify-center'>
        <div class='flex flex-col'>
          <img class='object-contain max-h-10 w-auto' src='/logo192.png' alt='AL' />
          <p>&copy; {new Date().getFullYear()} - Anton Ljunggren</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
