const initialProjects = [
  {
    name: 'Cryometrix Freezers',
    dueDate: new Date(),
    tasks: ['task1', 'task1', 'task1', 'task1', 'task1'],
  },
  {
    name: 'Reflect Scientific Corporate Website',
    dueDate: new Date(),
    tasks: ['task1', 'task1', 'task1'],
  },
  {
    name: 'SOS Method',
    dueDate: new Date(),
    tasks: ['task1', 'task1', 'task1', 'task1', 'task1'],
  },
];

const projectReducer = (projects = initialProjects, action) => {
  switch (action.type) {
    default:
      return projects;
  }
};

export default projectReducer;
