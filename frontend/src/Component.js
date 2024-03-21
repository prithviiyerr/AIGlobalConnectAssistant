import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Component = () => {
    const [testResult, setTestResult] = useState('');

    useEffect(() => {
        async function fetchTestResult() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/myapp/test_view');
                setTestResult(response.data.result);
            } catch (error) {
                console.error('Error fetching test result:', error);
            }
        }
        fetchTestResult();
    }, []);

    return (
        <div>
            <h1>Test:</h1>
            <p>{testResult}</p>
        </div>
    );
};

export default Component;
