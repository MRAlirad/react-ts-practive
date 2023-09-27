import { optional } from "zod";
import categories from "../categories";

interface Props {
    onSelectCategory : (category: string)=> void;
}

const ExpenseFilter = ({onSelectCategory}: Props)=> {
    return(
        <select className="form-select mb-3" onChange={(event)=>onSelectCategory(event.target.value)}>
            <option value="">all categories</option>
            {categories.map(category => <option value={category} key={category}>{category}</option>)}
        </select>
    );
}

export default ExpenseFilter