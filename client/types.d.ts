export interface data {
  _id: {
    $oid: string;
  };
  assignees: [
    {
      $oid: string;
    }
  ];
  comments: [];
  createdAt: {
    $date: string;
  };
  description: string;
  dueDate: string;
  isClosed: boolean;
  priority: {
    text: string;
    sortKey: number;
  };
  reporterId: {
    $oid: string;
  };
  sectionRef: string;
  status: string;
  title: string;
  type: string;
  updatedAt: {
    $date: string;
  };
}
