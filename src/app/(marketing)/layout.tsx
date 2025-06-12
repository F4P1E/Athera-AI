import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NavbarPadding from "@/components/navbar-padding";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <main className="bg-foreground">
      <Navbar />
      <NavbarPadding />
      {children}
      <Footer />
    </main>
  );
}
