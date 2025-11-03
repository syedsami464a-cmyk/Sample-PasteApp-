import Panel from './components/Panel';

function App() {
  return (
    <>

    <h1>Samisyed</h1>

    <Panel title="About" >  {/* isActive={true}  -> one more parameter*/}
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, obcaecati.</p>
    </Panel>


    <Panel title="Content" >  {/* isActive={true} -> one more parameter*/}
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quod non excepturi, eveniet soluta corrupti ab repellat tempore! Tempore minima aliquam accusamus nam culpa at?</p>
    </Panel>
    </>
  );
}

export default App;
