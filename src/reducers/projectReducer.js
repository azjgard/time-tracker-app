const initialProjects = [
  {
    name: 'Cryometrix Freezers',
    dueDate: new Date(),
    tasks: [
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'todo',
      },
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'todo',
      },
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'doing',
      },
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'review',
      },
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'todo',
      },
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'todo',
      },
    ],
  },
  {
    name: 'Reflect Scientific Corporate Website',
    dueDate: new Date(),
    tasks: [
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'todo',
      },
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'todo',
      },
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'doing',
      },
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'review',
      },
    ],
  },
  {
    name: 'SOS Method',
    dueDate: new Date(),
    tasks: [
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'todo',
      },
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'todo',
      },
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'doing',
      },
      {
        id: 0,
        name: 'Random task #1',
        dueDate: new Date(),
        description: '',
        status: 'review',
      },
    ],
  },
];

const projectReducer = (projects = initialProjects, action) => {
  switch (action.type) {
    default:
      return projects;
  }
};

export default projectReducer;
