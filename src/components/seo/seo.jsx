import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const seoQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`;

export const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: {
        defaultTitle,
        defaultDescription,
        siteUrl,
      },
    },
  } = useStaticQuery(seoQuery);

  const seo = {
    title: defaultTitle || title,
    description: defaultDescription || description,
    url: siteUrl,
  };

  return (
    <Helmet
      title={seo.title}
    >
      <html lang="en" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: '',
  description: '',
};

export default SEO;
