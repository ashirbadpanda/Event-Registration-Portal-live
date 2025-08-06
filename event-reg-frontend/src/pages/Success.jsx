// src/pages/Success.jsx

function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Registration Successful!</h2>
        <p className="text-gray-700 mb-6">Thank you for registering. We look forward to seeing you at the event.</p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Back to Events
        </a>
      </div>
    </div>
  );
}

export default Success;
