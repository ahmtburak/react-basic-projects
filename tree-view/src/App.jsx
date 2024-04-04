import "./App.css";
import TreeView from "./components/TreeView";
import menus from "./data";
function App() {
  return (
    <div className="tree-view">
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
