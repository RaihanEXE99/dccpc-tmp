import Header from "@/components/header";
import Footer from "@/components/footer";

export default function FrontendLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}