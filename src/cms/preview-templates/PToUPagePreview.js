import React from 'react'
import PropTypes from 'prop-types'
import { PToUPageTemplate } from '../../templates/ptou-page'

const PToUPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PToUPageTemplate
        title={data.title}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PToUPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PToUPagePreview
