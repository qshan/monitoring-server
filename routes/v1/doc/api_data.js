define({ "api": [
  {
    "type": "get",
    "url": "/deployments/:workflowID/:taskID/:platformID",
    "title": "3. Return available deployment plans",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/deployments/ms2/t2.1/excesscluster",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"cf8ba177b43e4a837c4c213f6a149ead4f1ec9ef2e976306a07711e88bf6c60c\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v1/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/cf8ba177b43e4a837c4c213f6a149ead4f1ec9ef2e976306a07711e88bf6c60c\"\n  },\n  \"e57d089e2cc396f04d277aa35c399b4a5af5b56f65682b4f4952dd7f334a2c15\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v1/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/e57d089e2cc396f04d277aa35c399b4a5af5b56f65682b4f4952dd7f334a2c15\"\n  },\n  \"d6d33f5097e23e55659aba9004dbeb257970926e3927a01c10ff431fe48555e9\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v1/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/d6d33f5097e23e55659aba9004dbeb257970926e3927a01c10ff431fe48555e9\"\n  },\n  \"79f2e72501da8a8bcff9d6cd711b44a0fe8174a751e897c51ef7a7d110b925d8\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v1/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/79f2e72501da8a8bcff9d6cd711b44a0fe8174a751e897c51ef7a7d110b925d8\"\n  },\n  ..\n}",
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
    "filename": "routes/v1/dreamcloud/deployments.js",
    "groupTitle": "Deployment_Plans"
  },
  {
    "type": "get",
    "url": "/deployments/:workflowID/:taskID/:platformID/:deploymentPlanID",
    "title": "2. Return a given deployment plan",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/cf8ba177b43e4a837c4c213f6a149ead4f1ec9ef2e976306a07711e88bf6c60c",
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
    "filename": "routes/v1/dreamcloud/deployments.js",
    "groupTitle": "Deployment_Plans"
  },
  {
    "type": "put",
    "url": "/deployments/:workflowID/:taskID/:platformID/:experimentID",
    "title": "1. Add a new deployment plan",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/deployments/ms2/t2.1/excesscluster/AVX123A3asd_S",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"deployment_id\": \"da117e8171ae58b935a02a9768c21ce96ffd5f6e\"\n  \"predicted_time\": 2017\n  \"href\": \"http://mf.excess-project.eu:3030/v1/dreamcloud/mf/deployments/ms2/t2.1/test_cluster/da117e8171ae58b935a02a9768c21ce96ffd5f6e\"\n }",
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
    "filename": "routes/v1/dreamcloud/deployments.js",
    "groupTitle": "Deployment_Plans"
  },
  {
    "type": "get",
    "url": "/energy/:workflowID/:experimentID",
    "title": "1. Return energy data for the given experiment ID",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/energy/ms2/AVQa1RU0GMPeuCn4_2S_",
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
    "filename": "routes/v1/dreamcloud/energy.js",
    "groupTitle": "Energy"
  },
  {
    "type": "get",
    "url": "/energy/:workflowID/:taskID/:experimentID",
    "title": "2. Return energy data filtered by task ID",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/energy/ms2/t2.1/AVQa1RU0GMPeuCn4_2S_",
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
    "filename": "routes/v1/dreamcloud/energy.js",
    "groupTitle": "Energy"
  },
  {
    "type": "get",
    "url": "/experiments",
    "title": "1. Request a list of registered experiments",
    "version": "1.0.0",
    "name": "GetExperiments",
    "group": "Experiments",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"AVUWoIRDGMPeuCn4l-cl\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v1/mf/experiments/AVUWoIRDGMPeuCn4l-cl?workflow=hpcfapix\"\n  },\n  \"AVNXMbaBGMPeuCn4bMfv\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v1/mf/experiments/AVNXMbaBGMPeuCn4bMfv?workflow=hoppe\"\n  },\n  \"AVNXMsA_GMPeuCn4bMj7\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v1/mf/experiments/AVNXMsA_GMPeuCn4bMj7?workflow=dmitry\"\n  }\n}",
          "type": "json"
        }
      ]
    },
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
            "field": "workflow",
            "description": "<p>filters results by the given user, e.g. 'hpcfapix'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/experiments\ncurl -i http://mf.excess-project.eu:3030/v1/mf/experiments?workflow=hpcfapix&details",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n  \"error\": \"Not Found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/experiments.js",
    "groupTitle": "Experiments"
  },
  {
    "type": "get",
    "url": "/experiments",
    "title": "1. Returns a list of all experiment IDs",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/experiments",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"AVZ-ll9FGYwmTvCuSnjW\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v1/mf/experiments/AVZ-ll9FGYwmTvCuSnjW?workflow=ms2\"\n  },\n  \"AVZ-kZTjGYwmTvCuSnZV\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v1/mf/experiments/AVZ-kZTjGYwmTvCuSnZV?workflow=ms2\"\n  },\n  \"AVZ-j2hEGYwmTvCuSnVE\": {\n     \"href\": \"http://mf.excess-project.eu:3030/v1/mf/experiments/AVZ-j2hEGYwmTvCuSnVE?workflow=ms2\"\n  },\n  ...\n}",
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
    "filename": "routes/v1/dreamcloud/experiments.js",
    "groupTitle": "Experiments"
  },
  {
    "type": "get",
    "url": "/experiments/:experimentID",
    "title": "2. Request a registered experiment with given experiment ID",
    "version": "1.0.0",
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
            "description": "<p>the username the given experiment is associated with, e.g. 'hpcfapix'</p>"
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
            "optional": false,
            "field": "application",
            "description": "<p>application name of the experiment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>hostname of the system</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>user identifier of the experiment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp, when the experiment is registered</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "job_id",
            "description": "<p>job identifier of the experiment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"application\":\"vector_scal01\",\n  \"host\":\"fe.excess-project.eu\",\n  \"user\":\"hpcfapix\",\n  \"@timestamp\":\"2016-02-15T12:42:22.000\",\n  \"job_id\":\"143249.fe.excess-project.eu\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/experiments/AVNXMXcvGMPeuCn4bMe0?workflow=hpcfapix",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoWorkflow",
            "description": "<p>No workflow is given.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NoWorkflow\n{\n  \"error\": \"URL parameter 'workflow' is missing\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/experiments.js",
    "groupTitle": "Experiments"
  },
  {
    "type": "get",
    "url": "/experiments/:experimentID",
    "title": "2. Request a registered experiment with given experiment ID",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/experiments/AVZ-ll9FGYwmTvCuSnjW?workflow=ms2",
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
    "filename": "routes/v1/dreamcloud/experiments.js",
    "groupTitle": "Experiments"
  },
  {
    "type": "post",
    "url": "/experiments/:workflowID",
    "title": "3. Create a new experiment with given workflow ID",
    "version": "1.0.0",
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
            "description": "<p>identifier of a workflow for which an experiment shall be created, e.g. 'hpcfapix'</p>"
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/experiments/hpcfapix",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"AVXt3coOz5chEwIt8_Ma\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v1/mf/experiments/AVXt3coOz5chEwIt8_Ma?workflow=hpcfapix\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/experiments.js",
    "groupTitle": "Experiments"
  },
  {
    "type": "post",
    "url": "/experiments/:workflowID",
    "title": "3. Create a new experiment with given workflow ID",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/experiments/ms2",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"AVXt3coOz5chEwIt8_Ma\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v1/mf/experiments/AVXt3coOz5chEwIt8_Ma?workflow=ms2\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/dreamcloud/experiments.js",
    "groupTitle": "Experiments"
  },
  {
    "type": "post",
    "url": "/metrics",
    "title": "1. Send bulk of metrics",
    "version": "1.0.0",
    "name": "PostBulkMetrics",
    "group": "Metrics",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "WorkflowID",
            "description": "<p>identifier of a workflow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>identifier of a task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ExperimentID",
            "description": "<p>identifier of an experiment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the metric, e.g. power, temperature, and so on</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>hostname of the system</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp, when the metric is collected</p>"
          },
          {
            "group": "Parameter",
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
          "content": "[\n    {\n         \"WorkflowID\":\"hpcfapix\",\n         \"task\":\"vector_scal01\",\n         \"ExperimentID\":\"AVUWnydqGMPeuCn4l-cj\",\n         \"type\":\"power\", \"host\": \"node01.excess-project.eu\", \n         \"@timestamp\": \"2016-02-15T12:46:48.749\", \n         \"GPU1:power\": \"168.519\"\n     }, {\n         \"WorkflowID\":\"hoppe\",\n         \"task\":\"testing\",\n         \"ExperimentID\":\"AVNXMXcvGMPeuCn4bMe0\",\n         \"type\": \"power\", \n         \"host\": \"node01.excess-project.eu\", \n         \"@timestamp\": \"2016-02-15T12:43:48.524\", \n         \"GPU0:power\": \"152.427\"\n     }\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/metrics",
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
            "description": "<p>links to all updated experiments' profiled metrics</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n      \"http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix_vector_scal01/AVUWnydqGMPeuCn4l-cj\",\n      \"http://mf.excess-project.eu:3030/v1/mf/profiles/hoppe_testing/AVNXMXcvGMPeuCn4bMe0\"\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/metrics.js",
    "groupTitle": "Metrics"
  },
  {
    "type": "post",
    "url": "/metrics/:workflowID/:experimentID",
    "title": "2. Send one metric with given workflow ID and experiment ID",
    "version": "1.0.0",
    "name": "PostMetrics",
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
            "optional": false,
            "field": "type",
            "description": "<p>type of the metric, e.g. power, temperature, and so on</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>hostname of the system</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>timestamp, when the metric is collected</p>"
          },
          {
            "group": "Parameter",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/metrics/hpcfapix/AVNXMXcvGMPeuCn4bMe0?task=vector_scal01",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"AVXt3coOz5chEwIt8_Ma\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix/vector_scal01/AVNXMXcvGMPeuCn4bMe0\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/metrics.js",
    "groupTitle": "Metrics"
  },
  {
    "type": "get",
    "url": "/profiles/:workflowID/:taskID/:experimentID",
    "title": "3. Request a profiled experiment with given workflow ID, task ID and experiment ID",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix/vector_scal01/AVSbT0ChGMPeuCn4QYjq",
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
          "content": "HTTP/1.1 200 OK\n[\n    {\n     \"@timestamp\":\"2016-05-10T17:35:59.576\",\n     \"host\":\"node01.excess-project.eu\",\n     \"task\":\"vector_scal01\",\n     \"type\":\"energy\",\n     \"DRAM_ENERGY:PACKAGE0\":1.5715,\n     \"DRAM_POWER:PACKAGE0\":1.571,\n    },{\n      \"@timestamp\":\"2016-05-10T17:35:59.708\",\n      \"host\":\"node01.excess-project.eu\",\n      \"task\":\"vector_scal01\",\n      \"type\":\"memory\",\n      \"MemTotal\":32771284,\n      \"MemFree\":31720604\n    },{\n      \"@timestamp\":\"2016-05-10T17:35:59.831\",\n      \"host\":\"node01.excess-project.eu\",\n      \"task\":\"vector_scal01\",\n      \"type\":\"temperature\",\n      \"CPU1_Core 1\":30,\n      \"CPU1_Core 0\":25\n    }\n]",
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
    "filename": "routes/v1/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/profiles/:workflowID/:taskID",
    "title": "2. Request a list of profiled experiments with given workflow ID and task ID",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix/vector_scal01",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"2016-05-11\":{\n     \"AVSf5_wVGMPeuCn4Qdw2\":{\n           \"href\":\"http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix/vector_scal01/AVSf5_wVGMPeuCn4Qdw2\"\n     },\n     \"AVSf-mU4GMPeuCn4Qd0L\":{\n           \"href\":\"http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix/vector_scal01/AVSf-mU4GMPeuCn4Qd0L\"\n     }\n  },\n  \"2016-05-10\":{\n     \"AVXAMB5FLeaeU4rxyi3w\":{\n           \"href\":\"http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix/vector_scal01/AVXAMB5FLeaeU4rxyi3w\"\n     },\n     \"AVVT4dhwenoRsEhyDkeb\":{\n           \"href\":\"http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix/vector_scal01/AVVT4dhwenoRsEhyDkeb\"\n     }\n  }\n}",
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
    "filename": "routes/v1/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/profiles/:workflowID",
    "title": "1. Request a list of profiled tasks with given workflow ID",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"vector_scal01\":{\n     \"AVSf5_wVGMPeuCn4Qdw2\":{\n           \"href\":\"http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix/vector_scal01/AVSf5_wVGMPeuCn4Qdw2\"\n     },\n     \"AVSf-mU4GMPeuCn4Qd0L\":{\n           \"href\":\"http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix/vector_scal01/AVSf-mU4GMPeuCn4Qd0L\"\n     }\n  },\n  \"mfnode01\":{\n     \"AVXAMB5FLeaeU4rxyi3w\":{\n           \"href\":\"http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix/mfnode01/AVXAMB5FLeaeU4rxyi3w\"\n     },\n     \"AVVT4dhwenoRsEhyDkeb\":{\n           \"href\":\"http://mf.excess-project.eu:3030/v1/mf/profiles/hpcfapix/mfnode01/AVVT4dhwenoRsEhyDkeb\"\n     }\n  }\n}",
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
    "filename": "routes/v1/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "/runtime/:workflowID/:taskID/:experimentID",
    "title": "1. Request the runtime of an experiment with given workflow ID, task ID and experiment ID",
    "version": "1.0.0",
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
            "field": "expID",
            "description": "<p>Experiment identifer of an experiment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/runtime/hpcfapix/vector_scal01/AVSbT0ChGMPeuCn4QYjq",
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
            "optional": false,
            "field": "host",
            "description": "<p>hostname of the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"start\":\"2016-05-10T17:35:49.125\",\n     \"end\":\"2016-05-10T17:36:01.749\",\n     \"runtime\":12.624000072479248,\n     \"host\":\"node01.excess-project.eu\"\n}",
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
    "filename": "routes/v1/runtime.js",
    "groupTitle": "Runtime"
  },
  {
    "type": "get",
    "url": "/statistics/:workflowID/:taskID/:experimentID",
    "title": "2. Request the statistics of an experiment with given workflow ID, task ID and experiment ID",
    "version": "1.0.0",
    "name": "GetStatsExperiment",
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
            "field": "experimentID",
            "description": "<p>identifier of an experiment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "metric",
            "description": "<p>name of a metric</p>"
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
            "field": "from",
            "description": "<p>start time of the statistics</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "to",
            "description": "<p>end time of the statistics</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i 'http://mf.excess-project.eu:3030/v1/mf/statistics/hpcfapix/vector_scal01/AVSbT0ChGMPeuCn4QYjq?metric=DRAM_POWER:PACKAGE0&metric=DRAM_POWER:PACKAGE1&host=node01&from=2016-05-10T17:35:57.610&to=2016-05-10T17:36:57.610'",
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
            "field": "user",
            "description": "<p>link to the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metric",
            "description": "<p>name of the metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "statistics",
            "description": "<p>statistics of the metric during the time interval</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "min",
            "description": "<p>minimum measurement during the time interval</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "max",
            "description": "<p>maximum measurement during the time interval</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"user\":\n              {\"href\":\"http://mf.excess-project.eu:3030/v1/mf/users/hpcfapix\"},\n       \"metric\":\"DRAM_POWER:PACKAGE0\",\n       \"statistics\":\n              {\"count\":6,\n               \"min\":1.5568,\n               \"max\":1.5724,\n               \"avg\":1.5640333333333334,\n               \"sum\":9.3842,\n               \"sum_of_squares\":14.677405239999999,\n               \"variance\":0.000033938888888881045,\n               \"std_deviation\":0.0058257093034995355,\n               \"std_deviation_bounds\":\n                      {\"upper\":1.5756847519403325,\n                       \"lower\":1.5523819147263342}\n              },\n       \"min\":\n              {\"@timestamp\":\"2016-05-10T17:36:00.851\",\n               \"host\":\"node01.excess-project.eu\",\n               \"task\":\"vector_scal01\",\n               \"type\":\"energy\",\n               \"DRAM_ENERGY:PACKAGE0\":1.5573,\n               \"DRAM_POWER:PACKAGE0\":1.5568,\n               \"DRAM_ENERGY:PACKAGE1\":1.5584,\n               \"DRAM_POWER:PACKAGE1\":1.5578}\n       \"max\":{\n               \"@timestamp\":\"2016-05-10T17:35:57.610\",\n               \"host\":\"node01.excess-project.eu\",\n               \"task\":\"vector_scal01\",\n               \"type\":\"energy\",\n               \"DRAM_ENERGY:PACKAGE0\":1.5727,\n               \"DRAM_POWER:PACKAGE0\":1.5724,\n               \"DRAM_ENERGY:PACKAGE1\":1.5692,\n               \"DRAM_POWER:PACKAGE1\":1.5689}\n   }\n]",
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
    "filename": "routes/v1/statistics.js",
    "groupTitle": "Statistics"
  },
  {
    "type": "get",
    "url": "/statistics/:workflowID/:taskID",
    "title": "1. Request the statistics of a task with given workflow ID and task ID",
    "version": "1.0.0",
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
            "description": "<p>name of a metric</p>"
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
            "field": "from",
            "description": "<p>start time of the statistics</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "to",
            "description": "<p>end time of the statistics</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i 'http://mf.excess-project.eu:3030/v1/mf/statistics/hpcfapix/vector_scal01?metric=DRAM_POWER:PACKAGE0&metric=DRAM_POWER:PACKAGE1&host=node01&from=2016-05-10T17:35:57.610&to=2016-05-10T17:36:57.610'",
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
            "field": "user",
            "description": "<p>link to the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metric",
            "description": "<p>name of the metric</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "statistics",
            "description": "<p>statistics of the metric during the time interval</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "min",
            "description": "<p>minimum measurement during the time interval</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "max",
            "description": "<p>maximum measurement during the time interval</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"user\":\n              {\"href\":\"http://mf.excess-project.eu:3030/v1/mf/users/hpcfapix\"},\n       \"metric\":\"DRAM_POWER:PACKAGE0\",\n       \"statistics\":\n              {\"count\":6,\n               \"min\":1.5568,\n               \"max\":1.5724,\n               \"avg\":1.5640333333333334,\n               \"sum\":9.3842,\n               \"sum_of_squares\":14.677405239999999,\n               \"variance\":0.000033938888888881045,\n               \"std_deviation\":0.0058257093034995355,\n               \"std_deviation_bounds\":\n                      {\"upper\":1.5756847519403325,\n                       \"lower\":1.5523819147263342}\n              },\n       \"min\":\n              {\"@timestamp\":\"2016-05-10T17:36:00.851\",\n               \"host\":\"node01.excess-project.eu\",\n               \"task\":\"vector_scal01\",\n               \"type\":\"energy\",\n               \"DRAM_ENERGY:PACKAGE0\":1.5573,\n               \"DRAM_POWER:PACKAGE0\":1.5568,\n               \"DRAM_ENERGY:PACKAGE1\":1.5584,\n               \"DRAM_POWER:PACKAGE1\":1.5578}\n       \"max\":{\n               \"@timestamp\":\"2016-05-10T17:35:57.610\",\n               \"host\":\"node01.excess-project.eu\",\n               \"task\":\"vector_scal01\",\n               \"type\":\"energy\",\n               \"DRAM_ENERGY:PACKAGE0\":1.5727,\n               \"DRAM_POWER:PACKAGE0\":1.5724,\n               \"DRAM_ENERGY:PACKAGE1\":1.5692,\n               \"DRAM_POWER:PACKAGE1\":1.5689}\n   }\n]",
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
    "filename": "routes/v1/statistics.js",
    "groupTitle": "Statistics"
  },
  {
    "type": "get",
    "url": "/units",
    "title": "1. Request a list of registered units",
    "version": "1.0.0",
    "name": "GetUnits",
    "group": "Units",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metric",
            "description": "<p>metric object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metric.name",
            "description": "<p>name of the metric</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metric.plugin",
            "description": "<p>plugin, to whom the metric belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metric.unit",
            "description": "<p>unit of the metric</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"CPU0_Core 13\":\n           {\"name\":\"CPU0_Core 13\",\n            \"plugin\":\"mf_plugin_sensors\",\n            \"unit\":\"°c\"},\n     \"CPU1_Core 5\":\n           {\"name\":\"CPU1_Core 5\",\n            \"plugin\":\"mf_plugin_sensors\",\n            \"unit\":\"°c\"},\n     \"VDDIO\":\n           {\"name\":\"VDDIO\",\n            \"plugin\":\"mf_plugin_movidius\",\n            \"unit\":\"mA\"}\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/units",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Not Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n{\n  \"error\": \"Not Found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/units.js",
    "groupTitle": "Units"
  },
  {
    "type": "put",
    "url": "/units/:metricID",
    "title": "2. Register a unit for a metric",
    "version": "1.0.0",
    "name": "PutUnits",
    "group": "Units",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "metricID",
            "description": "<p>identifier of a metric</p>"
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
            "optional": false,
            "field": "href",
            "description": "<p>link to the registered metric and its unit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"href\":\"http://fangli-ThinkPad-T450s:3030/v1/v1/mf/units/GPU1:MEM_used\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/units/GPU1:MEM_used",
        "type": "curl"
      }
    ],
    "filename": "routes/v1/units.js",
    "groupTitle": "Units"
  },
  {
    "type": "post",
    "url": "/users/:userID/:experimentID/create",
    "title": "3. Create a user and an associated experiment with given experiment ID",
    "version": "1.0.0",
    "name": "PostUserExperiment",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>identifier for a user, e.g. 'excess'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "experimentID",
            "description": "<p>identifier given for the experiment</p>"
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
            "optional": false,
            "field": "experimentID",
            "description": "<p>identifier given for the experiment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n     AVX9O-3oz5chEwIt8_M9",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/users/hpcfapix/AVX9O-3oz5chEwIt8_M9/create",
        "type": "curl"
      }
    ],
    "filename": "routes/v1/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/:userID/create",
    "title": "2. Create a user and an associated experiment",
    "version": "1.0.0",
    "name": "PostUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>identifier for a user, e.g. 'excess'</p>"
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
            "optional": false,
            "field": "experimentID",
            "description": "<p>unique identifier generated for the experiment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n     AVX9O-3oz5chEwIt8_M9",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/users/hpcfapix/create",
        "type": "curl"
      }
    ],
    "filename": "routes/v1/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:userID",
    "title": "1. Registers a new user",
    "version": "1.0.0",
    "name": "PutUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>identifier for a user, e.g. 'excess'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "affiliation",
            "description": "<p>affiliation of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "applications",
            "description": "<p>list of applications to be monitored</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Fangli Pi\",\n  \"affiliation\": \"HLRS\",\n  \"applications\": [\n     \"avx\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v1/mf/users/hpcfapix",
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
            "description": "<p>link to the data stored for the given user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"href\":\"http://mf.excess-project.eu:3030/v1/mf/users/hpcfapix\"\n}",
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
            "description": "<p>The given user could not be registered at the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Resource could not be stored.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/workflows/:workflowID",
    "title": "2. Get information about a specific workflow",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/workflows/ms2",
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
    "filename": "routes/v1/dreamcloud/workflows.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "get",
    "url": "/workflows",
    "title": "3. Request a list of registered workflows",
    "version": "1.0.0",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"hpcdhopp\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v1/dreamcloud/mf/workflows/hpcdhopp\"\n  },\n  \"hpcdkhab\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v1/dreamcloud/mf/workflows/hpcdkhab\"\n  },\n  \"hpcfapix\": {\n    \"href\": \"http://mf.excess-project.eu:3030/v1/dreamcloud/mf/workflows/hpcfapix\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/workflows",
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
    "filename": "routes/v1/dreamcloud/workflows.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "put",
    "url": "/workflows",
    "title": "4. Register a new workflow and create a new experiment",
    "version": "1.0.0",
    "name": "PutWorkflow",
    "group": "Workflows",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/workflows",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"workflow\": {\n    \"id\":   \"ms2\",\n    \"href\": \"http://mf.excess-project.eu:3030/v1/workflows/ms2\"\n  },\n  \"experiment\": {\n    \"id\":   \"AVXotMWFA9kSggr_MSq2\",\n    \"href\": \"http://mf.excess-project.eu:3030/v1/experiments/AVXotMWFA9kSggr_MSq2?workflow=ms2\"\n  }\n}",
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
    "filename": "routes/v1/dreamcloud/workflows.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "put",
    "url": "/workflows/:workflowID",
    "title": "1. Register a new workflow with a custom ID",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/workflows/ms2",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"href\": \"http://mf.excess-project.eu:3030/v1/dreamcloud/mf/workflows/ms2\",\n}",
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
    "filename": "routes/v1/dreamcloud/workflows.js",
    "groupTitle": "Workflows"
  },
  {
    "type": "put",
    "url": "/workflows/:workflowID/:experimentID",
    "title": "5. Register a new workflow and experiment using custom IDs",
    "version": "1.0.0",
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
        "content": "curl -i http://mf.excess-project.eu:3030/v1/dreamcloud/mf/workflows/ms2/myUniqueID",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"workflow\": {\n    \"id\":   \"ms2\",\n    \"href\": \"http://mf.excess-project.eu:3030/v1/workflows/ms2\"\n  },\n  \"experiment\": {\n    \"id\":   \"myUniqueID\",\n    \"href\": \"http://mf.excess-project.eu:3030/v1/experiments/myUniqueID?workflow=ms2\"\n  }\n}",
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
    "filename": "routes/v1/dreamcloud/workflows.js",
    "groupTitle": "Workflows"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/v1/doc/main.js",
    "group": "_home_hopped_hlrs_codebase_excess_16_6_github_monitoring_server_routes_v1_doc_main_js",
    "groupTitle": "_home_hopped_hlrs_codebase_excess_16_6_github_monitoring_server_routes_v1_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/v1/dreamcloud/doc/main.js",
    "group": "_home_hopped_hlrs_codebase_excess_16_6_github_monitoring_server_routes_v1_dreamcloud_doc_main_js",
    "groupTitle": "_home_hopped_hlrs_codebase_excess_16_6_github_monitoring_server_routes_v1_dreamcloud_doc_main_js",
    "name": ""
  }
] });
