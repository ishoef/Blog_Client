import React from "react";

export default function PaymentPage() {
  const transactions = [
    {
      id: 1,
      date: "12 Mar 2026",
      method: "Stripe",
      amount: "$49",
      status: "Paid",
    },
    {
      id: 2,
      date: "05 Mar 2026",
      method: "Visa Card",
      amount: "$29",
      status: "Paid",
    },
    {
      id: 3,
      date: "20 Feb 2026",
      method: "Stripe",
      amount: "$99",
      status: "Pending",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Payments</h1>
        <p className="text-gray-500">
          Manage your payments and billing history
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-gray-500 text-sm">Total Paid</p>
          <h2 className="text-2xl font-bold mt-2">$178</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-gray-500 text-sm">Pending</p>
          <h2 className="text-2xl font-bold mt-2">$99</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <p className="text-gray-500 text-sm">Next Billing</p>
          <h2 className="text-2xl font-bold mt-2">25 Mar 2026</h2>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

        <div className="flex items-center justify-between border rounded-lg p-4">
          <div>
            <p className="font-medium">Visa Card</p>
            <p className="text-gray-500 text-sm">**** **** **** 4242</p>
          </div>

          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            Change
          </button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-3">Date</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b">
                  <td className="py-3">{t.date}</td>
                  <td>{t.method}</td>
                  <td>{t.amount}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        t.status === "Paid"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
