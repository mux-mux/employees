import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';

import './app.css';

function App() {
  return (
    <div className="app">
      <AppInfo></AppInfo>
      <div className="search-panel">
        <SearchPanel></SearchPanel>
        <AppFilter></AppFilter>
      </div>

      <EmployeesList></EmployeesList>
    </div>
  );
}

export default App;
