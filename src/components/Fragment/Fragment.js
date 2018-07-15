import React from 'react';
import {Fragment as OriginalFragment} from 'redux-little-router';

export const Fragment = ({partial, forRoute, ...rest}) => {
  let props;
  if (!partial) {
    props = {withConditions: location => location.pathname === forRoute};
  } else {
    props = {forRoute};
  }

  return <OriginalFragment {...props} {...rest} />;
};
