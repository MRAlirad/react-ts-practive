import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data:FieldValues)=> console.log(data);

    return (
        <form onSubmit={handleSubmit(data => onSubmit(data))}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" {...register('name')} />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" id="age" className="form-control" {...register('age')} />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form