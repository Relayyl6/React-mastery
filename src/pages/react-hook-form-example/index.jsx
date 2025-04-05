import { useForm } from 'react-hook-form';

function ReactHookFormExamplePage() {

    const {
        register, 
        handleSubmit, 
        formState : {errors}
    } = useForm()

    const onSubmitForm = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label>Email</label>
                    <input {...register('email')}
                           name="email"
                           type="email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input {...register('password')}
                           name="password"
                           type="password"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReactHookFormExamplePage