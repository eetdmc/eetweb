"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { memo } from "react";
import { MdExpandCircleDown } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useState } from "react";
import { useRefetchDestinations } from "@/app/contexts/refetchDestinations";
import { useRefetchServices } from "@/app/contexts/refetchServices";


interface ClientSideLinkProps {
  href: string;
  name: string;
  icon: React.ReactNode;
  className?: string;
  children?: { href: string; name: string }[];
  isOpen?: boolean;
  setOpenLink?: (href: string | null) => void;
  hasChild?: boolean;
}

// Client component for handling active states
function ClientSideLink({
  href,
  name,
  icon,
  className,
  children,
  isOpen = false,
  setOpenLink,
  hasChild = false,
}: ClientSideLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === `${href}` || pathname?.startsWith(`${href}/`);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", {
        method: "POST",
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = "/admin/login";
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [title, setTitle] = useState("");

  const {setRefetchDestinations} = useRefetchDestinations();
  const {setRefetchServices} = useRefetchServices();

  const handleAddItem = async (name: string) => {
    try {
      const res = await fetch(`/api/admin/${name.toLowerCase()}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      const data = await res.json();
      alert(data.message);
      if(name === "Destinations"){
        setRefetchDestinations((prev)=>!prev);
      }
      if(name === "Services"){
        setRefetchServices((prev)=>!prev);
      }
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <Link
        href={href == "/admin/logout" ? "#" : href}
        onClick={() => {  // Prevent navigation on click
          setOpenLink?.(isOpen ? null : href);
          if (href === "/admin/logout") {
            handleLogout();
            return;
          }
        }}
        className={cn(
          "flex items-center px-4 py-2 text-[16px] font-medium rounded-md transition-colors justify-between",
          "hover:bg-gray-50 hover:text-primary",
          isActive ? "bg-gray-50 text-primary" : "text-gray-700",
          className
        )}
      >
        <div className="flex items-center">
          <span className="mr-3">{icon}</span>
          {name}
        </div>
        {hasChild && (!isOpen ? <MdExpandCircleDown className="ml-1 mt-1" /> : <MdExpandCircleDown className="ml-1 mt-1 rotate-180" />)}
      </Link>
      {isOpen && children && (
        <div className="flex pl-7 flex-col items-start gap-2">
          {children.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {((name === "Services" || name === "Destinations") && index === children.length-1) && (
                <Dialog>
                  <DialogTrigger className="bg-primary text-white px-2 py-1 rounded-md" onClick={() => { setTitle("") }}><IoIosAddCircle className="cursor-pointer" /></DialogTrigger>
                  <DialogContent className="overflow-auto bg-white">
                    <DialogHeader>

                      <DialogTitle>Add Item</DialogTitle>
                      <div className="flex flex-col gap-4">

                        <div>
                          <Label>Title</Label>
                          <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>

                      </div>
                    </DialogHeader>
                    <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleAddItem(name)}>Save</DialogClose>
                  </DialogContent>

                </Dialog>
              )}
              <div className="flex items-center gap-2 pl-2">
                <div>-</div>
                <Link
                  href={item.href}
                  className="w-full rounded-md cursor-pointer hover:bg-gray-50 hover:text-primary text-[16px] font-medium"
                >
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}


export default memo(ClientSideLink)