"use client";

import React, { useState } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';


const CreateAccountDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="text-blue-600 hover:underline">
          Create Account
        </button>
      </DrawerTrigger>
<DrawerContent>
  <DrawerHeader>
    <DrawerTitle>
      Create a New Account
    </DrawerTitle>

  </DrawerHeader>

</DrawerContent>
    </Drawer>
  );
};


export default CreateAccountDrawer;
