define({ "api": [
  {
    "type": "get",
    "url": "/deployments/:workflowID/:taskID/:platformID",
    "title": "3. Return available deployment plans",
    "version": "2.0.0",
    "name": "GetDeployments",
    "group": "Deployment_Plans",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifier for a workflow, e.g. 'ms2'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier for a task, e.g. 't2.1'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platformID",
            "description": "<p>identifier for a platform, e.g. 'excesscluster'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/deployments/ms2/t2.1/excesscluster",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deploymentPlanID",
            "description": "<p>identifier for a deployment plan</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deploymentPlanID.href",
            "description": "<p>link to the actual deployment plan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"cf8ba177b43e4a837c4c213f6a149ead4f1ec9ef2e976306a07711e88bf6c60c\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/cf8ba177b43e4a837c4c213f6a149ead4f1ec9ef2e976306a07711e88bf6c60c\"\n  },\n  \"e57d089e2cc396f04d277aa35c399b4a5af5b56f65682b4f4952dd7f334a2c15\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/e57d089e2cc396f04d277aa35c399b4a5af5b56f65682b4f4952dd7f334a2c15\"\n  },\n  \"d6d33f5097e23e55659aba9004dbeb257970926e3927a01c10ff431fe48555e9\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/d6d33f5097e23e55659aba9004dbeb257970926e3927a01c10ff431fe48555e9\"\n  },\n  \"79f2e72501da8a8bcff9d6cd711b44a0fe8174a751e897c51ef7a7d110b925d8\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/79f2e72501da8a8bcff9d6cd711b44a0fe8174a751e897c51ef7a7d110b925d8\"\n  },\n  ..\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No deployment plans available for the given combination of workflow, task, and platform</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No deployment plans found for the given worklow, task, and platform.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/deployments.js",
    "groupTitle": "Deployment_Plans"
  },
  {
    "type": "get",
    "url": "/deployments/:workflowID/:taskID/:platformID/:deploymentPlanID",
    "title": "2. Return a given deployment plan",
    "version": "2.0.0",
    "name": "GetExperiments",
    "group": "Deployment_Plans",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifier for a workflow, e.g. 'ms2'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier for a task, e.g. 't2.1'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platformID",
            "description": "<p>identifier for a platform, e.g. 'excesscluster'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deploymentPlanID",
            "description": "<p>identifier for a deployment plan, e.g. 'cf8ba177b43e4a837c4c213f6a149ead4f1ec9ef2e976306a07711e88bf6c60c'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/cf8ba177b43e4a837c4c213f6a149ead4f1ec9ef2e976306a07711e88bf6c60c",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "estimatedTime",
            "description": "<p>estimated time to finish</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "node",
            "description": "<p>aggregates information for a node the task was deployed on</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "node.id",
            "description": "<p>identifier for the node</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": true,
            "field": "node.cpus",
            "description": "<p>array of CPU cores</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "node.cpus.id",
            "description": "<p>identifier of the core</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "node.cpus.pwMode",
            "description": "<p>power mode of the CPU in percentage (100 equals full perfomance)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "experiments",
            "description": "<p>list of experiments</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "experiments.experiment",
            "description": "<p>identifier of the experiment that used this deployment plan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"estimatedTime\": 0,\n  \"node\": {\n    \"id\": \"node02\",\n    \"cpus\": [\n      {\n        \"id\": \"cpu0\",\n        \"cores\": [\n          {\n            \"id\": \"core0\",\n            \"pwMode\": 100\n          },\n          {\n            \"id\": \"core1\",\n            \"pwMode\": 100\n          }\n        ]\n      }\n    ]\n  },\n  \"experiments\": {\n    \"AVXQa1RU0GMPeuCn4_2S\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No deployment plans available for the given combination of workflow, task, and platform</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Deployment plan unavailable.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/deployments.js",
    "groupTitle": "Deployment_Plans"
  },
  {
    "type": "put",
    "url": "/deployments/:workflowID/:taskID/:platformID/:experimentID",
    "title": "1. Add a new deployment plan",
    "version": "2.0.0",
    "name": "PutDeployments",
    "group": "Deployment_Plans",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifier for a workflow, e.g. 'ms2'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier for a task, e.g. 't2.1'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platformID",
            "description": "<p>identifier for a platform, e.g. 'excesscluster'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>identifier of an experiment, e.g. 'AVX123A3asd_S'</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "estimatedTime",
            "description": "<p>estimated time to finish</p>"
          },
          {
            "group": "body",
            "type": "Object",
            "optional": true,
            "field": "node",
            "description": "<p>aggregates information for a node the task was deployed on</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "node.id",
            "description": "<p>identifier for the node</p>"
          },
          {
            "group": "body",
            "type": "Array",
            "optional": true,
            "field": "node.cpus",
            "description": "<p>array of CPU cores</p>"
          },
          {
            "group": "body",
            "type": "Object",
            "optional": true,
            "field": "node.cpus.id",
            "description": "<p>identifier of the core</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "node.cpus.pwMode",
            "description": "<p>power mode of the CPU in percentage (100 equals full perfomance)</p>"
          },
          {
            "group": "body",
            "type": "Object",
            "optional": true,
            "field": "experiments",
            "description": "<p>list of experiments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"estimatedTime\":217,\n  \"node\":{\n    \"id\":\"node01\",\n    \"cpus\":[\n      {\n        \"id\":\"cpu0\",\n        \"cores\":[\n          {\n            \"id\":\"core0\",\n            \"pwMode\":100\n          },\n          {\n            \"id\":\"core1\",\n            \"pwMode\":100\n          },\n          {\n            \"id\":\"core2\",\n            \"pwMode\":100\n          },\n          {\n            \"id\":\"core3\",\n            \"pwMode\":100\n          }\n        ]\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/AVX123A3asd_S",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deploymentPlanID",
            "description": "<p>identifier for a deployment plan</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deploymentPlanID.href",
            "description": "<p>link to the actual deployment plan</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"deployment_id\": \"da117e8171ae58b935a02a9768c21ce96ffd5f6e\"\n  \"predicted_time\": 2017\n  \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/deployments/ms2/t2.1/test_cluster/da117e8171ae58b935a02a9768c21ce96ffd5f6e\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Could not store given deployment plan.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Could not store given deployment plan.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/deployments.js",
    "groupTitle": "Deployment_Plans"
  },
  {
    "type": "get",
    "url": "/energy/:workflowID/:experimentID",
    "title": "1. Return energy data for the given experiment ID",
    "version": "2.0.0",
    "name": "GetEnergy",
    "group": "Energy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifier for a workflow, e.g. 'ms2'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>identifier for an experiment, e.g. 'AVQa1RU0GMPeuCn4_2S_'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/h2/dreamcloud/mf/energy/ms2/AVQa1RU0GMPeuCn4_2S_",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier for a task of the given workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taskID.timestamp",
            "description": "<p>timestamp when the measurement was taken</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taskID.type",
            "description": "<p>group identifier (equals plug-in name)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taskID.metric",
            "description": "<p>value sampled for the given metric</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"T2.1\": [\n      {\n         \"@timestamp\": \"2016-04-15T18:51:07.4292211\",\n         \"type\": \"pwm\",\n         \"ATX12V_node01\": 19,\n         \"CPU1_node01\": 111,\n         \"CPU2_node01\": 113,\n         \"GPU_node01\": 15\n      },\n      {\n         \"@timestamp\": \"2016-04-15T18:51:07.4292611\",\n         \"type\": \"pwm\",\n         \"ATX12V_node01\": 19,\n         \"CPU2_node01\": 110,\n         \"CPU1_node01\": 115,\n         \"GPU_node01\": 15\n      },\n      {\n         \"@timestamp\": \"2016-04-15T18:51:07.4292111\",\n         \"type\": \"pwm\",\n         \"GPU_node01\": 15,\n         \"CPU1_node01\": 110,\n         \"ATX12V_node01\": 19,\n         \"CPU2_node01\": 113\n      },\n      ...\n   ],\n   \"T2.2\": [\n      {\n         \"@timestamp\": \"2016-04-15T18:52:08.4293011\",\n         \"type\": \"pwm\",\n         \"CPU1_node01\": 118,\n         \"GPU_node01\": 15,\n         \"CPU2_node01\": 112,\n         \"ATX12V_node01\": 19\n      },\n      ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The given workflow ID cannot be found in the database.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Elasticsearch specific error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Given workflow ID does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/energy.js",
    "groupTitle": "Energy"
  },
  {
    "type": "get",
    "url": "/energy/:workflowID/:taskID/:experimentID",
    "title": "2. Return energy data filtered by task ID",
    "version": "2.0.0",
    "name": "GetEnergyByTask",
    "group": "Energy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifier for a workflow, e.g. 'ms2'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier for a task, e.g. 't2.1'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>identifier for an experiment, e.g. 'AVX'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/h2/dreamcloud/mf/energy/ms2/t2.1/AVQa1RU0GMPeuCn4_2S_",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier for a task of the given workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taskID.timestamp",
            "description": "<p>timestamp when the measurement was taken</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taskID.type",
            "description": "<p>group identifier (equals plug-in name)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taskID.metric",
            "description": "<p>value sampled for the given metric</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"t2.1\": [\n      {\n         \"@timestamp\": \"2016-04-15T18:51:07.4292211\",\n         \"type\": \"pwm\",\n         \"ATX12V_node01\": 19,\n         \"CPU1_node01\": 111,\n         \"CPU2_node01\": 113,\n         \"GPU_node01\": 15\n      },\n      {\n         \"@timestamp\": \"2016-04-15T18:51:07.4292611\",\n         \"type\": \"pwm\",\n         \"ATX12V_node01\": 19,\n         \"CPU2_node01\": 110,\n         \"CPU1_node01\": 115,\n         \"GPU_node01\": 15\n      },\n      {\n         \"@timestamp\": \"2016-04-15T18:51:07.4292111\",\n         \"type\": \"pwm\",\n         \"GPU_node01\": 15,\n         \"CPU1_node01\": 110,\n         \"ATX12V_node01\": 19,\n         \"CPU2_node01\": 113\n      },\n      ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No data for given task is stored.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Elasticsearch specific error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Data unavailable.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/energy.js",
    "groupTitle": "Energy"
  },
  {
    "type": "get",
    "url": "/experiments",
    "title": "1. Returns a list of all experiment IDs",
    "version": "2.0.0",
    "name": "GetExperiments",
    "group": "Experiments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "details",
            "description": "<p>if set, more detailed information for each experiment is given</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "workflows",
            "description": "<p>filters results by the given workflow, e.g. 'ms2'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/experiments",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier for a task of the given workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taskID.timestamp",
            "description": "<p>timestamp when the measurement was taken</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taskID.type",
            "description": "<p>group identifier (equals plug-in name)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taskID.metric",
            "description": "<p>value sampled for the given metric</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"AVZ-ll9FGYwmTvCuSnjW\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v2/mf/experiments/AVZ-ll9FGYwmTvCuSnjW?workflow=ms2\"\n  },\n  \"AVZ-kZTjGYwmTvCuSnZV\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v2/mf/experiments/AVZ-kZTjGYwmTvCuSnZV?workflow=ms2\"\n  },\n  \"AVZ-j2hEGYwmTvCuSnVE\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v2/mf/experiments/AVZ-j2hEGYwmTvCuSnVE?workflow=ms2\"\n  },\n  ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Elasticsearch specific error message.</p>"
          }
        ]
      }
    },
    "filename": "routes/v2/dreamcloud/experiments.js",
    "groupTitle": "Experiments"
  },
  {
    "type": "get",
    "url": "/experiments/:experimentID",
    "title": "2. Request a registered experiment with given experiment ID",
    "version": "2.0.0",
    "name": "GetExperimentsID",
    "group": "Experiments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>identifier of an experiment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflow",
            "description": "<p>the name of the workflow the given experiment is associated with, e.g. 'ms2'</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "extends",
            "description": "<p>returns detailed information about tasks, if present</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "wf_id",
            "description": "<p>the workflow identifier, e.g., 'ms2'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "author",
            "description": "<p>name of the author of the workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "optimization",
            "description": "<p>optimization criterium, e.g., 'Time' or 'Performance'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "valueCurve",
            "description": "<p>a value curve to be used by heuristics</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": true,
            "field": "tasks",
            "description": "<p>array of individal task data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "tasks.name",
            "description": "<p>the task ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "tasks.exec",
            "description": "<p>pointer to the executable of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "tasks.cores_nr",
            "description": "<p>dynamic range of CPU cores to be used for execution</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "application",
            "description": "<p>name of the workflow (for compatibility with EXCESS GUI)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "task",
            "description": "<p>task name equals the workflow ID (for compatibility with EXCESS GUI)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>equals to author (for compatibility with EXCESS GUI)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>the timestamp when the workflow was registered</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "jobid",
            "description": "<p>equals the experiment ID (for compatibility with EXCESS GUI)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"wf_id\": \"MS2\",\n   \"author\": \"Me\",\n   \"optimization\": \"Time\",\n   \"valueCurve\": \"[1000:100,2000:50,3000:10]\",\n   \"tasks\": [\n      {\n         \"name\": \"T1\",\n         \"exec\": \"/nas_home/hpcochep/DreamCloud/WFM/Apps/TestEmpty/T1.sh\",\n         \"cores_nr\": \"1-40\"\n      },\n      {\n         \"name\": \"T2.1\",\n         \"exec\": \"/nas_home/hpcochep/DreamCloud/WFM/Apps/TestEmpty/T2.1.sh\",\n         \"previous\": \"T1\",\n         \"cores_nr\": \"1-40\"\n      },\n      {\n         \"name\": \"T2.2\",\n         \"exec\": \"/nas_home/hpcochep/DreamCloud/WFM/Apps/TestEmpty/T2.2.sh\",\n         \"previous\": \"T1\",\n         \"cores_nr\": \"1-40\"\n      },\n      {\n         \"name\": \"T2.3\",\n         \"exec\": \"/nas_home/hpcochep/DreamCloud/WFM/Apps/TestEmpty/T2.3.sh\",\n         \"previous\": \"T1\",\n         \"cores_nr\": \"1-40\"\n      },\n      {\n         \"name\": \"T3\",\n         \"exec\": \"/nas_home/hpcochep/DreamCloud/WFM/Apps/TestEmpty/T3.sh\",\n         \"previous\": \"T2.1&&T2.2&&T2.3\",\n         \"cores_nr\": \"1-40\"\n      }\n   ],\n   \"application\": \"ms2\",\n   \"task\": \"ms2\",\n   \"user\": \"me\",\n   \"@timestamp\": \"2016-08-12T13:49:59\",\n   \"job_id\": \"AVZ-ll9FGYwmTvCuSnjW\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/experiments/AVZ-ll9FGYwmTvCuSnjW?workflow=ms2",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Elasticsearch specific error message.</p>"
          }
        ]
      }
    },
    "filename": "routes/v2/dreamcloud/experiments.js",
    "groupTitle": "Experiments"
  },
  {
    "type": "post",
    "url": "/experiments/:workflowID",
    "title": "3. Create a new experiment with given workflow ID",
    "version": "2.0.0",
    "name": "PostExperiments",
    "group": "Experiments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifier for the workflow for which the experiment shall be created, e.g. 'ms2'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "application",
            "description": "<p>application name, provided while registering a new experiment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "host",
            "description": "<p>hostname of the system</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>username, like who is registering the experiment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp, when the experiment is registered</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "job_id",
            "description": "<p>job identifier, provided while registering a new experiment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"application\": \"vector_scal01\",\n  \"host\": \"fe.excess-project.eu\",\n  \"user\": \"hpcfapix\",\n  \"@timestamp\": \"2016-02-15T12:42:22.000\",\n  \"job_id\": \"143249.fe.excess-project.eu\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/mf/experiments/ms2",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experimentID",
            "description": "<p>identifier of an experiment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experimentID.href",
            "description": "<p>link to the experiment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"AVXt3coOz5chEwIt8_Ma\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v2/mf/experiments/AVXt3coOz5chEwIt8_Ma?workflow=ms2\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/experiments.js",
    "groupTitle": "Experiments"
  },
  {
    "type": "post",
    "url": "/metrics",
    "title": "2. Update multiple metrics at once (bulk query)",
    "version": "2.0.0",
    "name": "PostBulkMetrics",
    "group": "Metrics",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "WorkflowID",
            "description": "<p>identifier of a workflow</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "ExperimentID",
            "description": "<p>identifier of an experiment</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "TaskID",
            "description": "<p>identifier of a task, equals '_all' if not set</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>type of the metric, e.g. power, temperature, and so on</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "host",
            "description": "<p>hostname of the system</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp, when the metric is collected</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "metric",
            "description": "<p>value of the metric</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[\n  {\n    \"WorkflowID\": \"ms2\",\n    \"ExperimentID\": \"AVUWnydqGMPeuCn4l-cj\",\n    \"TaskID\": \"t2.1\",\n    \"@timestamp\": \"2016-02-15T12:43:48.749\",\n    \"type\": \"power\",\n    \"host\": \"node01.excess-project.eu\",\n    \"GPU1:power\": \"168.519\"\n  }, {\n    \"WorkflowID\": \"ms2\",\n    \"ExperimentID\":\"AVNXMXcvGMPeuCn4bMe0\",\n    \"TaskID\": \"t2.2\",\n    \"@timestamp\": \"2016-02-15T12:46:48.524\",\n    \"type\": \"power\",\n    \"host\": \"node01.excess-project.eu\",\n    \"GPU0:power\": \"152.427\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/metrics",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "href",
            "description": "<p>links to all updated profiled metrics</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  \"http://mf.excess-project.eu:3030/v2/mf/profiles/ms2_t2.1/AVUWnydqGMPeuCn4l-cj\",\n  \"http://mf.excess-project.eu:3030/v2/mf/profiles/ms2_t2.2/AVNXMXcvGMPeuCn4bMe0\"\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Elasticsearch specific error message.</p>"
          }
        ]
      }
    },
    "filename": "routes/v2/dreamcloud/metrics.js",
    "groupTitle": "Metrics"
  },
  {
    "type": "post",
    "url": "/metrics/:workflowID/:experimentID",
    "title": "1. Update a single metric",
    "version": "2.0.0",
    "name": "PostMetric",
    "group": "Metrics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifier of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>identifier of an experiment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "taskID",
            "description": "<p>identifier for a given task; equals '_all' if not set</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>type of the metric, e.g. power</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": true,
            "field": "host",
            "description": "<p>hostname of the system</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp, when the metric is collected</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "metric",
            "description": "<p>value of the metric</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"type\": \"power\",\n  \"host\": \"fe.excess-project.eu\",\n  \"@timestamp\": \"2016-02-15T12:42:22.000\",\n  \"GPU0:power\": \"152.427\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/metrics/ms2/AVNXMXcvGMPeuCn4bMe0?task=t2.1",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metricID",
            "description": "<p>identifier of the sent metric</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metricID.href",
            "description": "<p>link to the experiment with updated metrics</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"AVXt3coOz5chEwIt8_Ma\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v2/mf/profiles/hpcfapix/vector_scal01/AVNXMXcvGMPeuCn4bMe0\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Elasticsearch specific error message.</p>"
          }
        ]
      }
    },
    "filename": "routes/v2/dreamcloud/metrics.js",
    "groupTitle": "Metrics"
  },
  {
    "type": "get",
    "url": "/profiles/:workflowID/:taskID/:experimentID",
    "title": "3. Get profiles by workflow, task and experiment ID",
    "version": "2.0.0",
    "name": "GetProfilesExperiment",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier of a registered task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>identifier of an experiment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.1/AVQ-MczMGMPeuCn4FHqi",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Metrics",
            "description": "<p>measurements based on a system</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Metrics.timestamp",
            "description": "<p>timestamp, when the metric data is collected</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Metrics.host",
            "description": "<p>hostname of the system</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Metrics.task",
            "description": "<p>task identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Metrics.type",
            "description": "<p>metrics type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Metrics.metric",
            "description": "<p>value of the specific metric</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n      \"@timestamp\": \"2016-04-22T15:43:19.614\",\n      \"host\": \"node02.excess-project.eu\",\n      \"task\": \"t2.1\",\n      \"type\": \"progress\",\n      \"value\": \"68\"\n   },\n   {\n      \"@timestamp\": \"2016-04-22T15:41:28.732\",\n      \"host\": \"node02.excess-project.eu\",\n      \"task\": \"t2.1\",\n      \"type\": \"progress\",\n      \"value\": \"2\"\n   },\n   {\n      \"@timestamp\": \"2016-04-22T15:41:36.406\",\n      \"host\": \"node02.excess-project.eu\",\n      \"task\": \"t2.1\",\n      \"type\": \"progress\",\n      \"value\": \"6\"\n   },\n   ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No results found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n  \"error\": \"No results found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/profiles/:workflowID/:taskID",
    "title": "2. Get a list of experiments by workflow and task ID",
    "version": "2.0.0",
    "name": "GetProfilesTask",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier of a registered task</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.1",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "date",
            "description": "<p>date, when the task is registered</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "date.experimentID",
            "description": "<p>identifier of an experiment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date.experimentID.href",
            "description": "<p>link to the experiment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"2016-06-17\": {\n      \"AVVe9xN-LeaeU4rxxTaT\": {\n         \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.1/AVVe9xN-LeaeU4rxxTaT\"\n      },\n      \"AVVejDH1LeaeU4rxwuw-\": {\n         \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.1/AVVejDH1LeaeU4rxwuw-\"\n      },\n      \"AVVeiND0LeaeU4rxwtIV\": {\n         \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.1/AVVeiND0LeaeU4rxwtIV\"\n      },\n      \"AVVeQmcUenoRsEhyFlHu\": {\n         \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.1/AVVeQmcUenoRsEhyFlHu\"\n      },\n      \"AVVeQANeenoRsEhyFjlu\": {\n         \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.1/AVVeQANeenoRsEhyFjlu\"\n      },\n      \"AVVeX5NRenoRsEhyF4We\": {\n         \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.1/AVVeX5NRenoRsEhyF4We\"\n      }\n   },\n   \"2016-04-14\": {\n      \"AVQUiW67GMPeuCn47XpS\": {\n         \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.1/AVQUiW67GMPeuCn47XpS\"\n      }\n   },\n   ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>No results found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Sever Error\n{\n  \"error\": \"no such index.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/profiles/:workflowID",
    "title": "1. Get a list of profiled tasks associated with the given workflow ID",
    "version": "2.0.0",
    "name": "GetProfilesWorkflow",
    "group": "Profiles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier of a registered task</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "taskID.experimentID",
            "description": "<p>identifier of an experiment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taskID.experimentID.href",
            "description": "<p>link to the experiment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"t2.5\": {\n      \"AVYoZ31mLeaeU4rxUm0O\": {\n         \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.5/AVYoZ31mLeaeU4rxUm0O\"\n      },\n      \"AVVuCj1kLeaeU4rxxT4d\": {\n         \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.5/AVVuCj1kLeaeU4rxxT4d\"\n      }\n   },\n   \"t2.4\": {\n      \"AVQtI20EGMPeuCn4A_V3\": {\n         \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.4/AVQtI20EGMPeuCn4A_V3\"\n      },\n      \"AVQ-HJxhGMPeuCn4E_u6\": {\n         \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/profiles/ms2/t2.4/AVQ-HJxhGMPeuCn4E_u6\"\n      }\n   },\n   ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>No results found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Sever Error\n{\n  \"error\": \"No results found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/progress/:workflowID/:taskID/:experimentID",
    "title": "1. Get progress information for a given experiment",
    "version": "2.0.0",
    "name": "GetProgress",
    "group": "Progress",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier of a registered task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>identifier of an experiment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/progress/ms2/t2.1/AVQ-MczMGMPeuCn4FHqi\ncurl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/progress/ms2/t2.1/AVQ-MczMGMPeuCn4FHqi?latest",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "progress",
            "description": "<p>measurements based on a system</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "progress.timestamp",
            "description": "<p>timestamp, when the progress information was collected</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "progress.host",
            "description": "<p>hostname of the system</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "progress.task",
            "description": "<p>task identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "progress.type",
            "description": "<p>metrics type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "progress.value",
            "description": "<p>progress in percentage</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n      \"@timestamp\": \"2016-04-22T15:41:20.409\",\n      \"host\": \"node02.excess-project.eu\",\n      \"task\": \"t2.1\",\n      \"type\": \"progress\",\n      \"value\": \"0\"\n   },\n   {\n      \"@timestamp\": \"2016-04-22T15:41:28.732\",\n      \"host\": \"node02.excess-project.eu\",\n      \"task\": \"t2.1\",\n      \"type\": \"progress\",\n      \"value\": \"2\"\n   },\n   {\n      \"@timestamp\": \"2016-04-22T15:41:36.406\",\n      \"host\": \"node02.excess-project.eu\",\n      \"task\": \"t2.1\",\n      \"type\": \"progress\",\n      \"value\": \"6\"\n   },\n\n   ...\n\n   {\n      \"@timestamp\": \"2016-04-22T15:44:13.668\",\n      \"host\": \"node02.excess-project.eu\",\n      \"task\": \"t2.1\",\n      \"type\": \"progress\",\n      \"value\": \"100\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No results found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n  \"error\": \"No data found in the database.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/progress.js",
    "groupTitle": "Progress"
  },
  {
    "type": "get",
    "url": "/report/:workflowID/:experimentID",
    "title": "1. Get experiment report",
    "version": "2.0.0",
    "name": "GetReport",
    "group": "Reports",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>identifier of an experiment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/report/ms2/AVQ-MczMGMPeuCn4FHqi",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>report for a given workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workflow.id",
            "description": "<p>workflow identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow.runtime",
            "description": "<p>aggregates runtime information for the whole workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workflow.runtime.start",
            "description": "<p>time when the first task started its execution</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workflow.runtime.stop",
            "description": "<p>time when the last task finished execution</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workflow.runtime.seconds",
            "description": "<p>total execution time in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow.energy",
            "description": "<p>energy-related information for the workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow.energy.node",
            "description": "<p>energy data for a given target platform (cluster node)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workflow.energy.node.avg_watt_consumption",
            "description": "<p>average Watt consumption</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workflow.energy.node.total_energy_consumption",
            "description": "<p>total energy consumption</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tasks",
            "description": "<p>list of individual task-related reports</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tasks.task",
            "description": "<p>specific task information (key = workflowID_taskID)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task.host",
            "description": "<p>hostname on which the task was executed</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tasks.task.runtime",
            "description": "<p>aggregates runtime information for the whole workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task.runtime.start",
            "description": "<p>time when the first task started its execution</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task.runtime.stop",
            "description": "<p>time when the last task finished execution</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.task.runtime.seconds",
            "description": "<p>total execution time in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tasks.task.energy",
            "description": "<p>energy-related information for the workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tasks.task.energy.node",
            "description": "<p>energy data for a given target platform (cluster node)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.task.energy.node.avg_watt_consumption",
            "description": "<p>average Watt consumption</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.task.energy.node.total_energy_consumption",
            "description": "<p>total energy consumption</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"workflow\": {\n      \"id\": \"ms2\",\n      \"runtime\": {\n         \"start\": \"2016-04-22T15:39:48.496\",\n         \"end\": \"2016-04-22T16:10:34.883\",\n         \"seconds\": 1846.387\n      },\n      \"energy\": {\n         \"NODE01\": {\n            \"avg_watt_consumption\": 358.6157820189599,\n            \"total_energy_consumption\": 662143.5179146413\n         },\n         \"NODE02\": {\n            \"avg_watt_consumption\": 250.0514119089924,\n            \"total_energy_consumption\": 461691.67628040875\n         },\n         \"NODE03\": {\n            \"avg_watt_consumption\": 267.59218242524383,\n            \"total_energy_consumption\": 494078.7269315987\n         }\n      }\n   },\n   \"tasks\": {\n      \"ms2_t2.4\": {\n         \"host\": \"node02.excess-project.eu\",\n         \"runtime\": {\n            \"start\": \"2016-04-22T15:41:55.661\",\n            \"end\": \"2016-04-22T15:46:29.116\",\n            \"seconds\": 273.455\n         },\n         \"energy\": {\n            \"NODE01\": {\n               \"avg_watt_consumption\": 363.7616224652014,\n               \"total_energy_consumption\": 99472.43447122164\n            },\n            \"NODE02\": {\n               \"avg_watt_consumption\": 445.1300451245421,\n               \"total_energy_consumption\": 121723.03648953166\n            },\n            \"NODE03\": {\n               \"avg_watt_consumption\": 336.11323218681315,\n               \"total_energy_consumption\": 91911.84390764499\n            }\n         }\n      },\n      ...\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No results found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n  \"error\": \"No data found in the database.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/report.js",
    "groupTitle": "Reports"
  },
  {
    "type": "get",
    "url": "/summary/:workflowID/:taskID/:platformID",
    "title": "2. Get summary including statistics",
    "version": "2.0.0",
    "name": "GetSummary",
    "group": "Reports",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier of a task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platformID",
            "description": "<p>identifier for a given platform, e.g. 'excesscluster' or 'laptop'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/summary/ms2/t2.1/excesscluster",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiment_id",
            "description": "<p>identifier for an experiment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workflow_id",
            "description": "<p>identifier for the workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_id",
            "description": "<p>identifier of a task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deployment_id",
            "description": "<p>identifier (here: hashvalue) of a deployment plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "runtime",
            "description": "<p>runtime information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "runtime.start_time",
            "description": "<p>time when the first task started its execution</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "runtime.end_time",
            "description": "<p>time when the last task finished execution</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "runtime.actual_time",
            "description": "<p>total execution time in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "runtime.predicted_time",
            "description": "<p>predicted total execution time (data filled by heuristic manager)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "energy",
            "description": "<p>energy-related information for the workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "energy.node",
            "description": "<p>energy data for a given target platform (cluster node)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "energy.node.avg_watt_consumption",
            "description": "<p>average Watt consumption</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "energy.node.total_energy_consumption",
            "description": "<p>total energy consumption</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metrics",
            "description": "<p>list of individual metric-related statistics</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metrics.metric",
            "description": "<p>statistics on a given metric (metric equals name of counter)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metrics.metric.count",
            "description": "<p>number of metric values available</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metrics.metric.min",
            "description": "<p>minimum value obtained</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metrics.metric.max",
            "description": "<p>maximum value obtained</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metrics.metric.avg",
            "description": "<p>average value based on number of values</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metrics.metric.sum",
            "description": "<p>sum of all obtained data points</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n      \"experiment_id\": \"AVZVoX2SGYwmTvCu75Mo\",\n      \"workflow_id\": \"ms2\",\n      \"task_id\": \"t2.1\",\n      \"deployment_id\": \"79f2e72501da8a8bcff9d6cd711b44a0fe8174a751e897c51ef7a7d110b925d8\",\n      \"runtime\": {\n         \"start_time\": \"2016-08-04T14:59:38.755\",\n         \"end_time\": \"2016-08-04T15:38:23.667\",\n         \"actual_time\": 2324.912,\n         \"predicted_time\": 0\n      },\n      \"energy\": {\n         \"NODE01\": {\n            \"avg_watt_consumption\": 153.34391120137695,\n            \"total_energy_consumption\": 356511.0992790157\n         },\n         \"NODE02\": {\n            \"avg_watt_consumption\": 140.82331453872632,\n            \"total_energy_consumption\": 327401.81385085924\n         },\n         \"NODE03\": {\n            \"avg_watt_consumption\": 123.82224931497417,\n            \"total_energy_consumption\": 287875.8332993752\n         }\n      },\n      \"metrics\": {\n         \"PP0_ENERGY:PACKAGE1\": {\n            \"count\": 25,\n            \"min\": 2.9063,\n            \"max\": 71.1607,\n            \"avg\": 45.523972,\n            \"sum\": 1138.0993\n         },\n         \"CPU0::PAPI_FP_INS\": {\n            \"count\": 24,\n            \"min\": 869,\n            \"max\": 565864880,\n            \"avg\": 219248143.20833334,\n            \"sum\": 5261955437\n         },\n         ...\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No results found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n  \"error\": \"No data found in the database.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/summary.js",
    "groupTitle": "Reports"
  },
  {
    "type": "get",
    "url": "/summary/:workflowID/:taskID/:platformID/:deploymentID",
    "title": "3. Get summary filtered by deployment ID",
    "version": "2.0.0",
    "name": "GetSummaryByID",
    "group": "Reports",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier of a task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platformID",
            "description": "<p>identifier for a given platform, e.g. 'excesscluster' or 'laptop'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deploymentID",
            "description": "<p>identifier (= hashvalue) of a given deployment plan</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/summary/ms2/t2.1/test_cluster/4e165a82309000fd5a6ab20c097b2e9f2ba5216d",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiment_id",
            "description": "<p>identifier for an experiment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workflow_id",
            "description": "<p>identifier for the workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task_id",
            "description": "<p>identifier of a task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deployment_id",
            "description": "<p>identifier (here: hashvalue) of a deployment plan</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "runtime",
            "description": "<p>runtime information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "runtime.start_time",
            "description": "<p>time when the first task started its execution</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "runtime.end_time",
            "description": "<p>time when the last task finished execution</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "runtime.actual_time",
            "description": "<p>total execution time in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "runtime.predicted_time",
            "description": "<p>predicted total execution time (data filled by heuristic manager)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "energy",
            "description": "<p>energy-related information for the workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "energy.node",
            "description": "<p>energy data for a given target platform (cluster node)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "energy.node.avg_watt_consumption",
            "description": "<p>average Watt consumption</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "energy.node.total_energy_consumption",
            "description": "<p>total energy consumption</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metrics",
            "description": "<p>list of individual metric-related statistics</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metrics.metric",
            "description": "<p>statistics on a given metric (metric equals name of counter)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metrics.metric.count",
            "description": "<p>number of metric values available</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metrics.metric.min",
            "description": "<p>minimum value obtained</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metrics.metric.max",
            "description": "<p>maximum value obtained</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metrics.metric.avg",
            "description": "<p>average value based on number of values</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metrics.metric.sum",
            "description": "<p>sum of all obtained data points</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n      \"experiment_id\": \"AVRMbxnvGMPeuCn4HOiA\",\n      \"workflow_id\": \"ms2\",\n      \"task_id\": \"t2.1\",\n      \"deployment_id\": \"4e165a82309000fd5a6ab20c097b2e9f2ba5216d\",\n      \"runtime\": {\n         \"start_time\": \"2016-04-25T10:02:07.103\",\n         \"end_time\": \"2016-04-25T10:04:55.274\",\n         \"actual_time\": 168.171,\n         \"predicted_time\": 2015\n      },\n      \"energy\":  [ .. ],\n      \"metrics\": { .. }\n   },\n   {\n      \"experiment_id\": \"AVS_GvCNGMPeuCn4T-pC\",\n      \"workflow_id\": \"ms2\",\n      \"task_id\": \"t2.1\",\n      \"deployment_id\": \"4e165a82309000fd5a6ab20c097b2e9f2ba5216d\",\n      \"runtime\": {\n         \"start_time\": \"2016-05-17T16:25:47.122\",\n         \"end_time\": \"2016-05-17T16:26:22.296\",\n         \"actual_time\": 35.174,\n         \"predicted_time\": 2015\n      },\n      \"energy\":  [ .. ],\n      \"metrics\": { .. }\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No results found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n  \"error\": \"No data found in the database.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/summary.js",
    "groupTitle": "Reports"
  },
  {
    "type": "get",
    "url": "/resources/:platformID",
    "title": "2. Get resource information for a given platform",
    "version": "2.0.0",
    "name": "GetResource",
    "group": "Resources",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/resources/excesscluster",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"nodes\": [\n      {\n         \"id\": \"node01\",\n         \"cpus\": [\n            {\n               \"id\": \"cpu0\",\n               \"cores\": [\n                  {\n                     \"id\": \"core0\",\n                     \"pwMode\": 0,\n                     \"status\": \"allocated\",\n                     \"availTime\": \"null\"\n                  },\n                  {\n                     \"id\": \"core1\",\n                     \"pwMode\": 0,\n                     \"status\": \"allocated\",\n                     \"availTime\": \"null\"\n                  },\n                  ...\n               ]\n            }\n         ]\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/resources/excesscluster\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Likely to be caused by an error while inserting data into the database.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Elasticsearch-specific error message.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/resources.js",
    "groupTitle": "Resources"
  },
  {
    "type": "get",
    "url": "/resources",
    "title": "1. Get a list of available resources by target platform",
    "version": "2.0.0",
    "name": "GetResources",
    "group": "Resources",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/resources",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"alexlaptop\": {\n      \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/resources/alexlaptop\"\n   },\n   \"amitlaptop\": {\n      \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/resources/amitlaptop\"\n   },\n   \"excesscluster\": {\n      \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/resources/excesscluster\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/resources\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalSeverError",
            "description": "<p>No results found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Sever Error\n{\n  \"error\": \"No results found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/resources.js",
    "groupTitle": "Resources"
  },
  {
    "type": "put",
    "url": "/resources/:platformID",
    "title": "3. Add resource information for a given platform",
    "version": "2.0.0",
    "name": "PutResource",
    "group": "Resources",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/resources/excesscluster",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"nodes\": [\n      {\n         \"id\": \"node01\",\n         \"cpus\": [\n            {\n               \"id\": \"cpu0\",\n               \"cores\": [\n                  {\n                     \"id\": \"core0\",\n                     \"pwMode\": 0,\n                     \"status\": \"allocated\",\n                     \"availTime\": \"null\"\n                  },\n                  {\n                     \"id\": \"core1\",\n                     \"pwMode\": 0,\n                     \"status\": \"allocated\",\n                     \"availTime\": \"null\"\n                  },\n                  ...\n               ]\n            }\n         ]\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Likely to be caused by an error while inserting data into the database.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Elasticsearch-specific error message.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/resources.js",
    "groupTitle": "Resources"
  },
  {
    "type": "get",
    "url": "/runtime/:workflowID/:taskID/:experimentID",
    "title": "1. Get the runtime of a specific task",
    "version": "2.0.0",
    "name": "GetRuntime",
    "group": "Runtime",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier of a task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>Experiment identifer of an experiment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/runtime/ms2/t2.1/AVZ-5cqVGYwmTvCuSqZC",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>start timestamp of the experiment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end",
            "description": "<p>end timestamp of the experiment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "runtime",
            "description": "<p>duration of the experiment in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "host",
            "description": "<p>hostname of the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"start\": \"2016-08-12T15:20:40.631\",\n   \"end\": \"2016-08-12T15:21:22.205\",\n   \"runtime\": 41.573999881744385,\n   \"host\": \"node02.excess-project.eu\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>No results found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"No results found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/runtime.js",
    "groupTitle": "Runtime"
  },
  {
    "type": "get",
    "url": "/runtime/:workflowID/:experimentID",
    "title": "2. Get runtime information of an entire experiment",
    "version": "2.0.0",
    "name": "GetRuntimeByExperiment",
    "group": "Runtime",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>Experiment identifer of an experiment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/runtime/ms2/AVZ-5cqVGYwmTvCuSqZC",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>start timestamp of the experiment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end",
            "description": "<p>end timestamp of the experiment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total_runtime",
            "description": "<p>duration of the total experiment in seconds</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tasks",
            "description": "<p>array of task-specific runtime information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.task",
            "description": "<p>identifier of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tasks.data",
            "description": "<p>object holding runtime data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "runtime",
            "description": "<p>duration of the task in seconds</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"workflow\": \"ms2\",\n   \"tasks\": [\n      ...\n      {\n         \"task\": \"T2.1\",\n         \"data\": {\n            \"start\": \"2016-08-12T15:20:40.631\",\n            \"end\": \"2016-08-12T15:21:22.205\",\n            \"runtime\": 41.574\n         }\n      },\n      {\n         \"task\": \"T2.2\",\n         \"data\": {\n            \"start\": \"2016-08-12T15:21:46.975\",\n            \"end\": \"2016-08-12T15:22:25.983\",\n            \"runtime\": 39.008\n         }\n      },\n      ...\n   ],\n   \"start\": \"2016-08-12T15:17:46.731\",\n   \"end\": \"2016-08-12T15:25:30.452\",\n   \"total_runtime\": 463.721\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>No results found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"No results found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/runtime.js",
    "groupTitle": "Runtime"
  },
  {
    "type": "get",
    "url": "/statistics/:workflowID",
    "title": "1. Get statistics on a metric across all tasks",
    "version": "2.0.0",
    "name": "GetStats",
    "group": "Statistics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "metric",
            "description": "<p>name of a metric, e.g., metric=CPU0::PAPI_TOT_CYC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "host",
            "description": "<p>hostname of the system, e.g., host=node01</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p>start time of the statistics, e.g., from=2016-05-10T17:35:57.610</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "to",
            "description": "<p>end time of the statistics, e.g., to=2016-05-10T17:35:57.610</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i 'http://mf.excess-project.eu:3030/v2/mf/statistics/ms2?metric=CPU0::PAPI_TOT_CYC'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>workflow-related data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workflow.href",
            "description": "<p>link to the stored workflow information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metric",
            "description": "<p>name of the metric for which statistics are captured</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "statistics",
            "description": "<p>extended set of statistics as provided by Elasticsearch</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.count",
            "description": "<p>number of metric values sampled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.min",
            "description": "<p>minimum value obtained for the given metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.max",
            "description": "<p>maximum value obtained for the given metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.avg",
            "description": "<p>average value across all metric values</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.sum",
            "description": "<p>sum of all sampled metric values</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.sum_of_squares",
            "description": "<p>sum of squares for the given metric values</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.variance",
            "description": "<p>variance of the given metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.std_deviation",
            "description": "<p>standard deviation computed for the given metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "statistics.std_deviation_bounds",
            "description": "<p>deviation bounds of the given metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.std_deviation_bounds.upper",
            "description": "<p>upper bounds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.std_deviation_bounds.lower",
            "description": "<p>lower bounds</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "min",
            "description": "<p>experiment that has the minimum value of the metric included</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>time when the experiment was executed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>hostname on which the experiment was executed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>identifier for a task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of plug-in the metric is associated with</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "max",
            "description": "<p>experiment that has the maximum value of the metric included</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"workflow\": {\n      \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/workflows/ms2\"\n   },\n   \"metric\": \"CPU0::PAPI_TOT_CYC\",\n   \"statistics\": {\n      \"count\": 314,\n      \"min\": 2188289,\n      \"max\": 140712658075784,\n      \"avg\": 27784198121927.688,\n      \"sum\": 8724238210285294,\n      \"sum_of_squares\": 1.2276032329935587e+30,\n      \"variance\": 3.1376027710066886e+27,\n      \"std_deviation\": 56014308627409.555,\n      \"std_deviation_bounds\": {\n         \"upper\": 139812815376746.8,\n         \"lower\": -84244419132891.42\n      }\n   },\n   \"min\": {\n      \"@timestamp\": \"2016-05-17T16:25:48.123\",\n      \"host\": \"node01.excess-project.eu\",\n      \"task\": \"t2.1\",\n      \"type\": \"performance\",\n      \"CPU0::PAPI_FP_INS\": 869,\n      \"CPU0::PAPI_TOT_CYC\": 2188289,\n      \"CPU1::PAPI_FP_INS\": 891,\n      \"CPU1::PAPI_TOT_CYC\": 1214959,\n      \"CPU2::PAPI_FP_INS\": 8126,\n      ...\n   },\n   \"max\": {\n      ...\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoResults",
            "description": "<p>response is empty for the metric.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": \"response is empty for the metric.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/statistics.js",
    "groupTitle": "Statistics"
  },
  {
    "type": "get",
    "url": "/statistics/:workflowID/:taskID",
    "title": "2. Get statistics on a metric filtered by task ID",
    "version": "2.0.0",
    "name": "GetStatsTask",
    "group": "Statistics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskID",
            "description": "<p>identifier of a task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "metric",
            "description": "<p>name of a metric, e.g., metric=CPU0::PAPI_TOT_CYC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "host",
            "description": "<p>hostname of the system, e.g., host=node01</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p>start time of the statistics, e.g., from=2016-05-10T17:35:57.610</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "to",
            "description": "<p>end time of the statistics, e.g., to=2016-05-10T17:35:57.610</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i 'http://mf.excess-project.eu:3030/v2/mf/statistics/ms2/t2.1?metric=CPU0::PAPI_TOT_CYC'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>workflow-related data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workflow.href",
            "description": "<p>link to the stored workflow information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metric",
            "description": "<p>name of the metric for which statistics are captured</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "statistics",
            "description": "<p>extended set of statistics as provided by Elasticsearch</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.count",
            "description": "<p>number of metric values sampled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.min",
            "description": "<p>minimum value obtained for the given metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.max",
            "description": "<p>maximum value obtained for the given metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.avg",
            "description": "<p>average value across all metric values</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.sum",
            "description": "<p>sum of all sampled metric values</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.sum_of_squares",
            "description": "<p>sum of squares for the given metric values</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.variance",
            "description": "<p>variance of the given metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.std_deviation",
            "description": "<p>standard deviation computed for the given metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "statistics.std_deviation_bounds",
            "description": "<p>deviation bounds of the given metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.std_deviation_bounds.upper",
            "description": "<p>upper bounds</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statistics.std_deviation_bounds.lower",
            "description": "<p>lower bounds</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "min",
            "description": "<p>experiment that has the minimum value of the metric included</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>time when the experiment was executed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>hostname on which the experiment was executed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>identifier for a task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of plug-in the metric is associated with</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "max",
            "description": "<p>experiment that has the maximum value of the metric included</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"workflow\": {\n      \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/workflows/ms2\"\n   },\n   \"metric\": \"CPU0::PAPI_TOT_CYC\",\n   \"statistics\": {\n      \"count\": 314,\n      \"min\": 2188289,\n      \"max\": 140712658075784,\n      \"avg\": 27784198121927.688,\n      \"sum\": 8724238210285294,\n      \"sum_of_squares\": 1.2276032329935587e+30,\n      \"variance\": 3.1376027710066886e+27,\n      \"std_deviation\": 56014308627409.555,\n      \"std_deviation_bounds\": {\n         \"upper\": 139812815376746.8,\n         \"lower\": -84244419132891.42\n      }\n   },\n   \"min\": {\n      \"@timestamp\": \"2016-05-17T16:25:48.123\",\n      \"host\": \"node01.excess-project.eu\",\n      \"task\": \"t2.1\",\n      \"type\": \"performance\",\n      \"CPU0::PAPI_FP_INS\": 869,\n      \"CPU0::PAPI_TOT_CYC\": 2188289,\n      \"CPU1::PAPI_FP_INS\": 891,\n      \"CPU1::PAPI_TOT_CYC\": 1214959,\n      \"CPU2::PAPI_FP_INS\": 8126,\n      ...\n   },\n   \"max\": {\n      ...\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoResults",
            "description": "<p>response is empty for the metric.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"error\": \"response is empty for the metric.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/statistics.js",
    "groupTitle": "Statistics"
  },
  {
    "type": "get",
    "url": "/runtime/:workflowID/:experimentID",
    "title": "1. Get status report",
    "version": "2.0.0",
    "name": "GetStatus",
    "group": "Status",
    "description": "<p>Returns available data that was previously stored in the database. The body of the response is user-specific, and can represent any valid JSON document.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>Experiment identifer of an experiment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON-Request:",
          "content": "{\n   \"Status\": \"completed\",\n   \"tasks\": [\n      {\n         \"name\": \"T1\",\n         \"status\": \"completed\",\n         \"startTime\": \"2016-08-12T17:20:01.844\",\n         \"endTime\": \"2016-08-12T17:21:28.46\",\n         \"nr_cores\": 40,\n         \"progress\": 100,\n         \"deploymentPlan\": {\n            \"estimatedTime\": 1111,\n            \"node\": {\n               \"id\": \"node01\",\n               \"cpus\": [\n                  {\n                     \"id\": \"cpu0\",\n                     \"cores\": [\n                        {\n                           \"id\": \"core0\",\n                           \"pwMode\": 0\n                        },\n                        ...\n                     ]\n                  }\n               ]\n            }\n         }\n      },\n      {\n         \"name\": \"t2.1\",\n         ...\n      },\n      ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/ms2/AVZ_VlqVGYwmTvCuTZLX",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"Status\": \"completed\",\n   \"tasks\": [\n      {\n         \"name\": \"T1\",\n         \"status\": \"completed\",\n         \"startTime\": \"2016-08-12T17:20:01.844\",\n         \"endTime\": \"2016-08-12T17:21:28.46\",\n         \"nr_cores\": 40,\n         \"progress\": 100,\n         \"deploymentPlan\": {\n            \"estimatedTime\": 1111,\n            \"node\": {\n               \"id\": \"node01\",\n               \"cpus\": [\n                  {\n                     \"id\": \"cpu0\",\n                     \"cores\": [\n                        {\n                           \"id\": \"core0\",\n                           \"pwMode\": 0\n                        },\n                        ...\n                     ]\n                  }\n               ]\n            }\n         }\n      },\n      {\n         \"name\": \"t2.1\",\n         ...\n      },\n      ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No status report found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFund\n{\n  \"error\": \"No status report available.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/status.js",
    "groupTitle": "Status"
  },
  {
    "type": "put",
    "url": "/runtime/:workflowID/:experimentID",
    "title": "1. Create/Update status report",
    "version": "2.0.0",
    "name": "PutStatus",
    "group": "Status",
    "description": "<p>Create or update a status report for the given workflow and experiment. The body of the request is user-specific, and can include any valid JSON document.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>identifer of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>Experiment identifer of an experiment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/status/ms2/AVZ_VlqVGYwmTvCuTZLX",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/ms2/AVZ_VlqVGYwmTvCuTZLX\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Cannot store submitted content.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"Elasticsearch-specific error message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/status.js",
    "groupTitle": "Status"
  },
  {
    "type": "get",
    "url": "/workflows/:workflowID",
    "title": "2. Get information about a specific workflow",
    "version": "2.0.0",
    "name": "GetWorkflow",
    "group": "Workflows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>Unique workflow identifier</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/workflows/ms2",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "wf_id",
            "description": "<p>References a registered workflow by its ID</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author name if provided while registering a new workflow</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "optimization",
            "description": "<p>Optimization criterium: time, energy, balanced</p>"
          },
          {
            "group": "body",
            "type": "Array",
            "optional": false,
            "field": "tasks",
            "description": "<p>List of individual tasks the workflow is composed of</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "tasks.name",
            "description": "<p>ID of the given task (:taskID)</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "tasks.exec",
            "description": "<p>Executable for the given task</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "tasks.cores_nr",
            "description": "<p>Range of CPU cores used for executing the task on</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"wf_id\": \"ms2\",\n  \"author\": \"Random Guy\",\n  \"optimization\": \"Time\",\n  \"tasks\": [\n    {\n      \"name\": \"T1\",\n      \"exec\": \"/home/ubuntu/ms2/t1.sh\",\n      \"cores_nr\": \"1-2\"\n    },\n    {\n      \"name\": \"T2.1\",\n      \"exec\": \"/home/ubuntu/ms2/t21.sh\",\n      \"previous\": \"T1\",\n      \"cores_nr\": \"1-2\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WorkflowNotAvailable",
            "description": "<p>Given ID does not refer to a workflow.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Workflow with the ID ':workflowID' not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/workflows.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "get",
    "url": "/workflows",
    "title": "3. Request a list of registered workflows",
    "version": "2.0.0",
    "name": "GetWorkflows",
    "group": "Workflows",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": ":workflowID",
            "description": "<p>References a registered workflow by its ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ":workflowID.href",
            "description": "<p>Resource location of the given workflow</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"hpcdhopp\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/workflows/hpcdhopp\"\n  },\n  \"hpcdkhab\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/workflows/hpcdkhab\"\n  },\n  \"hpcfapix\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/workflows/hpcfapix\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/workflows",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WorkflowsNotAvailable",
            "description": "<p>No workflows found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"No workflows found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/workflows.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "put",
    "url": "/workflows",
    "title": "4. Register a new workflow and create a new experiment",
    "version": "2.0.0",
    "name": "PutWorkflow",
    "group": "Workflows",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/workflows",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"wf_id\": \"ms2\",\n  \"author\": \"Random Guy\",\n  \"optimization\": \"Time\",\n  \"tasks\": [\n    {\n      \"name\": \"T1\",\n      \"exec\": \"/home/ubuntu/ms2/t1.sh\",\n      \"cores_nr\": \"1-2\"\n    },\n    {\n      \"name\": \"T2.1\",\n      \"exec\": \"/home/ubuntu/ms2/t21.sh\",\n      \"previous\": \"T1\",\n      \"cores_nr\": \"1-2\"\n     }\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wf_id",
            "description": "<p>References a registered workflow by its ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "author",
            "description": "<p>Author name if provided while registering a new workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "optimization",
            "description": "<p>Optimization criterium: time, energy, balanced</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "tasks",
            "description": "<p>List of individual tasks the workflow is composed of</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tasks.name",
            "description": "<p>ID of the given task (:taskID)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tasks.exec",
            "description": "<p>Executable for the given task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tasks.cores_nr",
            "description": "<p>Range of CPU cores used for executing the task on</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>Workflow-related information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workflow.id",
            "description": "<p>Unique ID of a given workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workflow.href",
            "description": "<p>Link to the workflow resource</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experiment",
            "description": "<p>Experiment-related information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiment.id",
            "description": "<p>Unique ID of the experiment associated with the workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiment.href",
            "description": "<p>Link to the experiment resource</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"workflow\": {\n    \"id\":   \"ms2\",\n    \"href\": \"http://mf.excess-project.eu:3030/v2/workflows/ms2\"\n  },\n  \"experiment\": {\n    \"id\":   \"AVXotMWFA9kSggr_MSq2\",\n    \"href\": \"http://mf.excess-project.eu:3030/v2/experiments/AVXotMWFA9kSggr_MSq2?workflow=ms2\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "StorageError",
            "description": "<p>Given workflow could not be stored.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WorkflowIDMissing",
            "description": "<p>The key wf_id is missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Resource could not be stored\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"The parameter 'wf_id' to reference a workflow ID is missing.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/workflows.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "put",
    "url": "/workflows/:workflowID",
    "title": "1. Register a new workflow with a custom ID",
    "version": "2.0.0",
    "name": "PutWorkflowID",
    "group": "Workflows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>Unique workflow identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "wf_id",
            "description": "<p>References a registered workflow by its ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "author",
            "description": "<p>Author name if provided while registering a new workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "optimization",
            "description": "<p>Optimization criterium: time, energy, balanced</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "tasks",
            "description": "<p>List of individual tasks the workflow is composed of</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tasks.name",
            "description": "<p>ID of the given task (:taskID)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tasks.exec",
            "description": "<p>Executable for the given task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tasks.cores_nr",
            "description": "<p>Range of CPU cores used for executing the task on</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"wf_id\": \"ms2\",\n  \"author\": \"Random Guy\",\n  \"optimization\": \"Time\",\n  \"tasks\": [\n    {\n      \"name\": \"T1\",\n      \"exec\": \"/home/ubuntu/ms2/t1.sh\",\n      \"cores_nr\": \"1-2\"\n    },\n    {\n      \"name\": \"T2.1\",\n      \"exec\": \"/home/ubuntu/ms2/t21.sh\",\n      \"previous\": \"T1\",\n      \"cores_nr\": \"1-2\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/workflows/ms2",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "href",
            "description": "<p>Link to the stored workflow resource</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"href\": \"http://mf.excess-project.eu:3030/v2/dreamcloud/mf/workflows/ms2\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "StorageError",
            "description": "<p>Given workflow could not be stored.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Resource could not be stored\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/workflows.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "put",
    "url": "/workflows/:workflowID/:experimentID",
    "title": "5. Register a new workflow and experiment using custom IDs",
    "version": "2.0.0",
    "name": "PutWorkflowIDExperimentID",
    "group": "Workflows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workflowID",
            "description": "<p>Unique workflow identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>Unique experiment identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "wf_id",
            "description": "<p>References a registered workflow by its ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "author",
            "description": "<p>Author name if provided while registering a new workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "optimization",
            "description": "<p>Optimization criterium: time, energy, balanced</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "tasks",
            "description": "<p>List of individual tasks the workflow is composed of</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tasks.name",
            "description": "<p>ID of the given task (:taskID)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tasks.exec",
            "description": "<p>Executable for the given task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tasks.cores_nr",
            "description": "<p>Range of CPU cores used for executing the task on</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"wf_id\": \"ms2\",\n  \"author\": \"Random Guy\",\n  \"optimization\": \"Time\",\n  \"tasks\": [\n    {\n      \"name\": \"T1\",\n      \"exec\": \"/home/ubuntu/ms2/t1.sh\",\n      \"cores_nr\": \"1-2\"\n    },\n    {\n      \"name\": \"T2.1\",\n      \"exec\": \"/home/ubuntu/ms2/t21.sh\",\n      \"previous\": \"T1\",\n      \"cores_nr\": \"1-2\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v2/dreamcloud/mf/workflows/ms2/myUniqueID",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workflow",
            "description": "<p>Workflow-related information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workflow.id",
            "description": "<p>Unique ID of a given workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workflow.href",
            "description": "<p>Link to the workflow resource</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experiment",
            "description": "<p>Experiment-related information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiment.id",
            "description": "<p>Unique ID of the experiment associated with the workflow</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiment.href",
            "description": "<p>Link to the experiment resource</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"workflow\": {\n    \"id\":   \"ms2\",\n    \"href\": \"http://mf.excess-project.eu:3030/v2/workflows/ms2\"\n  },\n  \"experiment\": {\n    \"id\":   \"myUniqueID\",\n    \"href\": \"http://mf.excess-project.eu:3030/v2/experiments/myUniqueID?workflow=ms2\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "StorageError",
            "description": "<p>Given workflow could not be stored.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Resource could not be stored\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v2/dreamcloud/workflows.js",
    "groupTitle": "Workflows"
  }
] });
