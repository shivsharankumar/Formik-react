import React from 'react';
import './App.css';
import { Formik, Field, Form } from 'formik';

function App() {
  return (
    <div className="flex flex-row items-center mt-2 justify-center">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          country: 'India',
          streetAddress: '',
          city: '',
          state: '',
          postalCode: '',
          comments: false,
          candidates: false,
          offers: false,
          pushNotifications: '',
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="flex flex-col items-center">
          <label htmlFor="firstName" className="text-gray-700 font-bold mb-2">
            First Name:
          </label>
          <Field
            name="firstName"
            type="text"
            id="firstName"
            placeholder="Enter First Name:"
            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
          />
          <label htmlFor="firstName" className="text-gray-700 font-bold mb-2">
            Last Name:
          </label>
          <Field
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Enter Last Name:"
            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
          />
          <label htmlFor="email" className="text-gray-700 font-bold mb-2">
            Email:
          </label>
          <Field
            name="email"
            type="email"
            id="email"
            placeholder="Enter Your Email:"
            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
          />
          <label htmlFor="country" className="text-gray-700 font-bold mb-2">
            Country:
          </label>
          <Field
            as="select"
            name="country"
            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
          >
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
          </Field>
          <label
            htmlFor="streetAddress"
            className="text-gray-700 font-bold mb-2"
          >
            Street Address:
          </label>
          <Field
            name="streetAddress"
            type="text"
            id="streetAddress"
            placeholder="Enter Your street Address:"
            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
          />
          <label htmlFor="postalCode" className="text-gray-700 font-bold mb-2">
            Postal Code:
          </label>
          <Field
            name="postalCode"
            type="text"
            id="postalCode"
            placeholder="Enter Your postalCode:"
            className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
