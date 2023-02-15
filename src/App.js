import React, {useState, useEffect} from 'react';
import './App.css';
import Textbox from './components/Textbox/Textbox';
import SelectField from './components/Select/Select';

function App() {
  const [monthlySalary, setMonthlySalary] = useState(0);
  const [yearlySalary, setYearlySalary] = useState(monthlySalary*12);
  const [mutualFundSIP, setMutualFundSIP] = useState(0);
  const [savings, setSavings] = useState(0);
  const [percentSIP, setPercentSIP] = useState(0);
  const [percentSave, setPercentSave] = useState(0);
  const [percentLiablities, setPercentLiablities] = useState(0);
  const [MFReturns, setMFReturns] = useState(0);
  const [annualMF, setAnnualMF] = useState(0);
  const [liabilities, setLiabilities] = useState(0);
  const [balance, setBalance] = useState(0);
  useEffect(()=>{
    setYearlySalary(monthlySalary*12);
    setMutualFundSIP(monthlySalary*(percentSIP/100));
    setSavings(monthlySalary*(percentSave/100));
    setAnnualMF(mutualFundSIP*12*(1 + (MFReturns/100)));
    setLiabilities(monthlySalary*(percentLiablities/100));
  },[monthlySalary, percentSIP, percentSave, MFReturns, annualMF, percentLiablities, liabilities, savings]);

  useEffect(()=>{
    setBalance(monthlySalary-mutualFundSIP-savings-liabilities);
  },[monthlySalary, mutualFundSIP, savings, liabilities]);

  return (
    <div className="App">
      <div>
        <SelectField limit={20} getValue={setPercentSIP} label={'SIP% from salary'}/>
        <SelectField limit={20} getValue={setPercentSave} label={'Save% from salary'}/>
        <SelectField limit={20} getValue={setMFReturns} label={'annual returns% from MF'}/>
        <SelectField limit={60} getValue={setPercentLiablities} label={'monthly liabilities'}/>
      </div>
      <div style={{'margin':'25px'}}>
        <Textbox text={monthlySalary} setText={setMonthlySalary} label={'salary/month'}/>
        <Textbox text={yearlySalary} disabled={true} label={'yearly salary'}/>
        <Textbox text={mutualFundSIP} label={'mutual fund SIP'} disabled={true}/>
        <Textbox text={savings} label={'strict savings/month'} disabled={true}/>
        <Textbox text={annualMF} label={'yearly MF'} disabled={true}/>
        <Textbox text={liabilities} label={'liabilities'} disabled={true}/>
        <Textbox text={balance} label={'monthly balance'} disabled={true}/>
      </div>
    </div>
  );
}

export default App;
