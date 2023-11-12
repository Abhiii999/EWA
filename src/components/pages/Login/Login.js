import React, { useState } from 'react';
import './LoginModal.css'; // Import your CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/authActions';
import Register from '../Login/Register';
import Button from "../../organisms/Button";


const Login = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('customer');
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const { users } = useSelector((state) => state.userReducer);

  const handleLogin = () => {
    // Implement your login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
    const user = users?.find((u) => u.name === username && u.password === password && u.type === selectedOption);
    if (!user) {
      alert('Invalid username or password');
      return;
    }
    dispatch(login(user.id));
    
    onClose(); // Close the modal after login attempt (you may want to handle this differently in a real application)
  };

  const handleOpenRegister = () => {
    setRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setRegisterModalOpen(false);
  };

  const handleRegisterNavigation = () => {
    handleOpenRegister();
  };

  const handleCloseModal = () => {
    handleCloseRegister();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <label htmlFor="type">Type:</label>
          <select id="type" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="customer">Customer</option>
            <option value="storemanager">Store Manager</option>
            <option value="salesmanager">Sales Manager</option>
          </select>
          
          <button type="button" onClick={handleLogin}>Login</button>
          <Button
          buttonName="Register"
          onClick={handleRegisterNavigation}
          
        />
          <Register isOpen={isRegisterModalOpen} onClose={handleCloseModal} />
        </form>
      </div>
    </div>
  );
};

export default Login;
