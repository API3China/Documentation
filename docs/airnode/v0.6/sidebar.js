module.exports = [
  {
    title: '简介',
    initialOpenGroupIndex: 0,
    collapsable: true,
    children: ['', 'introduction/why-use-airnode'],
  },
  {
    title: 'API供应商',
    initialOpenGroupIndex: 0,
    collapsable: true,
    children: [
      'grp-providers/', // Routes to the README.md in grp-providers
      {
        title: '设计理念',
        path: 'grp-providers/airnode/design-philosophy',
      },
      { title: '实现', path: 'grp-providers/airnode/implementation' },
      {
        title: '以太坊供应商',
        path: 'grp-providers/airnode/ethereum-providers',
      },
      {
        title: '创建一个Airnode',
        collapsable: true,
        children: [
          'grp-providers/guides/build-an-airnode/',
          'grp-providers/guides/build-an-airnode/api-integration',
          'grp-providers/guides/build-an-airnode/api-security',
          'grp-providers/guides/build-an-airnode/configuring-airnode',
          {
            title: '使用授权者',
            path: 'grp-providers/guides/build-an-airnode/apply-auth',
          },
          {
            title: 'Heartbeat',
            path: 'grp-providers/guides/build-an-airnode/heartbeat',
          },
          {
            title: 'HTTP网关',
            path: 'grp-providers/guides/build-an-airnode/http-gateways',
          },
          'grp-providers/guides/build-an-airnode/deploying-airnode',
        ],
      },
      {
        title: 'Docker镜像',
        collapsable: true,
        children: [
          'grp-providers/docker/',
          'grp-providers/docker/deployer-image',
          'grp-providers/docker/client-image',
          'grp-providers/docker/admin-cli-image',
        ],
      },
      {
        title: '教程',
        collapsable: true,
        children: [
          { title: '概述', path: 'grp-providers/tutorial/' },
          {
            title: '快速部署容器',
            collapsable: true,
            children: [
              'grp-providers/tutorial/quick-deploy-container/',
              'grp-providers/tutorial/quick-deploy-container/config-json',
              'grp-providers/tutorial/quick-deploy-container/secrets-env',
            ],
          },
          {
            title: '快速部署AWS',
            collapsable: true,
            children: [
              'grp-providers/tutorial/quick-deploy-aws/',
              'grp-providers/tutorial/quick-deploy-aws/config-json',
              'grp-providers/tutorial/quick-deploy-aws/secrets-env',
              'grp-providers/tutorial/quick-deploy-aws/aws-env',
            ],
          },
          {
            title: '快速部署GCP',
            collapsable: true,
            children: [
              'grp-providers/tutorial/quick-deploy-gcp/',
              'grp-providers/tutorial/quick-deploy-gcp/config-json',
              'grp-providers/tutorial/quick-deploy-gcp/secrets-env',
            ],
          },
        ],
      },
      //'grp-providers/validator',
    ],
  },
  {
    title: '开发者',
    initialOpenGroupIndex: 0,
    collapsable: true,
    children: [
      'grp-developers/', // Routes to the README.md in grp-developers
      'grp-developers/requesters-sponsors',
      'grp-developers/call-an-airnode',
      'grp-developers/using-templates',
      'grp-developers/fees',
      /* Hide self-serve until AN-334 if completed. */
      //'grp-developers/self-serve-platforms',
    ],
  },
  {
    title: '概念和定义',
    collapsable: true,
    initialOpenGroupIndex: -1,
    children: [
      'concepts/', // Routes to the README.md in /concepts
      'concepts/airnode',
      'concepts/endpoint',
      'concepts/authorization',
      'concepts/airnode-auth',
      'concepts/relay-meta-auth',
      'concepts/requester',
      'concepts/sponsor',
      'concepts/template',
      'concepts/request',
      'concepts/chain-providers',
    ],
  },
  {
    title: '引用',
    initialOpenGroupIndex: -1,
    collapsable: false,
    children: [
      {
        title: '技术规范',
        collapsable: true,
        children: [
          'reference/specifications/ois',
          'reference/specifications/airnode-abi-specifications',
          'reference/specifications/reserved-parameters',
        ],
      },
      {
        title: '开发文件',
        collapsable: true,
        children: [
          'reference/deployment-files/',
          {
            title: 'config.json',
            path: 'reference/deployment-files/config-json',
          },
          {
            title: 'secrets.env',
            path: 'reference/deployment-files/secrets-env',
          },
          { title: 'aws.env', path: 'reference/deployment-files/aws-env' },
          {
            title: 'receipt.json',
            path: 'reference/deployment-files/receipt-json',
          },
        ],
      },
      {
        title: '样例文件',
        collapsable: true,
        children: [
          'reference/examples/config-json',
          'reference/examples/secrets-env',
          'reference/examples/aws-env',
        ],
      },
      {
        title: '模板',
        children: [
          'reference/templates/ois-json',
          'reference/templates/config-json',
          'reference/templates/secrets-env',
          'reference/templates/aws-env',
        ],
      },
      {
        title: '包',
        children: [
          'reference/packages/', // Routes to the README.md in reference/packages/
          'reference/packages/adapter',
          'reference/packages/admin-cli',
          'reference/packages/airnode-abi',
          'reference/packages/deployer',
          // For now this package is not added, it is considered internal use only
          //'reference/packages/operation',
          'reference/packages/validator',
        ],
      },
      'reference/airnode-addresses',
      'reference/cloud-resources',
    ],
  },
];
