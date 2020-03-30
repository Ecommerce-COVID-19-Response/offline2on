import React from 'react';
import PropTypes from 'prop-types';
import { ResourceTemplate } from '../../templates/resource';

const ResourcePreview = ({ entry, widgetFor }) => {
  return (
    <ResourceTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      content={widgetFor('body')}
    />
  );
};

ResourceTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ResourcePreview;
