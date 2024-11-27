import ReactJson from "react-json-view";

const AstViewer = ({ ast }) => {
  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h2>Abstract Syntax Tree</h2>
      <ReactJson
        src={ast}
        theme="monokai"
        collapsed={false}
        displayDataTypes={false}
        displayObjectSize={false}
        enableClipboard={true}
        indentWidth={2}
      />
    </div>
  );
};

export default AstViewer;
