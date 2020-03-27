import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Agency from '../components/Agency';
import Merchant from '../components/Merchant';

export default function DirectoryPage({ data }) {
  const {
    allAirtable: { edges }
  } = data;

  return (
    <Layout>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/60dc5d1e62.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div className="py-16 bg-gray-100 sm:py-20 md:py-28">
        <div className="relative text-center">
          <h1 className="inline-block text-4xl font-semibold text-gray-900 md:text-5xl">
            Directory
          </h1>
          <div
            className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
            style={{ transform: 'translate3D(-50%, 10px, 0)' }}
          />
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="directory-list">
              {edges.map(({ node }) =>
                node.data.Type === 'Merchant' ? (
                  <Merchant key={node.id} {...node.data} />
                ) : (
                  <Agency key={node.id} {...node.data} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query DirectoryPageQuery {
    allAirtable(
      filter: {
        table: { eq: "General" }
        data: { Published: { eq: true }, Type: { eq: "Agency" } }
      }
    ) {
      edges {
        node {
          id
          data {
            Business_Name
            Email
            Phone
            Contact_Name
            Location
            Created_At
            Updated_At
            Notes
            Type
            Merchant_Vertical
            Merchant_Budget
            Merchant_Ships
            Agency_Expertise
            Platforms
          }
        }
      }
    }
  }
`;
