import { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const evaluateExpression = async () => {
    try {
      const response = await axios.post('http://localhost:3000/evaluate', { expression });
      setResult(`Result: ${response.data.result}`);
    } catch (error) {
      setResult(`Error: ${(error as any).response.data.error}`);
    }
  };

  const resetFields = () => {
    setExpression('');
    setResult('');
  };

  return (
    <div style={{ width: '100vw' }}>
      <div style={ { margin: '0 auto', width: 800 } }>
        <h1>Math Expression Evaluator</h1>
        <input
          type="text"
          value={ expression }
          onChange={ (e) => setExpression( e.target.value ) }
          placeholder="Enter an expression"
        />

        <button onClick={ evaluateExpression } style={ { marginRight: 10 } }>Evaluate</button>
        <button onClick={ resetFields }>Reset</button>
        { result && <p>{ result }</p> }
      </div>
    </div>

  );
};

export default App;
