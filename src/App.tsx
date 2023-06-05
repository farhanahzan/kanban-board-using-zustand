import Column from "./components/Column"

function App() {

  return (
    <div className="flex flex-col sm:flex-row justify-around">
     <Column state="PLANNED"/>
     <Column state="ONGOING"/>
     <Column state="DONE"/>
    </div>
  )
}

export default App
