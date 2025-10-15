"use client"

import ClientSideLink from '@/app/(admin)/admin/client-side-link';
import React, { useState } from 'react'
import {
    HomeIcon,
    NewspaperIcon,
    UserGroupIcon,
    EnvelopeIcon,
    BriefcaseIcon,
    GlobeAltIcon,
  } from "@heroicons/react/24/outline";
import { AwardIcon, GalleryThumbnails, GroupIcon, HeartHandshake, InfoIcon, LeafIcon, PhoneIcon, Settings, Share2Icon, ThumbsUp, Workflow } from 'lucide-react';
import { useEffect } from 'react';
import {RiShakeHandsLine } from 'react-icons/ri';
import { GiHealthNormal } from 'react-icons/gi';
import { FaRobot } from 'react-icons/fa';



const AdminNavbar = () => {

    const [openLink, setOpenLink] = useState<string | null>(null);


    const navItems = [
        { name: "Home", href: "/admin/home", icon: HomeIcon },
        { name: "About", href: "/admin/about", icon: InfoIcon },
        { name: "Our Team", href: "/admin/team", icon: UserGroupIcon },
        { name: "Partners", href: "/admin/partners", icon: GroupIcon },
        { name: "Awards", href: "/admin/awards", icon: AwardIcon },
        { name: "Services", href: "####", icon:BriefcaseIcon,hasChild:true,children: [
          { name: "MICE", href: "/admin/services/mice" },
        ] },
        { name: "Destinations", href: "#####", icon:BriefcaseIcon,hasChild:true,children: [
          { name: "UAE", href: "/admin/destinations/uae" },
        ] },
        // { name: "Clients", href: "/admin/clients", icon: PresentationChartBarIcon },
        // { name: "Services", href: "#", icon: EnvelopeIcon,hasChild:true,children: [
        //     { name: "Engineering", href: "/admin/services/engineering" },
        //     { name: "Fabrication", href: "/admin/services/fabrication" },
        //     { name: "Blasting", href: "/admin/services/blasting" },
        //     { name: "Steel Erection", href: "/admin/services/steel-erection" },
        //   ] },
        // { name: "Industries", href: "/admin/industries", icon: BriefcaseIcon },
        { name: "Contact", href: "###", icon: PhoneIcon,hasChild:true,children: [
          { name: "Main Page", href: "/admin/contact" },
          {name:"Enquiries",href:"/admin/contact/enquiries"}
        ] },
        // { name: "Sustainability", href: "/admin/sustainability", icon: LeafIcon },
        { name: "Settings", href: "/admin/settings", icon: Settings},
      ];

  return (
    navItems.map((item) => {
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
      })
  )
}

export default AdminNavbar