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

export const SEO = () => {
  const {
    site: {
      siteMetadata: {
        defaultTitle,
        defaultDescription,
        siteUrl
      }
    }
  } = useStaticQuery(seoQuery);

  const seo = {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl
  };

  return (
    <Helmet
      title={seo.title}
    >
      <html lang="en"></html>
      <meta charSet="utf-8" />
      <link rel="canonical" href={seo.url}></link>
      <meta name="description" content={seo.description}></meta>

      {seo.url && <meta property="og:url" content={seo.url} ></meta>}
      {seo.title && <meta property="og:title" content={seo.title} ></meta>}
      {seo.description && <meta property="og:description" content={seo.description} ></meta>}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: '',
  description: ''
};
