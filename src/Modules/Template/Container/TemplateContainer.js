import React from 'react';
import TemplateComponent from '../Component/TemplateComponent';
import { connect } from 'react-redux';

import * as SelectorTemplate from '../Selector/TemplateSelector';
import * as TemplateAction from '../Store/TemplateAction';

import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';

const TemplateContainer = (props) => {
  const { actionTemplate, siderIsOpen } = props;

  // console.log('Sider is open ', siderIsOpen);

  const handleToggleSider = () => {
    if (siderIsOpen) {
      actionTemplate.toggleSider(false);
    } else {
      actionTemplate.toggleSider(true);
    }
  };
  return (
    <div>
      <TemplateComponent handleToggleSider={handleToggleSider} {...props} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  siderIsOpen: SelectorTemplate.sideIsOpenSelector(),
});

const mapDisppatchToProps = (dispatch) => ({
  actionTemplate: bindActionCreators(TemplateAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDisppatchToProps);

export default compose(withConnect)(TemplateContainer);
