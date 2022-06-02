import React from 'react';

import RequestItems from '../RequestItems';

const CancelledRequest = () => {
  return <RequestItems status="cancelled" header="Cancelled requests" />;
};

export default CancelledRequest;
