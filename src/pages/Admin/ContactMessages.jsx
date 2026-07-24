
import { useEffect, useState } from "react";
import {
  getAllContacts,
  deleteContact,
} from "../../services/contactService";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const data = await getAllContacts();
      setMessages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await deleteContact(id);
      fetchMessages();
    } catch (error) {
      console.error(error);
      alert("Unable to delete message");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#111827] p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-5xl font-bold text-white">
              Contact Messages
            </h1>

            <p className="text-gray-400 mt-2">
              Messages received from users
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-2xl px-8 py-5">
            <h2 className="text-gray-400">
              Total Messages
            </h2>

            <h1 className="text-5xl font-bold text-orange-500">
              {messages.length}
            </h1>
          </div>

        </div>

        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>
                <th className="px-6 py-4 text-left text-gray-300">
                  Name
                </th>

                <th className="px-6 py-4 text-left text-gray-300">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-gray-300">
                  Subject
                </th>

                <th className="px-6 py-4 text-left text-gray-300">
                  Message
                </th>

                <th className="px-6 py-4 text-center text-gray-300">
                  Action
                </th>
              </tr>

            </thead>

            <tbody>

              {messages.map((msg) => (

                <tr
                  key={msg._id}
                  className="border-t border-slate-700 hover:bg-slate-800"
                >

                  <td className="px-6 py-5 text-white">
                    {msg.name}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {msg.email}
                  </td>

                  <td className="px-6 py-5 text-gray-300">
                    {msg.subject}
                  </td>

                  <td className="px-6 py-5 text-gray-300 max-w-sm">
                    {msg.message}
                  </td>

                  <td className="px-6 py-5 text-center">

                    <button
                      onClick={() => handleDelete(msg._id)}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ContactMessages;