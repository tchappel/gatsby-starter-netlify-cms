import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

export const PToUPageTemplate = ({
  title,
}) => {

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

PToUPageTemplate.propTypes = {
  title: PropTypes.string,
};

const PToUPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PToUPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
      />
    </Layout>
  );
};

PToUPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PToUPage;

export const ptouPageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "ptou-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
