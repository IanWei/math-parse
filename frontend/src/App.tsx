import { useState } from 'react';
import axios from 'axios';
import AstViewer from './components/astViewer/index.tsx';

const App: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [astResult, setAstResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const evaluateExpression = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behaviour
    try {
      const response = await axios.post('http://localhost:3000/evaluate', { expression });
      setResult(`Result: ${response.data.result}`);
      setAstResult(response.data.astResult);
      setError(null);
    } catch (err: any) {
      setResult(null);
      setAstResult(null);
      setError(err.response?.data?.error || 'An unexpected error occurred');
    }
  };

  const resetFields = () => {
    setExpression('');
    setResult(null);
    setAstResult(null);
    setError(null);
  };

  return (
    <div style={{ width: '100vw', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div style={{ margin: '0 auto', width: '800px', textAlign: 'center' }}>
        <h1>Math Expression Evaluator</h1>
        <form onSubmit={evaluateExpression} style={{ marginBottom: '20px' }}>
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Enter an expression (e.g., 1 + 2 = 3)"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              fontSize: '16px',
            }}
          />
          <div>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                marginRight: '10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Evaluate
            </button>
            <button
              type="button"
              onClick={resetFields}
              style={{
                padding: '10px 20px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Reset
            </button>
          </div>
        </form>
        {error && (
          <p style={{ color: 'red', marginTop: '10px' }}>
            <strong>Error:</strong> {error}
          </p>
        )}
        {result && (
          <p style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>{result}</p>
        )}
        {astResult && (
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <AstViewer ast={astResult} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
