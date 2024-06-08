import { useState } from "react";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleCreateAccount = () => {
    alert(`Account created for ${email}`);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3x1 mb-4">Create Account</h1>
      <input
        type="text"
        value={email}
        placeholder="enter email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 border rounded"
      >
        Email
      </input>
      <input
        type="password"
        value={password}
        placeholder="enter password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-4 border rounded"
      >
        Password
      </input>
      <button
        type="button"
        onClick={handleCreateAccount}
        className="w-full bg-browm-500 text-white p-2 rounded"
      >
        Create Account
      </button>
    </div>
  );
};
export default CreateAccountPage;
