define({ "api": [
  {
    "type": "get",
    "url": "/workflows/:workflowID",
    "title": "Get information about a specific workflow",
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
    "title": "Request a list of registered workflows",
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
    "title": "Register a new workflow and create a new experiment",
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
    "title": "Register a new workflow with a custom ID",
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
    "title": "Register a new workflow and experiment using custom IDs",
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
  }
] });
