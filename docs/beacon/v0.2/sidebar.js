module.exports = [
  {
    title: '简述',
    initialOpenGroupIndex: 1,
    collapsable: false,
    children: [
      '', //README
      'introduction/why-use-beacons',
      'introduction/hackathon',
    ],
  },
  {
    title: 'Beacon服务端方法',
    initialOpenGroupIndex: 1,
    collapsable: false,
    children: [
      'functions/', // README
      'functions/read-beacon',
      'functions/reader-can-read-beacon',
      'functions/beaconid-reader-whiteliststatus',
    ],
  },

  {
    title: '引用',
    initialOpenGroupIndex: 1,
    collapsable: false,
    children: [
      'reference/beacon-scheme.md',
      'reference/contract-addresses.md',
      'reference/beacon-browser.md',
      'reference/monitor.md',
    ],
  },
];
