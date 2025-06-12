import NavBar from "@/components/navigation/Nav_2";
import Footer from "@/components/footer/Footer_1";
import Banner from "@/components/banner/Banner_1";

export default function TrimsLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
