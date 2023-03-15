function App() {
  const arr = ["samir","saif","saifudding","saif","ahsan"],
  result = arr.map((item,idx)=>{
    return <li key={idx}>{idx}{item}</li>
  })
  return (
    <ul>{result}</ul>
  );
}

export default App;
