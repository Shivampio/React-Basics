import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
// import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ParentComponent from "./components/ParentComponent";
import StylesSheet from "./components/StylesSheet";
import Form from "./components/Form";
import EventBind from "./components/EventBind";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FRparent from "./components/FRparent";
import PortalDemo from "./components/PortalDemo";
import ClickCounter from "./components/ClickCounter";
import HoveredCounter from "./components/HoveredCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoveredCounterTwo from "./components/HoveredCounterTwo";
import User from "./components/User";
// import CounterTwo from "./components/CounterTwo";
import HookCounter from "./components/React-State-Hooks/HookCounter";
import HookCounterTwo from "./components/React-State-Hooks/HookCounterTwo";
import HookCounterThree from "./components/React-State-Hooks/HookCounterThree";
import HookCounterFour from "./components/React-State-Hooks/HookCounterFour";
import HookCounterOne from "./components/React-Effect-Hooks/HookCounterOne";
import HookMouse from "./components/React-Effect-Hooks/HookMouse";
import MouseContainer from "./components/React-Effect-Hooks/MouseContainer";
import IntervalHookCounter from "./components/React-Effect-Hooks/IntervalHookCounter";
import DataFetching from "./components/React-Effect-Hooks/DataFetching";
// import CounterOne from "./components/React-Reducer-Hooks/CounterOne";
// import CounterTwo from "./components/React-Reducer-Hooks/CounterTwo";
import Counter from "./components/React-Memo-Hooks/Counter";
import DataFetchingOne from "./components/React-Reducer-Hooks/DataFetchingOne";
import DataFetchingTwo from "./components/React-Reducer-Hooks/DataFetchingTwo";
import FocusInput from "./components/React-Ref-Hooks/FocusInput";
import DocCounterOne from "./components/React-Custom-Hooks/DocCounterOne";
import DocCounterTwo from "./components/React-Custom-Hooks/DocCounterTwo";
import CounterOne from "./components/React-Custom-Hooks/CounterOne";
import CounterTwo from "./components/React-Custom-Hooks/CounterTwo";
import UserForm from "./components/React-Custom-Hooks/UserForm";

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
    {/* <HookCounterTwo/> */}
    {/* <HookCounterThree/> */}
    {/* <HookCounterFour/> */}
    {/* <HookCounterOne/> */}
    {/* <HookMouse/> */}
    {/* <MouseContainer/> */}
    {/* <IntervalHookCounter/> */}
    {/* <DataFetching/> */}
    {/* <CounterOne/> */}
    {/* <CounterTwo/> */}
    {/* <DataFetchingOne/> */}
    {/* <DataFetchingTwo/> */}
    {/* <Counter/> */}
    {/* <FocusInput/> */}
    {/* <DocCounterOne/> */}
    {/* <DocCounterTwo/> */}

    {/* <CounterOne/>
    <CounterTwo/> */}

    <UserForm/>

      {/* <CounterTwo>
        {(incrementCount, count) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo>
      <CounterTwo>
        {(incrementCount, count) => (
          <HoveredCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo> */}
      {/* <ClickCounterTwo/>
      <HoveredCounterTwo/>
      <User render={(isLoggedIn)=>isLoggedIn ?'Shivam' : 'Guest'}/> */}
      {/* <ClickCounter name='Shivam'/>
      <HoveredCounter/> */}
      {/* <PortalDemo/> */}
      {/* <FRparent/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <FragmentDemo/> */}
      {/* <LifeCycleA/> */}
      {/* <Form/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <EventBind/> */}
      {/* <StylesSheet primary={true} />
      <ParentComponent /> */}
      {/* <FunctionClick/> */}
      {/* <Counter /> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman" >This is children</Greet>
      <Greet name="Clark" heroName="Superman"><button>Action</button></Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Wonder Woman"/> */}
    </div>
  );
}

export default App;
