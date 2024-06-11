const express = require('express');
const axios = require('axios');

const cors = require('cors'); // Import cors middleware


const app = express();
app.use(express.json());
const port = 3001; // You can change this to any port you prefer

const url = 'http://plasament.com/api/ApiJob';
const transactionKey = 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA';

app.use(cors()); // Enable CORS for all routes

app.get('/api/joblist', async (req, res) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'TransactionKey': transactionKey
      }
    });
    res.json(response.data.Response);
    console.log(res)
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.get('/api/job/:jobId', async (req, res) => {
    try {
        const jobId = req.params.jobId;
        const response = await fetch(`http://plasament.com/api/ApiJob/${jobId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.get('/api/Employers', async (req, res) => {
  try {
      const response = await fetch(`http://plasament.com/api/ApiEmployer`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
          }
      });
      const result = await response.json();
      res.json(result);
      //res.json(response.data.Response);
  } catch (error) {
      res.status(500).send(error.toString());
  }
});

app.get('/api/Employer/:EmployerId', async (req, res) => {
  try {
      const EmployerId = req.params.EmployerId;
      const response = await fetch(`http://plasament.com/api/ApiEmployer/${EmployerId}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
          }
      });
      const result = await response.json();
      res.json(result);
  } catch (error) {
      res.status(500).send(error.toString());
  }
});

app.get('/api/User', async (req, res) => {
  try {
      const response = await fetch(`http://plasament.com/api/ApiUser`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
          }
      });
      const result = await response.json();
      res.json(result);
      //res.json(response.data.Response);
  } catch (error) {
      res.status(500).send(error.toString());
  }
});

app.get('/api/UserId/:UserId', async (req, res) => {
  try {
      const UserId = req.params.UserId;
      const response = await fetch(`http://plasament.com/api/ApiUser/${UserId}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
          }
      });
      const result = await response.json();
      res.json(result);
  } catch (error) {
      res.status(500).send(error.toString());
  }
});

app.post('/api/Application/Submitted', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
  
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0ICB0LnRvdGFsQXBwbHllZCB0b3RhbEFwcGxpZWQsZWouSWQgSm9iSWQsSm9iVGl0bGUsYy5OYW1lIEpvYkNhdGVnb3J5LFZhY2FuY2llcyxTYWxhcnlNaW4sU2FsYXJ5TWF4LApFeHBlcmllbmNlWWVhcixFeHBlcmllbmNlTW9udGgsRGVhZGxpbmUsRGF0ZUNyZWF0ZWQsZW0uQ29tcGFueU5hbWUsVGFnLGVqLkFjdGl2ZSwKbWouTmFtZSBKb2JUeXBlLEVkdWN0aW9uLGNhc3QoaXNudWxsKElzRmVhdHVyZWRKb2IsMCkgYXMgYml0KSBJc0ZlYXR1cmVkSm9iIGZyb20gKApzZWxlY3QgY291bnQoKikgdG90YWxBcHBseWVkLEpvYklkIGZyb20gVXNlckFwcGxpZWRKb2IKZ3JvdXAgYnkgSm9iSWQgKSB0CmpvaW4gRW1wbG95ZXJKT0JQb3N0IGVqIG9uIGVqLklkID0gdC5Kb2JJZApsZWZ0IG91dGVyIGpvaW4gTWFzdGVySm9iQ2F0ZWdvcnkgYyBvbiBjLklkPSBlai5Kb2JDYXRlZ29yeSAKbGVmdCBvdXRlciBqb2luIEVtcGxveWVyTWFzdGVyIGVtIG9uIGVtLklkPSBlai5Ga0VtcGxveWVySWQKbGVmdCBvdXRlciBqb2luIE1hc3RlckpvYlR5cGUgbWogb24gbWouSWQ9ZWouSm9iVHlwZQ=="
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Application/Submitted/View/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
        const {id} = req.params;
  
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IFVzZXJOYW1lLEVtYWlsQWRkcmVzcyxNb2JpbGVOdW1iZXIsQ3VycmVudExvY2F0aW9uLEF2YWlsYWJpbGl0eVRvSm9pbiwKbXUuRGF0ZUNyZWF0ZWQsQ2FyZWVyT2JqZWN0aXZlLERlc2lnbmF0aW9uLENhdGVnb3J5LERPQiBmcm9tIFVzZXJBcHBsaWVkSm9iIHUKbGVmdCBvdXRlciBqb2luIFVzZXJNYXN0ZXIgbXUgb24gbXUuSWQ9dS5Vc2VySWQKd2hlcmUgdS5Kb2JJZD0=",
            Id: id
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });


  app.post('/api/Category/Job', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
  
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IGNvdW50KCopIENvdW50cyxtai5OYW1lIENhdGVnb3J5IGZyb20gRW1wbG95ZXJKT0JQb3N0IGVqCmxlZnQgb3V0ZXIgam9pbiBNYXN0ZXJKb2JDYXRlZ29yeSBtaiBvbiBtai5JZD1lai5Kb2JDYXRlZ29yeQpncm91cCBieSBtai5OYW1l"
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Category/Jobs', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
  
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IElkLE5hbWUsU29ydE9yZGVyLEFjdGl2ZSBmcm9tIE1hc3RlckpvYkNhdGVnb3J5"
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Category/Jobs/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
          
        const jobCategoryId = req.params.id;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IElkLE5hbWUsU29ydE9yZGVyLEFjdGl2ZSBmcm9tIE1hc3RlckpvYkNhdGVnb3J5IHdoZXJlIGlkPQ==",
            Id:jobCategoryId  
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Category/delete/Jobs/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
          
        const jobCategoryId = req.params.id;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "ZGVsZXRlIGZyb20gTWFzdGVySm9iQ2F0ZWdvcnkgd2hlcmUgU3lzdGVtRW50cnk8PjEgYW5kIElkPQ==",
            Id:jobCategoryId  
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Category/Add', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
          const {searchType} = req.body;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "aW5zZXJ0IGludG8gTWFzdGVySm9iQ2F0ZWdvcnkoTmFtZSxBY3RpdmUpIHZhbHVlcygnQEBWYWx1ZScsMSk=",
            searchType
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Category/Update/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
        const jobCategoryId = req.params.id;  
        const {searchType} = req.body;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "dXBkYXRlIE1hc3RlckpvYkNhdGVnb3J5IHNldCBOYW1lPSdAQFZhbHVlJyB3aGVyZSBJZD0=",
            Id:jobCategoryId,
            searchType
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

//   app.post('/api/Category/update/Jobs/:id', async (req, res) => {
//     try {
//         //const requestBody = req.body; // Assuming you send data in the request body
          
//         const jobCategoryId = req.params.id;

//          // Assuming `Value` is a property in the request body
//         const { Value } = req.body;

//         const requestBody = {
//             // Replace with actual data structure expected by the API
//             Name: "dXBkYXRlIE1hc3RlckpvYkNhdGVnb3J5IHNldCBOYW1lPSdAQFZhbHVlJyB3aGVyZSBJZD0=",
//             Id:jobCategoryId,
//             Value  
//         };

//         console.log("Request Body: ",requestBody);
//         const response = await fetch(`http://plasament.com/api/ApiCustom`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
//             },
//              body: JSON.stringify(requestBody)
//             //body: requestBody

//         });
  
//         const result = await response.json();
//         res.json(result);
//     } catch (error) {
//         res.status(500).send(error.toString());
//     }
//   });

  app.post('/api/Qualification', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
  
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IElkLE5hbWUsU29ydE9yZGVyIGZyb20gTWFzdGVyRWR1Y2F0aW9u"
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Qualification/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
          
        const jobCategoryId = req.params.id;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IElkLE5hbWUsU29ydE9yZGVyIGZyb20gTWFzdGVyRWR1Y2F0aW9uIHdoZXJlIGlkPQ==",
            Id:jobCategoryId  
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Qualification/delete/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
          
        const jobCategoryId = req.params.id;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "ZGVsZXRlIGZyb20gTWFzdGVyRWR1Y2F0aW9uIHdoZXJlICBTeXN0ZW1FbnRyeTw+MSBhbmQgSWQ9==",
            Id:jobCategoryId  
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Add/Qualification', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
           const {searchType} = req.body;
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "aW5zZXJ0IGludG8gTWFzdGVyRWR1Y2F0aW9uKE5hbWUpIHZhbHVlcygnQEBWYWx1ZScp",
            searchType
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
        
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Update/Qualification/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
        const jobCategoryId = req.params.id;  
        const {searchType} = req.body;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "dXBkYXRlIE1hc3RlckVkdWNhdGlvbiBzZXQgTmFtZT0nQEBWYWx1ZScgd2hlcmUgSWQ9",
            Id:jobCategoryId,
            searchType
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Course', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
  
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IElkLE5hbWUsQ29kZSxTb3J0T3JkZXIsRktFZHVjYXRpb24gZnJvbSBNYXN0ZXJDb3Vyc2U="
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Course/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
          
        const jobCategoryId = req.params.id;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IElkLE5hbWUsQ29kZSxTb3J0T3JkZXIsRktFZHVjYXRpb24gZnJvbSBNYXN0ZXJDb3Vyc2Ugd2hlcmUgaWQ9",
            Id:jobCategoryId  
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Course/delete/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
          
        const jobCategoryId = req.params.id;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "ZGVsZXRlIGZyb20gTWFzdGVyQ291cnNlIHdoZXJlICBTeXN0ZW1FbnRyeTw+MSBhbmQgSWQ9",
            Id:jobCategoryId  
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Add/Course', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
           const {searchType} = req.body;
           const {Id} = req.body;
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "aW5zZXJ0IGludG8gTWFzdGVyQ291cnNlKE5hbWUsRktFZHVjYXRpb24pIHZhbHVlcygnQEBWYWx1ZScsJ0BAVmFsdWUyJyk=",
            searchType,
            Id
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();

                // Check if response data is empty or invalid
                if (!result) {
                    throw new Error('Empty response received from the server.');
                }

        res.json(result);
        
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });
  
  app.post('/api/JobType', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
  
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IElkLE5hbWUsU29ydE9yZGVyLEFjdGl2ZSBmcm9tIE1hc3RlckpvYlR5cGU="
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/JobType/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
          
        const jobCategoryId = req.params.id;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IElkLE5hbWUsU29ydE9yZGVyLEFjdGl2ZSBmcm9tIE1hc3RlckpvYlR5cGUgd2hlcmUgaWQ9",
            Id:jobCategoryId  
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/JobType/delete/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
          
        const jobCategoryId = req.params.id;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "ZGVsZXRlIGZyb20gTWFzdGVySm9iVHlwZSB3aGVyZSAgU3lzdGVtRW50cnk8PjEgYW5kIElkPQ===",
            Id:jobCategoryId  
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Add/JobType', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
           const {searchType} = req.body;
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "aW5zZXJ0IGludG8gTWFzdGVySm9iVHlwZShOYW1lLEFjdGl2ZSkgdmFsdWVzKCdAQFZhbHVlJywxKQ==",
            searchType
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
        
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Update/JobType/:id', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
        const jobCategoryId = req.params.id;  
        const {searchType} = req.body;

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "dXBkYXRlIE1hc3RlckpvYlR5cGUgc2V0IE5hbWU9J0BAVmFsdWUnIHdoZXJlIElkPQ==",
            Id:jobCategoryId,
            searchType
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });


  app.post('/api/Candidate/Demographics', async (req, res) => {
    try {

        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IENPVU5UKCopIENvdW50cyxBZ2VHcm91cCBUeXBlLCAnQWdlR3JvdXAnIENvdW50Rm9yICBmcm9tICgKc2VsZWN0IENhc2Ugd2hlbiBBZ2VZZWFycyBiZXR3ZWVuIDE4IGFuZCAyNSB0aGVuICcxOC0yNScKd2hlbiAgQWdlWWVhcnMgYmV0d2VlbiAyNSBhbmQgMzAgdGhlbiAnMjUtMzAnCndoZW4gIEFnZVllYXJzIGJldHdlZW4gMzAgYW5kIDM1IHRoZW4gJzMwLTM1JwplbHNlICczNSsnIGVuZCBBZ2VHcm91cCBmcm9tICgKU0VMRUNUIENPTlZFUlQoaW50LFJPVU5EKERBVEVESUZGKGhvdXIsRE9CLEdFVERBVEUoKSkvODc2Ni4wLDApKSBBUyBBZ2VZZWFycyAKZnJvbSBVc2VyTWFzdGVyIGdyb3VwIGJ5IENPTlZFUlQoaW50LFJPVU5EKERBVEVESUZGKGhvdXIsRE9CLEdFVERBVEUoKSkvODc2Ni4wLDApKSkgdCkgdDIKZ3JvdXAgYnkgQWdlR3JvdXAKdW5pb24Kc2VsZWN0IGNvdW50KCopIENvdW50cyxpc251bGwoR2VuZGVyLCdPdGhlcicpIFR5cGUsICdHZW5kZXInIENvdW50Rm9yICBmcm9tIFVzZXJNYXN0ZXIgCmdyb3VwIGJ5IEdlbmRlcgp1bmlvbgpzZWxlY3QgY291bnQoKikgQ291bnRzLGlzbnVsbChDdXJyZW50TG9jYXRpb24sJ0luZGlhJykgVHlwZSwgJ0xvY2F0aW9uJyBDb3VudEZvciBmcm9tIFVzZXJNYXN0ZXIgCmdyb3VwIGJ5IEN1cnJlbnRMb2NhdGlvbgp1bmlvbgpzZWxlY3QgY291bnQoKikgQ291bnRzLGlzbnVsbChlZC5OYW1lLCcxMHRoJykgVHlwZSAsJ0hpZ2hlclF1YWxpZmljYXRpb24nIENvdW50Rm9yIGZyb20gVXNlck1hc3RlciB1CmxlZnQgb3V0ZXIgam9pbiBNYXN0ZXJFZHVjYXRpb24gZWQgb24gZWQuSWQ9dS5IaWdoZXJRdWFsaWZpY2F0aW9uCmdyb3VwIGJ5IGVkLk5hbWU=",
        };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });


  app.post('/api/Login/Registration/detail', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0ICogZnJvbSAoc2VsZWN0IGNvdW50KCopIENvdXN0cywnTG9naW4nIFR5cGUsCkRBVEVOQU1FKG1vbnRoLERBVEVBREQobW9udGgsIERBVEVQQVJUKE1PTlRILERhdGVDcmVhdGVkKS0xLCBDQVNUKCcyMDA4LTAxLTAxJyBBUyBkYXRldGltZSkpKSBtb250aHMKZnJvbSBVc2VyTWFzdGVyIHdoZXJlIEF2YWlsYWJpbGl0eVRvSm9pbiBpcyBub3QgbnVsbApncm91cCBieSBEYXRlQ3JlYXRlZAp1bmlvbiBzZWxlY3QgY291bnQoKikgQ291c3RzLCdSZWdpc3RyYXRpb24nIFR5cGUsIERBVEVOQU1FKG1vbnRoLERBVEVBREQobW9udGgsIERBVEVQQVJUKE1PTlRILERhdGVDcmVhdGVkKS0xLCBDQVNUKCcyMDA4LTAxLTAxJyBBUyBkYXRldGltZSkpKSAgbW9udGhzCmZyb20gVXNlck1hc3RlciAKZ3JvdXAgYnkgRGF0ZUNyZWF0ZWQKKSB0",
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
        
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Industry/Graphics', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IENvdW50KCopIGNvdW50cyxJbmR1c3RyeSxPcmdhbml6YXRpb25UeXBlIGZyb20gRW1wbG95ZXJNYXN0ZXIKZ3JvdXAgYnkgSW5kdXN0cnksT3JnYW5pemF0aW9uVHlwZQ==",
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
        
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Candidate/Graphics', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IEN1cnJlbnRMb2NhdGlvbixDb3VudCgqKSBjb3VudHMsR2VuZGVyIGZyb20gVXNlck1hc3RlciAKZ3JvdXAgYnkgQ3VycmVudExvY2F0aW9uLEdlbmRlcg==",
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
        
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

  app.post('/api/Candidate/Graphics/Detail', async (req, res) => {
    try {
        //const requestBody = req.body; // Assuming you send data in the request body
        const requestBody = {
            // Replace with actual data structure expected by the API
            Name: "c2VsZWN0IENPVU5UKCopIENvdW50cyxBZ2VHcm91cCBUeXBlLCAnQWdlR3JvdXAnIENvdW50Rm9yICBmcm9tICgKc2VsZWN0IENhc2Ugd2hlbiBBZ2VZZWFycyBiZXR3ZWVuIDE4IGFuZCAyNSB0aGVuICcxOC0yNScKd2hlbiAgQWdlWWVhcnMgYmV0d2VlbiAyNSBhbmQgMzAgdGhlbiAnMjUtMzAnCndoZW4gIEFnZVllYXJzIGJldHdlZW4gMzAgYW5kIDM1IHRoZW4gJzMwLTM1JwplbHNlICczNSsnIGVuZCBBZ2VHcm91cCBmcm9tICgKU0VMRUNUIENPTlZFUlQoaW50LFJPVU5EKERBVEVESUZGKGhvdXIsRE9CLEdFVERBVEUoKSkvODc2Ni4wLDApKSBBUyBBZ2VZZWFycyAKZnJvbSBVc2VyTWFzdGVyIGdyb3VwIGJ5IENPTlZFUlQoaW50LFJPVU5EKERBVEVESUZGKGhvdXIsRE9CLEdFVERBVEUoKSkvODc2Ni4wLDApKSkgdCkgdDIKZ3JvdXAgYnkgQWdlR3JvdXAKdW5pb24Kc2VsZWN0IGNvdW50KCopIENvdW50cyxpc251bGwoR2VuZGVyLCdPdGhlcicpIFR5cGUsICdHZW5kZXInIENvdW50Rm9yICBmcm9tIFVzZXJNYXN0ZXIgCmdyb3VwIGJ5IEdlbmRlcgp1bmlvbgpzZWxlY3QgY291bnQoKikgQ291bnRzLGlzbnVsbChDdXJyZW50TG9jYXRpb24sJ0luZGlhJykgVHlwZSwgJ0xvY2F0aW9uJyBDb3VudEZvciBmcm9tIFVzZXJNYXN0ZXIgCmdyb3VwIGJ5IEN1cnJlbnRMb2NhdGlvbgp1bmlvbgpzZWxlY3QgY291bnQoKikgQ291bnRzLGlzbnVsbChlZC5OYW1lLCcxMHRoJykgVHlwZSAsJ0hpZ2hlclF1YWxpZmljYXRpb24nIENvdW50Rm9yIGZyb20gVXNlck1hc3RlciB1CmxlZnQgb3V0ZXIgam9pbiBNYXN0ZXJFZHVjYXRpb24gZWQgb24gZWQuSWQ9dS5IaWdoZXJRdWFsaWZpY2F0aW9uCmdyb3VwIGJ5IGVkLk5hbWU=",
          };

        console.log("Request Body: ",requestBody);
        const response = await fetch(`http://plasament.com/api/ApiCustom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'TransactionKey': 'Es9JpGJyajaamahe5ZMoaumQG6lpEUylIhUR5ykAcA'
            },
             body: JSON.stringify(requestBody)
            //body: requestBody

        });
  
        const result = await response.json();
        res.json(result);
        
    } catch (error) {
        res.status(500).send(error.toString());
    }
  });

app.listen(port, () => {
  //console.log(`Server is running on http://localhost:${port}`);
});
