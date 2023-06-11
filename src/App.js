import AppRouter from "./router/AppRouter";
import DataProvider from "./context/DataProvider";
function App() {
  //! Provider ile tüm uygulamayı sarmaladık
  return (
    <DataProvider> 
      <div className="app">
        <AppRouter />
      </div>
    </DataProvider>
  );
}

export default App;
