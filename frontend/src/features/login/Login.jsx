import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();
  const loading = false;

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setError("");
  //     setLoading(true);

  //     try {
  //       // TODO: Replace with your actual API call
  //       const response = await fetch("/api/auth/login", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ email, password }),
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         // Store user data and token
  //         localStorage.setItem("token", data.token);
  //         localStorage.setItem("user", JSON.stringify(data.user));
  //         navigate("/");
  //       } else {
  //         setError("Invalid email or password");
  //       }
  //     } catch (error) {
  //       setError("Something went wrong. Please try again.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-(--theme-color)"
    >
      <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-2xl">
        <h2
          className="text-3xl font-bold mb-6 text-center tracking-tight text-(--theme-color)"
        >
          Sign In to PlayTube
        </h2>

        {/* {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )} */}

        <form onSubmit={() => {}} className="space-y-4">
          <div>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full bg-white text-black border border-gray-300 focus:border-gray-400 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-full bg-white text-black border border-gray-300 focus:border-gray-400 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center justify-between text-sm pt-2">
            <label className="flex items-center text-gray-700 cursor-pointer">
              <input type="checkbox" className="mr-2 cursor-pointer" />
              Remember me
            </label>
            <a
              href="#"
              className="hover:underline transition text-(--theme-color)"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-white rounded-full font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 bg-(--theme-color)"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-semibold hover:underline transition text-(--theme-color)"
          >
            Sign Up
          </a>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-4">
            <button className="w-full flex items-center justify-center px-4 py-3 bg-white text-gray-700 rounded-full hover:bg-gray-50 border border-gray-300 transition">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
