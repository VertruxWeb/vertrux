import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-4">404</p>
      <h1 className="text-5xl font-extrabold text-on-background tracking-tighter mb-4">Page Not Found</h1>
      <p className="text-sm text-on-surface-variant mb-8">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
