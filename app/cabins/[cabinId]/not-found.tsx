import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h2 className="text-3xl font-semibold">Not Found</h2>
      <p className="text-base">This cabin could not be found</p>
      <Link href="/cabins" className="inline-block bg-accent-500 hover:bg-accent-600 text-primary-800 px-6 py-3 text-lg">Back to all cabins</Link>
    </main>
  )
}