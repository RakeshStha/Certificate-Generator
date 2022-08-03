import "./App.css";
import { CreateCertificate, ViewCertificate } from "./components/pages";

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center m-4">
      <div className="col-4">
        <CreateCertificate />
      </div>
      <div className="col-6">
        <ViewCertificate />
      </div>
    </div>
  );
}

export default App;
