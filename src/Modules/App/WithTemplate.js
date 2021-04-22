import React from 'react';
import { ToastContainer } from 'react-toastify';

import TemplateContainer from '../Template/Container/TemplateContainer';

export default function WithTemplate(ContentComponent) {
  const CombinedComponent = (params) => {
    return (
      <>
        <ToastContainer />
        <TemplateContainer>
          <ContentComponent {...params} />
        </TemplateContainer>
      </>
    );
  };
  return CombinedComponent;
}
