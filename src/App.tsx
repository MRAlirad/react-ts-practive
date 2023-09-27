import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App()
{
	const [selectedCategory, setSelectedCategory] = useState('');
	const [expenses, setExpences] = useState([
		{id: 1, description: 'dsfds', amount: 525, category: 'Utilities'},
		{id: 2, description: 'dfgfdg', amount: 5410, category: 'Utilities'},
		{id: 3, description: 'dfdgfdgfdsfds', amount: 452, category: 'Utilities'},
		{id: 4, description: 'dsdfgfdgfdfds', amount: 10453, category: 'Utilities'},
		{id: 5, description: 'fdgfdg', amount: 8710, category: 'Utilities'},
		{id: 6, description: 'dsffdgfdgds', amount: 1350, category: 'Utilities'},
	]);
	const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;
	return(
		<div>
			<ExpenseForm onSubmit={(expense) => setExpences([...expenses, {...expense, id: Date.now()}])} />
			<ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
			<ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpences(expenses.filter(e => e.id !== id))} />
		</div>
	)
}

export default App;
