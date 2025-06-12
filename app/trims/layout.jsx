import NavBar from "@/components/navigation/Nav_2";
import Footer from "@/components/Footer";

export default function TrimsLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
