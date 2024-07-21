import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Hello Hello App</h1>
      </header>

      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
          <p className="mb-4">You said "hellohello". How can I assist you today?</p>
          <Button>Say Hello Again</Button>
        </Card>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 Hello Hello App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;