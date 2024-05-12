import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    ridingExperience: '',
    motorcycleDetails: { type: '', engineSize: '' }
  });

  const [addUser, { error }] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");

    if (!formState.username || !formState.email || !formState.password || !formState.firstName || !formState.lastName) {
      console.error('Please fill in all required fields.');
      return;  // Prevent submission if required fields are not filled
    }

    try {
      const mutationResponse = await addUser({
        variables: {
          ...formState,
          motorcycleDetails: {
            type: formState.motorcycleDetails.type,
            engineSize: formState.motorcycleDetails.engineSize ? parseInt(formState.motorcycleDetails.engineSize) : null
          }
        }
      });
      console.log("Mutation response:", mutationResponse);

      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      navigate('/profile');
    } catch (e) {
      console.error('Error during signup:', e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "motorcycleType" || name === "engineSize") {
      setFormState({
        ...formState,
        motorcycleDetails: {
          ...formState.motorcycleDetails,
          [name]: value
        }
      });
    } else {
      setFormState({
        ...formState,
        [name]: value
      });
    }
  };

  if (error) {
    console.error("Error from the server:", error);
  }

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Required fields */}
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="Your username"
            name="username"
            type="text"
            id="username"
            value={formState.username}
            onChange={handleChange}
            required  // Mark field as required
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="text"
            id="firstName"
            value={formState.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="text"
            id="lastName"
            value={formState.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* Optional fields */}
        <div className="flex-row space-between my-2">
          <label htmlFor="ridingExperience">Riding Experience:</label>
          <input
            placeholder="Years of Experience"
            name="ridingExperience"
            type="text"
            id="ridingExperience"
            value={formState.ridingExperience}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="motorcycleType">Motorcycle Type:</label>
          <input
            placeholder="Type of Motorcycle"
            name="motorcycleType"
            type="text"
            id="motorcycleType"
            value={formState.motorcycleDetails.type}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="engineSize">Engine Size:</label>
          <input
            placeholder="Engine Size in CC"
            name="engineSize"
            type="text"
            id="engineSize"
            value={formState.motorcycleDetails.engineSize}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
