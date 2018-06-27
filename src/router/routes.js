// import of components
import Home from '@/components/home/Home';
import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Solutions from '@/components/solutions/Solutions';
import Service from '@/components/solutions/Service';
import ProcessoSeletivo from '@/components/ps/ProcessoSeletivo'



const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/processoseletivo',
    component: ProcessoSeletivo,
  },
  {
    path: '/solutions',
    component: Solutions,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/service/:id',
    component: Service,
    name: 'service',
  },
  {
    path: '*',
    redirect: '/',
  },
];

export default { routes };
