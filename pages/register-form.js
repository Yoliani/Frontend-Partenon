import {useState} from 'react';
import {signupFields} from '../formTypes/formFields';
import Input from '../components/Input';
import Layout from '@/components/Layout';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => (fieldsState[field.id] = ''));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = e =>
    setSignupState({...signupState, [e.target.id]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {};

  return (
    <Layout>
      <form
        className="mt-8 space-y-6 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col justify-center items-center ">
          {fields.map(field => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
              customClass={field.customClass}
            />
          ))}
        </div>
      </form>
    </Layout>
  );
}
