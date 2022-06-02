import React from 'react';

import RequestItems from '../RequestItems';

const RejectedRequest = () => {
  return <RequestItems status="rejected" header="Rejected requests" />;
};

export default RejectedRequest;
