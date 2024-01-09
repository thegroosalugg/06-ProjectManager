import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="h-screen my-2 md:my-8 flex gap-2 md:gap-8">
    {/* <main className="h-screen my-2 md:my-8 flex flex-col md:flex-row gap-8"> */}
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;
