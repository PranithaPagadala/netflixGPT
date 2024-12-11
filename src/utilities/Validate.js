export const checkValidData = (email, password) => {
    // const isFullNameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/.test(fullName);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email
    );
    const isPasswordValid =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );
    // if (!isFullNameValid) return "Invalid FullName";
    if (!isEmailValid) return "Invalid Email Address";
    if (!isPasswordValid) return "Invalid Password";
    return null;
  };
  