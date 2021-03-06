import Github from '../Github';
import Auth from '../Auth'

const routes = [
  {
    name: 'github.repos',
    path: '/',
    component: Github,
    exact: true
  },
  {
    name: 'signin',
    path: '/signin',
    component: Auth,
    exact: true
  }
];

function routePath(name, args = null) {
  let route = routes.find(route => route.name === name);

  if (route === undefined) return '';
  if (args === null) return route.path;

  return Object.keys(args).reduce(
    (path, arg) => path.replace(':' + arg, args[arg]),
    route.path
  );
}

export default routes;

export { routePath };
