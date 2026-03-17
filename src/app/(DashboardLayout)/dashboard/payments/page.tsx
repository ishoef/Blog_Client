// "use client";

// import { useState, useMemo } from "react";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { toast } from "sonner";

// export default function PaymentPage() {
//   const [filter, setFilter] = useState("all");
//   const [cardNumber, setCardNumber] = useState("**** **** **** 4242");

//   const transactions = [
//     {
//       id: 1,
//       date: "12 Mar 2026",
//       method: "Stripe",
//       amount: 49,
//       status: "Paid",
//     },
//     {
//       id: 2,
//       date: "05 Mar 2026",
//       method: "Visa Card",
//       amount: 29,
//       status: "Paid",
//     },
//     {
//       id: 3,
//       date: "20 Feb 2026",
//       method: "Stripe",
//       amount: 99,
//       status: "Pending",
//     },
//   ];

//   // filter transactions
//   const filteredTransactions = useMemo(() => {
//     if (filter === "all") return transactions;
//     return transactions.filter((t) => t.status === filter);
//   }, [filter]);

//   // totals
//   const totalPaid = transactions
//     .filter((t) => t.status === "Paid")
//     .reduce((sum, t) => sum + t.amount, 0);

//   const totalPending = transactions
//     .filter((t) => t.status === "Pending")
//     .reduce((sum, t) => sum + t.amount, 0);

//   const handleChangeCard = () => {
//     toast("Payment method updated", {
//       description: "Your card has been updated successfully.",
//     });
//   };

//   const downloadInvoice = (id: any) => {
//     toast("Downloading invoice", {
//       description: `Invoice #${id} is being downloaded.`,
//     });
//   };

//   return (
//     <div className="space-y-8 p-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-semibold">Payments</h1>
//           <p className="text-muted-foreground">
//             Manage your billing and transaction history
//           </p>
//         </div>

//         <div className="flex gap-2">
//           <Button variant="outline" onClick={() => setFilter("all")}>
//             All
//           </Button>
//           <Button variant="outline" onClick={() => setFilter("Paid")}>
//             Paid
//           </Button>
//           <Button variant="outline" onClick={() => setFilter("Pending")}>
//             Pending
//           </Button>
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="grid gap-6 md:grid-cols-3">
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-muted-foreground">
//               Total Paid
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-3xl font-bold">${totalPaid}</p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-muted-foreground">
//               Pending
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-3xl font-bold">${totalPending}</p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-muted-foreground">
//               Next Billing
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-3xl font-bold">25 Mar 2026</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Payment Method */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Payment Method</CardTitle>
//         </CardHeader>

//         <CardContent className="flex items-center justify-between">
//           <div>
//             <p className="font-medium">Visa Card</p>
//             <p className="text-sm text-muted-foreground">{cardNumber}</p>
//           </div>

//           <Dialog>
//             <DialogTrigger asChild>
//               <Button variant="outline">Change</Button>
//             </DialogTrigger>

//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Update Card</DialogTitle>
//               </DialogHeader>

//               <div className="space-y-4">
//                 <Input
//                   placeholder="Card number"
//                   onChange={(e) => setCardNumber(e.target.value)}
//                 />

//                 <Button className="w-full" onClick={handleChangeCard}>
//                   Save Card
//                 </Button>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </CardContent>
//       </Card>

//       {/* Transactions */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Transaction History</CardTitle>
//         </CardHeader>

//         <CardContent>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="border-b">
//                 <tr className="text-muted-foreground">
//                   <th className="py-3 text-left">Date</th>
//                   <th className="text-left">Method</th>
//                   <th className="text-left">Amount</th>
//                   <th className="text-left">Status</th>
//                   <th className="text-left">Invoice</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredTransactions.map((t) => (
//                   <tr key={t.id} className="border-b">
//                     <td className="py-3">{t.date}</td>

//                     <td className="font-medium">{t.method}</td>

//                     <td>${t.amount}</td>

//                     <td>
//                       <Badge
//                         variant={t.status === "Paid" ? "default" : "secondary"}
//                       >
//                         {t.status}
//                       </Badge>
//                     </td>

//                     <td>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => downloadInvoice(t.id)}
//                       >
//                         Download
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


import React from 'react'

export default function PaymentPage() {
  return (
    <div>PaymentPage</div>
  )
}
