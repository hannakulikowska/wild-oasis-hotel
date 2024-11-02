"use client"

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {
  return (
    <main className='flex justify-center items-center flex-col gap-6'>
      <h2 className='text-3xl font-semibold'>Something went wrong!</h2>
      <p className='text-lg'>Error: {error.message}</p>

      <button className='inline-block bg-accent-500 hover:bg-accent-600 text-primary-800 px-6 py-3 text-lg' onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}