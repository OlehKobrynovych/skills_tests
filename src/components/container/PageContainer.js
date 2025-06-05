import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PageContainer = ({ title='', description='', keywords='', children }) => (
  <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
    {children}
  </div>
);

PageContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default PageContainer;
