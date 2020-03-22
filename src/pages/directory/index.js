import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Agency from "./Agency";
import Merchant from "./Merchant";
import { Helmet } from "react-helmet";

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
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
          backgroundColor: "#f40",
          color: "white",
          padding: "1rem"
        }}
      >
        Directory
      </h2>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="directory-list">
              {edges.map(({ node }) =>
                node.data.Type === "Merchant" ? (
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
      filter: { table: { eq: "Directory" }, data: { Published: { eq: true }, Type: {eq: "Agency"} } }
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
            Agency_Platforms
          }
        }
      }
    }
  }
`;
