import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import LogTable from "../components/LogTable";
import Pagination from "../components/Pagination";

function LogViewer() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Header />
        <FilterBar />
        <LogTable />
        <Pagination />
      </div>
    </div>
  );
}
export default LogViewer;

