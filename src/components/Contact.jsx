import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const submit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      await axios.post("http://localhost:5000/contact", form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      alert("Error sending message");
    }
  };

  return (
    <section className="py-10 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form
        onSubmit={submit}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        {/* Name */}
        <div className="text-left">
          <input
            value={form.name}
            placeholder="Name"
            className="p-3 rounded text-black w-full"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="text-left">
          <input
            value={form.email}
            placeholder="Email"
            className="p-3 rounded text-black w-full"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="text-left">
          <textarea
            value={form.message}
            placeholder="Message"
            rows="4"
            className="p-3 rounded text-black w-full"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        <button className="bg-green-500 p-3 rounded hover:bg-green-600">
          Send Message
        </button>
      </form>
    </section>
  );
}