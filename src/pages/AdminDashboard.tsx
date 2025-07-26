import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, BarChart3, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminStats from "@/components/AdminStats";
import AdminTables from "@/components/AdminTables";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-destructive/10 rounded-lg">
              <Shield className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage AgriConnect operations and analytics</p>
            </div>
          </div>
        </div>

        {/* Admin Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full lg:w-fit lg:grid-cols-2">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics Overview
            </TabsTrigger>
            <TabsTrigger value="management" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Data Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <AdminStats />
          </TabsContent>

          <TabsContent value="management" className="space-y-6">
            <AdminTables />
          </TabsContent>
        </Tabs>

        {/* Access Warning */}
        <Card className="mt-8 bg-destructive/5 border-destructive/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-destructive" />
              <div>
                <h3 className="font-semibold text-destructive">Admin Access Required</h3>
                <p className="text-sm text-muted-foreground">
                  This dashboard requires administrator privileges. All actions are logged and monitored.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;