import { useNavigate } from "react-router-dom";
import { Button } from '../components/Button'

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col">
      <div className="h-100" />

      <div className="px-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Welcome to PopX
        </h1>

        <p className="text-gray-600 text-sm mb-1">
          Lorem ipsum dolor sit amet,
        </p>
        <p className="text-gray-600 text-sm mb-8">
          Ut enim ad minim veniam,
        </p>

        <div className="space-y-4">
          <Button
            text="Create Account"
            variant="primary"
            onClick={() => navigate("/signup")}
          />

          <Button
            text="Already Registered? Login"
            variant="secondary"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>

    </div>
  );
}

