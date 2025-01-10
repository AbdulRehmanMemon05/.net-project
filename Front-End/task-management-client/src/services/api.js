const API_URL = 'YOUR_API_URL'; // Replace with your actual API URL

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || getLoginErrorMessage(response.status));
    }
    
    return data;
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};

// Add this helper function for login error messages
function getLoginErrorMessage(status) {
  switch (status) {
    case 401:
      return 'Invalid email or password';
    case 404:
      return 'Account not found';
    case 429:
      return 'Too many login attempts. Please try again later';
    default:
      return 'Login failed. Please try again';
  }
}

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || getRegistrationErrorMessage(response.status));
    }
    
    return data;
  } catch (error) {
    throw new Error(error.message || 'Registration failed');
  }
};

// Add this helper function for registration error messages
function getRegistrationErrorMessage(status) {
  switch (status) {
    case 409:
      return 'Email already registered';
    case 400:
      return 'Invalid registration data';
    case 422:
      return 'Password must be at least 6 characters long';
    default:
      return 'Registration failed. Please try again';
  }
}

