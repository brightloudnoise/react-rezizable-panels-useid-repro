import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";


function App() {
  return (
    <div className="App">
      <PanelGroup direction="horizontal">
        <Panel>
          <div>Panel 1</div>
        </Panel>
        <PanelResizeHandle />
        <Panel>
          <div>Panel 2</div>
        </Panel>
      </PanelGroup>
     
    </div>
  );
}

export default App;
