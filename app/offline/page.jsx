export default function OfflinePage() {
  return (
    <div className="h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">You are offline</h1>
        <p className="opacity-70">
          This feature is not available without internet.
        </p>
      </div>
    </div>
  );
}
