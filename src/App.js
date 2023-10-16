import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "../src/components/Expenses/Expenses";
import NewExpanse from "../src/components/NewExpenses/NewExpense";
import UpdateExpense from "./components/UpdateExpense/UpdateExpense";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Expenses />} />
        <Route path="add" element={<NewExpanse />} />
        <Route path="edit/:id" element={<UpdateExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
