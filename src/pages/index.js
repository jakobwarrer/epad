/* global graphql */

import React from 'react';

const IndexPage = props => <main />;

export default IndexPage;

export const pageQuery = graphql`
  query GitQuery {
    site {
      
    }
  }
`;
