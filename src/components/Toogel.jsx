import React, { useState } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  /* Style the wrapper element */
`;

const InputField = styled.input`
  /* Style the input element */
`;

const ToggleButton = styled.button`
  /* Style the toggle button */
`;

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputWrapper>
      <InputField type={showPassword ? 'text' : 'password'} />
      <ToggleButton onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide' : 'Show'} Password
      </ToggleButton>
    </InputWrapper>
  );
};

export default PasswordInput;