"use client";

import ClientSideLink from "@/app/(admin)/admin/client-side-link";
import React, { useState } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import {
  AwardIcon,
  GroupIcon,
  InfoIcon,
  PhoneIcon,
  Settings,
} from "lucide-react";
import { useEffect } from "react";

import { useRefetchDestinations } from "@/app/contexts/refetchDestinations";

const AdminNavbar = () => {
  const [openLink, setOpenLink] = useState<string | null>(null);
  // const [services, setServices] = useState([]);
  const [destinations, setDestinations] = useState([]);
  // const { refetchServices } = useRefetchServices();
  const { refetchDestinations } = useRefetchDestinations();

  // useEffect(() => {
  //   const fetchServices = async () => {
  //     try {
  //       const res = await fetch("/api/admin/services/add");
  //       const data = await res.json();
  //       setServices(data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchServices();
  // }, [refetchServices]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch("/api/admin/destinations/add");
        const data = await res.json();
        console.log(data);
        setDestinations(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(destinations);
    fetchDestinations();
  }, [refetchDestinations]);

  const navItems = [
    { name: "Home", href: "/admin/home", icon: HomeIcon },
    { name: "About", href: "/admin/about", icon: InfoIcon },
    { name: "Our Team", href: "/admin/team", icon: UserGroupIcon },
    { name: "Partners", href: "/admin/partners", icon: GroupIcon },
    { name: "Awards", href: "/admin/awards", icon: AwardIcon },
    {
      name: "Services",
      href: "/admin/services",
      icon: BriefcaseIcon,
      // hasChild: true,
      // children: [
      //   ...services.map(
      //     (service: { firstSection: { mainTitle: string }; _id: string }) => ({
      //       name: service.firstSection.mainTitle,
      //       href: `/admin/services/${service._id}`,
      //     })
      //   ),
      // ],
    },
    {
      name: "Destinations",
      href: "#####",
      icon: BriefcaseIcon,
      hasChild: true,
      children: [
        ...destinations.map(
          (destination: {
            firstSection: { location: string };
            _id: string;
          }) => ({
            name: destination.firstSection.location,
            href: `/admin/destinations/${destination._id}`,
          })
        ),
      ],
    },
    // { name: "Clients", href: "/admin/clients", icon: PresentationChartBarIcon },
    // { name: "Services", href: "#", icon: EnvelopeIcon,hasChild:true,children: [
    //     { name: "Engineering", href: "/admin/services/engineering" },
    //     { name: "Fabrication", href: "/admin/services/fabrication" },
    //     { name: "Blasting", href: "/admin/services/blasting" },
    //     { name: "Steel Erection", href: "/admin/services/steel-erection" },
    //   ] },
    // { name: "Industries", href: "/admin/industries", icon: BriefcaseIcon },
    {
      name: "Contact",
      href: "###",
      icon: PhoneIcon,
      hasChild: true,
      children: [
        { name: "Main Page", href: "/admin/contact" },
        { name: "Enquiries", href: "/admin/contact/enquiries" },
      ],
    },
    // { name: "Sustainability", href: "/admin/sustainability", icon: LeafIcon },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return navItems.map((item) => {
    const Icon = item.icon;
    return (
      <ClientSideLink
        key={item.href}
        href={item.href}
        name={item.name}
        icon={<Icon className="h-5 w-5" />}
        isOpen={openLink === item.href}
        setOpenLink={setOpenLink}
        hasChild={item.hasChild}
      >
        {item.children}
      </ClientSideLink>
    );
  });
};

export default AdminNavbar;
