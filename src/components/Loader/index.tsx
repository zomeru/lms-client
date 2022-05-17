import React from 'react';

import { StyledLoader } from './style';

const Loader = () => {
  return (
    <StyledLoader>
      <div className="section bg-color">
        <div className="loader-cubes" />
      </div>
    </StyledLoader>
  );
};

export default Loader;
