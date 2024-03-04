import React, { useState } from 'react';
import { Button, Typography, Container, TextField, InputAdornment, Link, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import axios from 'axios';

function MyComponent() {
  const [queryInput, setQueryInput] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('');

  const handleCheckConnection = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/presidents');
      
      // Assuming a successful response indicates a working connection
      if (response.data) {
        setConnectionStatus('Yes');
      } else {
        setConnectionStatus('No');
      }
    } catch (error) {
      console.error('Error checking connection:', error);
      setConnectionStatus('No');
    } finally {
      setLoading(false);
    }
  };
  const handleEvaluateFactcheck = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/factcheck', {
        params: {
          query_data: queryInput,
        },
      });

      setResult(response.data);

      if (response.data && response.data.length > 0) {
        console.log('Correct!');
      } else {
        console.log('Incorrect!');
      }
    } catch (error) {
      console.error('Error calling API:', error);
      setResult({ error: 'Error calling API' });
      console.log('Incorrect!');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard:', text);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };
  const queries = [
    `
   From when to when was Barack Obama the president of the United States?
   Notice: For the answer, please just write the answer, then please add at the end of the answer in plain text - not python: "QUERY HERE" and then add below the answer in the format:
   "president name", "number of the president in the list of president", "Year of begin office", "Year of end office" (for the number of the president, just the number without suffixe). Please also use the same name used in the query.
   `,
    `
From when to when was William (Bill) Clinton the president of the United States?
Notice: For the answer, please just write the answer, then please add at the end of the answer in plain text - not python: "QUERY HERE" and then add below the answer in the format:
"president name", "number of the president in the list of president", "Year of begin office", "Year of end office" (for the number of the president, just the number without suffixe). Please also use the same name used in the query.
`,
    `
From when to when was George W. Bush the president of the United States?
Notice: For the answer, please just write the answer, then please add at the end of the answer in plain text - not python: "QUERY HERE" and then add below the answer in the format:
"president name", "number of the president in the list of president", "Year of begin office", "Year of end office" (for the number of the president, just the number without suffixe). Please also use the same name used in the query.
`
  ];

  const dividerStyle = {
    width: '50%',
    borderBottom: '2px solid #1976D2', // Adjust color as needed
  };


  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '24px',
    marginBottom: '24px',
  };

  const errorMessageStyle = {
    margin: '0 16px',
    color: '#f44336', // Adjust color as needed
  };
  return (
    <Container>

    <div style={{ height: '100px' }}></div>
    <div>
      <button onClick={handleCheckConnection} disabled={loading}>
        Check Connection
      </button>
      {loading && <p>Loading...</p>}
      {connectionStatus && <p>Connection Status: {connectionStatus}</p>}
    </div>
      {queries.map((query, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
          <Typography variant="body1" style={{ marginRight: '8px',fontSize:"18px" }}>{query.split('Notice')[0]}</Typography>
          <Button variant="outlined" color="primary" onClick={() => handleCopyToClipboard(query)}>
            Copy to Clipboard
          </Button>
        </div>
      ))}

      <div style={{ height: '100px' }}></div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Enter text"
          variant="outlined"
          fullWidth
          value={queryInput}
          onChange={(e) => setQueryInput(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button variant="contained" color="primary" onClick={handleEvaluateFactcheck}>
          Submit
        </Button>

        {loading && <CircularProgress size={24} style={{ marginLeft: '10px' }} />}
      </div>

      {result && result.length > 0 ? (
        <div>
          {result && result.length > 0 ? (
            <div>
                    <div style={{ height: '50px' }}></div>
              <Typography variant="h5" style={{fontSize:'20px',fontWeight:'bold'}}>Source is correct !</Typography>
              <Link href={result[0].url_source} target="_blank" rel="noopener noreferrer">
                {result[0].url_source}

              </Link>
            </div>
          ) : (
            <Typography variant="h5">Incorrect!</Typography>
          )}

        </div>
      ) : (
        <div style={containerStyle}>
          <Typography variant="h5" style={errorMessageStyle}>
            Unfortunately, this is incorrect. Please check real sources and do not quote this date.
          </Typography>
        </div>)}

    </Container>
  );
}

export default MyComponent;
