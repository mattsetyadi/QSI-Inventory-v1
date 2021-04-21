import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import TemplateContainer from '../Template/Container/TemplateContainer';

export default function WithTemplate(ContentComponent) {
  class CombinedComponent extends Component {
    render() {
      return (
        <TemplateContainer {...this.props}>
          <ToastContainer />
          <ContentComponent />
        </TemplateContainer>
      );
    }
  }
  return CombinedComponent;
}
