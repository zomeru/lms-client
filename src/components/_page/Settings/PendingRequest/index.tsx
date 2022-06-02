import React from 'react';

import RequestItems from '../RequestItems';

const PendingRequest = () => {
  return <RequestItems status="pending" header="Pending requests" />;
};

export default PendingRequest;
