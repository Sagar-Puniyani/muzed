// pages/auth/signin.tsx

import { getProviders, signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';

interface Provider {
    id: string;         // Unique identifier for the provider (e.g., 'google', 'github')
    name: string;       // Display name of the provider (e.g., 'Google', 'GitHub')
    type: string;       // Type of provider (usually 'oauth')
    signinUrl: string;  // URL to initiate the sign-in
    callbackUrl: string; // URL where the provider will redirect after authentication
  }
  
  type Providers = Record<string, Provider>;
  
const SignIn = ({ providers }: { providers: Providers }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="p-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Sign in</h1>
        {Object.values(providers).map((provider) => (
          <div key={provider.id} className="mb-4">
            <button
              onClick={() => signIn(provider.id)}
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Fetch the available authentication providers
export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default SignIn;
