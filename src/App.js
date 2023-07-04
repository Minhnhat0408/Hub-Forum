import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter
        from={100}
        to={300}
        duration={2}
        className="text-red-400 font-bold"
      />
    </div>
  );
}

export default App;
