import { useLocation, Link } from 'react-router-dom';

const useBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs = pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
    const isLast = index === pathnames.length - 1;
    return {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      path: routeTo,
      isLast,
    };
  });

  return [{ name: 'Home', path: '/', isLast: pathnames.length === 0 }, ...breadcrumbs];
};

export default useBreadcrumbs;