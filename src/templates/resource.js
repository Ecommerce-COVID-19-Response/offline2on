import React from 'react';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';

export default function ResourceTemplate({
  data: { markdownRemark: resource }
}) {
  return (
    <Layout>
      <section>
        <div className="py-24 bg-gray-100">
          <div className="max-w-xl mx-auto text-center">
            <div className="relative text-center">
              <h1 className="inline-block text-4xl font-semibold text-gray-900 md:text-5xl">
                {resource.frontmatter.title}
              </h1>
              <div
                className="absolute bottom-0 w-12 h-1 bg-orange-500 left-1/2"
                style={{ transform: 'translate3D(-50%, 10px, 0)' }}
              />
            </div>
            <h2 className="mt-10 text-xl text-gray-500">
              {resource.frontmatter.subtitle}
            </h2>
          </div>
        </div>

        <div className="max-w-4xl px-6 py-16 mx-auto">
          <HTMLContent className="content" content={resource.html} />
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ResourceByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
