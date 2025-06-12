import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <main className="bg-white text-black">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
