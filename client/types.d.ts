export interface Reviewnotes {
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

export interface Users {
  id: string;
  name: string;
  photo: string;
}

export interface IContextNotes {
  reviewnotes: Reviewnotes[];
  users: Users[];
  filteredData: Reviewnotes[];
} 