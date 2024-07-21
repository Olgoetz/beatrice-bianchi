import Link from "next/link";
import { Copyright, MailIcon, Phone } from "lucide-react";
import { SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";
//import DownloadConceptButton from "../ui/DownloadConceptButton";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer suppressHydrationWarning className="bg-pink-400">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center py-10 text-white ">
          <Link href={""}>
            <SiInstagram size={50} />
          </Link>
          <Link href={""}>
            <SiFacebook size={50} />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center py-10 text-white ">
          <div className="flex items-center gap-4">
            <MailIcon size={50} />
            hello@xyc.it
          </div>
          <div className="flex items-center gap-4">
            <Phone size={50} />
            123456789
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center space-y-6 text-white py-8">
          <div className="flex items-center gap-4">
            <Link href={""} className="hover:underline">
              Protezione dati
            </Link>

            <Link href={""} className="hover:underline">
              Impronta
            </Link>
          </div>
          <div className="flex items-center">
            <Copyright size={20} className="mr-1" />
            <p>2024 Beatrice Bianchi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
