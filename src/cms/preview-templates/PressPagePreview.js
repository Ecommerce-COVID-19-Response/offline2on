import React from 'react'
import PropTypes from 'prop-types'
import { PressPageTemplate } from '../../templates/press-page'

const PressPagePreview = ({ entry, widgetFor }) => (
  <PressPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PressPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PressPagePreview
