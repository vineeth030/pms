import React from 'react';

const Login = () => {
    return (
        <div class="flex items-center justify-center h-screen bg-gray-100">
            <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
                    
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="input input-bordered w-full" type="email" id="email" placeholder="you@example.com" required />
                    </div>
                    
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="input input-bordered w-full" type="password" id="password" placeholder="********" required />
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <button class="btn btn-primary w-full" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
                
                <p class="text-center text-gray-600 text-xs">
                    &copy;2024 Your Company. All rights reserved.
                </p>
            </div>
        </div>  
    );
}

export default Login;