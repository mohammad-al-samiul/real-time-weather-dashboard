import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import BodyImage from "./assets/body-bg.png";
function App() {
  return (
    <div
      className={`bg-body font-[Roboto] text-light bg-[url(${BodyImage})] bg-no-repeat bg-cover h-screen grid place-items-center`}
    >
      <MainLayout />
    </div>
  );
}

export default App;
