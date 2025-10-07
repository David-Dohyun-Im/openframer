export default function Login03() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-slate-700 bg-slate-900/50 backdrop-blur-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
              <span className="text-2xl font-bold text-white">O</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Sign In</h2>
            <p className="mt-2 text-sm text-slate-400">Enter your credentials to access your account</p>
          </div>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="block w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="block w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              Sign in
            </button>
          </form>
          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              Forgot your password?
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-700"></div>
            <span className="text-xs text-slate-400">OR</span>
            <div className="h-px flex-1 bg-slate-700"></div>
          </div>
          <div className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

