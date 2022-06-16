module.exports = [
  {
    title: '简述',
    initialOpenGroupIndex: 1,
    collapsable: false,
    children: [
      '', // API3 DAO
      { title: 'API3 DAO', path: 'introduction/api3-dao' },
      { title: 'DAO池', path: 'introduction/dao-pool' },
      'introduction/symlink-blog-posts',
    ],
  },
  {
    title: '控制面板',
    collapsable: false,
    children: [
      'dashboard/',
      'dashboard/staking',
      'dashboard/proposals',
      'dashboard/voting',
      'dashboard/videos',
      'dashboard/dao-tracker',
    ],
  },
  {
    title: '合约结构',
    collapsable: false,
    children: [
      'contract-architecture/',
      'contract-architecture/pool',
      'contract-architecture/dao',
      'contract-architecture/voting',
      'contract-architecture/dashboard-attributes',
    ],
  },
];
