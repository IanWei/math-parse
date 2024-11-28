# **Math-Parse**

Math-Parse is a full-stack application that evaluates mathematical expressions and determines if they are `true` or `false`. The project is built with **Bun**, **Nearley**, **React**, and **Vite**.

---

## **Features**

### **Backend**
- Parses and evaluates mathematical expressions.
- Generates an Abstract Syntax Tree (AST) for expressions to provide a structured representation of the parsed data.
- Returns whether the expression evaluates to `true` or `false`.
- Supports arithmetic and comparison operators.
- Built using **Express** and **TypeScript**.
- Unit tested with **Jest** for robust validation.


### **Frontend**
- Provides a simple interface for entering mathematical expressions.
- Displays whether the entered expression evaluates to `true` or `false`.
- Includes a reset functionality for clearing input and results.
- Powered by **React** and **Vite** for a fast and responsive user experience.

---

## **Project Structure**

```plaintext
math-parse/
├── backend/            # Backend codebase
│   ├── src/            # Backend source code
│   │   ├── parser/     # Nearley grammar and lexer
│   │   ├── tests/      # Unit tests for backend
│   │   ├── types/      # Type decoration for backend
│   │   ├── util/       # Unit functions for backend
│   │   └── index.ts    # Main Express server
├── frontend/           # Frontend codebase
│   ├── src/            # React frontend source code
│   ├── public/         # Public assets
│   └── index.html      # HTML entry point
└── README.md           # Project documentation
```

## **Prerequisites**

Before setting up the project, ensure you have the following installed:

1. **[Bun](https://bun.sh/)**:  
   Bun is a modern JavaScript runtime. You can install it by running:
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```
2. **[Node.js](https://nodejs.org/)** (Optional):  
   If Bun is not suitable for your environment, you can install and use Node.js for compatibility.  
   Download and install Node.js from the [official website](https://nodejs.org/).
3. **[Vite](https://vitejs.dev/)**:  
   Vite is bundled with the frontend dependencies, but ensure your environment supports it.  
   It will be automatically installed when you install the frontend dependencies.

## **Setup Instructions**

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:IanWei/math-parse.git
   cd math-parse
   ```
2. **Install Dependencies**:
   Install dependencies for both `backend` and `frontend` projects:
   ```bash
   cd backend
   bun install
   cd ../frontend
   bun install
   cd ..
   ```
3. **Compile Grammar**:
   Compile the Nearley grammar for the backend:
   ```bash
   bun run --cwd ./backend build-grammar
   ```
4. **Start the Application**:
   Run both backend and frontend concurrently:
   ```bash
   bun run start
   ```
   Alternatively, you can start them individually:
   - Backend:
     ```bash     
     bun run start:backend
     ```   
   - Frontend:
     ```bash     
     bun run start:frontend
     ```
5. **Access the Frontend**:
   Open your browser and visit the frontend at [http://localhost:5173](http://localhost:5173).

## **Testing**

### **Backend Unit Tests**
- The backend includes unit tests for the parser and other features.
- Run tests with:
  ```bash
  bun run test --cwd ./backend
  ``` 

- The parser tests and AST tests are located in `backend/src/tests`.

## **API Endpoints**

### **POST /ast**
- **Description**: Generates an Abstract Syntax Tree (AST) for a given mathematical expression.
- **Request Body**:
  ```bash
  {
  "expression": "1 + 2 = 3"
  }
  ```

- **Response**:
    - **Success**:
      ```json
      {
        "ast": {
          "type": "Comparison",
          "left": {
          "type": "Addition",
          "left": "1",
          "right": "2"
        },
        "right": "3"
        }
      }
      ```
    - **Error**:
      ```json
      {
      "error": "The error occurs at the position [index]"
      }
      ```

---

## **Scripts**

### **Root Scripts**
- `start:backend`: Starts the backend server.
  ```bash
  bun run --cwd ./backend src/index.ts
  ```

- `start:frontend`: Starts the React frontend.
  ```bash
  bun run --cwd ./frontend dev
  ```

- `start`: Runs both backend and frontend concurrently.
  ```bash
  bun run start
  ```

### **Backend Scripts**
- `dev`: Starts the backend in development mode.
  ```bash
  bun run src/index.ts
  ```

- `build-grammar`: Compiles the Nearley grammar file into JavaScript.
  ```bash
  nearleyc src/parser/grammar.ne -o src/parser/grammar.js
  ```

### **Frontend Scripts**
- `dev`: Starts the frontend in development mode using Vite.
  ```bash
  vite
  ```

- `build`: Builds the frontend for production.
  ```bash
  tsc -b && vite build
  ```

- `lint`: Lints the frontend code using ESLint.
  ```bash
  eslint .
  ```

- `preview`: Serves the built frontend for preview.
  ```bash
  vite preview
  ```

## **Supported Features**

### **Backend Expression Evaluation**
- **Arithmetic Operators**: `+`, `-`, `*`, `/`
- **Comparison Operators**: `=`, `!=`
- **Operator Precedence**:
   - Multiplication (`*`) and division (`/`) have higher precedence than addition (`+`) and subtraction (`-`).
   - Comparison operators (`=`, `!=`) are evaluated after arithmetic operations.

### **Examples**
- Input: `1 + 2 = 3`  
  Output:  
  ```bash
  true
  ```

- Input: `2 + 3 * 2 = 10`  
  Output:  
  ```bash
  false
  ```

- Input: `12 + 3 != 4 / 2 + 5`  
  Output:  
  ```bash
  true
  ```

## **Dependencies**

### **Backend**
- `express`: Web framework for building REST APIs.
- `nearley`: Parser toolkit for defining grammar.
- `moo`: Lexer for tokenizing mathematical expressions.
- `cors`: Middleware for handling Cross-Origin Resource Sharing (CORS).
- `body-parser`: Middleware for parsing JSON request bodies.
- `@types/express`: Type definitions for Express.

### **Frontend**
- `react`: Core React library for building the user interface.
- `react-dom`: Library for rendering React components to the DOM.
- `axios`: HTTP client for communicating with the backend.
- `@types/axios`: Type definitions for Axios.
- `vite`: Development server and build tool for the frontend.
- `@vitejs/plugin-react`: React plugin for Vite.
- `eslint`: Linting tool for identifying and fixing problems in code.
- `typescript`: TypeScript support for frontend and backend code.
- `@types/react` and `@types/react-dom`: Type definitions for React and React DOM.
- `eslint-plugin-react-hooks`: ESLint plugin for enforcing React hooks rules.
- `typescript-eslint`: ESLint plugin for TypeScript integration.
## **Development Notes**

1. **Grammar Development**:
   - The grammar is defined in `backend/src/parser/grammar.ne`.
   - Use the following command to compile the grammar after making changes:
     ```bash
     bun run --cwd ./backend build-grammar
     ```

2. **Frontend Features**:
   - The React app includes an input box for entering mathematical expressions.
   - A reset button is available to clear the input and results.

3. **Backend Features**:
   - The backend parses and evaluates mathematical expressions using Nearley and Moo.
   - The server is located in `backend/src/index.ts`.
   - Start the backend in development mode with:
     ```bash
     bun run src/index.ts
     ```

4. **Testing**:
   - Test the backend endpoints using a tool like Postman, Insomnia, or curl.
   - Ensure to verify both valid and invalid mathematical expressions for proper error handling.

## **Future Enhancements**

1. **Unit Testing**:
   - Add comprehensive unit tests for both the backend and frontend to ensure reliability and maintainability.

2. **Extended Grammar Support**:
   - Expand the grammar to support additional operators, such as:
      - Exponentiation (`^`)
      - Modulus (`%`)
   - Include functions like `sin()`, `cos()`, and `sqrt()` for advanced calculations.

3. **Enhanced Frontend UI**:
   - Improve the user interface with better styling and responsiveness.
   - Add tooltips or help sections to guide users in entering valid expressions.

4. **Error Feedback**:
   - Provide more descriptive error messages for invalid expressions, including pinpointing the source of the error.

5. **Result History**:
   - Implement a feature to display a history of evaluated expressions and their results.

6. **Deployment**:
   - Host the application on a cloud platform (e.g., AWS, Heroku, or Vercel) for public access.
   - Ensure CI/CD pipelines are set up for seamless deployments.

7. **Performance Optimisations**:
   - Optimise the parsing and evaluation logic for handling complex expressions efficiently.

---

### **Instructions for Use**
- Copy and paste this content into a file named `README.md` in the root of your repository.
- Update placeholders like `https://github.com/IanWei/math-parse` and `[MIT License](LICENSE)` with your project details as applicable.

This format is GitHub-friendly, supporting Markdown rendering for headings, code blocks, and tables.
