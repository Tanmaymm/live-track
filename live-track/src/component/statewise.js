import {React,useState,useEffect} from 'react'
import './statewise.css';

function print(x){
  console.log(x)
}


const Statewise  = () => {

  const [CovidData, setCovidData] = useState([]);

  let get_covid_data =  async ()=>{
        const res =  await fetch("https://api.rootnet.in/covid19-in/stats/latest");
        const x  = await(res.json());
        setCovidData(x['data']['regional'])
        print(x['data']['regional'])
  }



  useEffect(  () => {
    get_covid_data();
  }, [])
  

  return (
    <>
    <h1> India COVID_update</h1>
    <table >
      <thead>
        <tr>
    <th>loc</th>
    <th>confirmedCasesIndian</th>
    <th>confirmedCasesForeign</th>
    <th>discharged</th>
    <th>deaths</th>
    <th>totalConfirmed</th>
        </tr>
      </thead>
      <tbody>
    {
      CovidData.map((e)=> TableElement(e) )
    }</tbody>
    </table>
    
    </>
  ) 
}

export default Statewise 


function TableElement(e) {
  return (
<>
    <tr>
       <td>{e['loc']} </td>
      <td>{e['confirmedCasesIndian']} </td>
      <td>{e['confirmedCasesForeign']} </td>
      <td>{e['discharged']} </td>
      <td>{e['deaths']} </td>
      <td>{e['totalConfirmed']}</td>
    </tr>
    </>
  )
}

