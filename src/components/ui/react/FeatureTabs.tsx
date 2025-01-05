import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {};

const FeatureTabs = (props: Props) => {
  return (
    <div className="flex flex-1  h-full rounded-sm bg-[#261A4C] text-white p-2 w-full z-10">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full bg-transparent">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default FeatureTabs;
