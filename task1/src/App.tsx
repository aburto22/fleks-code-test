import People from "./components/People";

function App() {
  return (
    <div className="text-fleks-dark">
      <header>
        <h1 className="py-6 text-3xl font-bold text-center text-white bg-fleks-dark">
          Birthdays
        </h1>
      </header>
      <People />
    </div>
  );
}

export default App;
