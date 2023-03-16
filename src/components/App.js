import "../assets/Style.css"
import styles from  "../assets/Style.module.css"
import styled from 'styled-components';
function App() {
  const arr = ["samir","saif","saifudding","saif","ahsan"],
  background = {
    background: "#000"
  },
  result = arr.map((item,idx)=>{
    return <li key={idx}  className ={`${styles.test} ${styles.test2}`}>{idx}{item}</li>
  }),
  MyComponentsWrapper = styled.div`
  max-width: 1366px;
  width:80%;
  margin: 0 auto
  `
  return (
    <>
    <MyComponentsWrapper>
    <h2 className="heading" style = {background}>hello and welcome in react practice</h2>
    <ul>{result}</ul>
    </MyComponentsWrapper>
    </>
  
  );
}

export default App;
