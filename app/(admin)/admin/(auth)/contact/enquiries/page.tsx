"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface Enquiry {
  _id: string;
  name: string;
  phone: string;
  email: string;
  enquireAbout: string;
  message: string;
  createdAt: string;
}

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openRow, setOpenRow] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch("/api/admin/enquiry", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) return;

        const json = await res.json();
        setEnquiries(json.data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="p-6 space-y-6 bg-white rounded-lg">
      <h1 className="text-2xl font-semibold">Contact Enquiries</h1>
      <hr />

      {loading ? (
        <p className="text-sm">Loading enquiries...</p>
      ) : enquiries.length === 0 ? (
        <p className="text-sm">No enquiries found.</p>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 md:grid-cols-5 bg-gray-100 p-3 text-md font-medium">
            <p>Name</p>
            <p>Email</p>
            <p className="hidden md:block">Phone</p>
            <p className="hidden md:block">Type</p>
            <p>Full View</p>
          </div>

          {/* Table Rows */}
          {enquiries.map((item) => {
            const isOpen = openRow === item._id;

            return (
              <div key={item._id} className="border-t">
                {/* Row */}
                <div className="grid grid-cols-3 md:grid-cols-5 p-3 items-center text-md">
                  <p>{item.name}</p>
                  <p className="truncate">{item.email}</p>
                  <p className="hidden md:block">{item.phone}</p>
                  <p className="hidden md:block">{item.enquireAbout}</p>

                  {/* Eye Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setOpenRow(isOpen ? null : item._id)}
                    className="flex items-center justify-center hover:bg-primary cursor-pointer"
                  >
                    {isOpen ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </Button>
                </div>

                {/* Expanded Section */}
                {isOpen && (
                  <div className="bg-gray-50 p-4 space-y-4 text-md">
                    <div>
                      <Label>Name</Label>
                      <Input value={item.name} readOnly />
                    </div>

                    <div>
                      <Label>Email</Label>
                      <Input value={item.email} readOnly />
                    </div>

                    <div>
                      <Label>Phone</Label>
                      <Input value={item.phone} readOnly />
                    </div>

                    <div>
                      <Label>Enquiry Type</Label>
                      <Input value={item.enquireAbout} readOnly />
                    </div>

                    <div>
                      <Label>Message</Label>
                      <Textarea
                        value={item.message}
                        readOnly
                        className="min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label>Submitted At</Label>
                      <Input
                        value={new Date(item.createdAt).toLocaleString()}
                        readOnly
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
