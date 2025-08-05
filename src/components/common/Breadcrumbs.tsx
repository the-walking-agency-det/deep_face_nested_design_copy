import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';

const Breadcrumbs: React.FC = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {!crumb.isLast ? (
              <Link to={crumb.path} className="text-accent-primary hover:underline">
                {crumb.name}
              </Link>
            ) : (
              <span className="text-light-text-secondary dark:text-dark-text-secondary">
                {crumb.name}
              </span>
            )}
            {!crumb.isLast && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;