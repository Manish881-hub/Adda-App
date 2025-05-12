import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import CreateAccountDrawer from "@/components/create-account-drawer";




function DashboardPage() {
  // Temporary mock data - replace with actual data fetching
  const accounts = [
    { id: 1, name: 'Checking', balance: 4500 },
    { id: 2, name: 'Savings', balance: 15000 }
  ];
  return (
    <div className="space-y-8">
      {/* Budget Progress */}


      {/* Dashboard Overview */}


      {/* Accounts Grid */}
     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
         <CreateAccountDrawer>
           <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
             <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
               <Plus className="h-10 w-10 mb-2" />
               <p className="text-sm font-medium">Add New Account</p>
             </CardContent>
           </Card>
         </CreateAccountDrawer>

       </div>
    </div>
  );
}
export default DashboardPage;