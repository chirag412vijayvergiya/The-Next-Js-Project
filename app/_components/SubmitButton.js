"use client";
import { useFormStatus } from "react-dom";
function SubmitButton({ children, PendingLabel }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? PendingLabel : children}
    </button>
  );
}

export default SubmitButton;
