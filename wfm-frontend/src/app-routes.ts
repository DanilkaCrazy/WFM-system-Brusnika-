export const AppRoutes = {
  User: {
    FullPath: '/user',
  },
  Management: {
    FullPath: '/managment',
  },
  Planning: {
    FullPath: '/'
  },
  Calculator: {
    FullPath: '/calculator'
  },
  Staff: {
    FullPath: '/staff',
  },
  StaffMember: {
    FullPath: '/staff/:id',
    RelativePath: '/:id',
  },
  Login: {
    FullPath: '/login',
  },
  SignUp: {
    FullPath: '/signup',
  },
  Error: {
    FullPath: '*'
  },
} as const;
