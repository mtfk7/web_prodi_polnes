import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Code2, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"
import { siteConfig, contactInfo, quickLinks } from "@/data/tim/content"

const iconMap = {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
}

export function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 text-white">
      <div className="container px-4 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          
          <div className="lg:col-span-2">
            <div className="h-40 w-40 relative flex-shrink-0">
              <img src="/logo-polnes.png" alt="Logo Polnes" className="h-full w-full object-contain" />
            </div>
       
            {/* <p className="text-gray-400 mb-6 max-w-md">
              Samarinda State Polytechnic - Building the future of multimedia technology through innovative education
              and creative excellence.
            </p> */}
            <div className="flex space-x-4">
              {contactInfo.socialMedia.map((social, index) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                let colorClass = "";
                let baseClass = "";
                switch (social.icon) {
                  case "Facebook":
                    colorClass = "hover:bg-[#1877F2] border-[#1877F2]";
                    baseClass = "bg-[#1877F2] border-[#1877F2]";
                    break;
                  case "Instagram":
                    colorClass = "hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500 border-pink-500";
                    baseClass = "bg-gradient-to-tr from-pink-500 to-yellow-500 border-pink-500";
                    break;
                  case "Youtube":
                    colorClass = "hover:bg-[#FF0000] border-[#FF0000]";
                    baseClass = "bg-[#FF0000] border-[#FF0000]";
                    break;
                  case "Linkedin":
                    colorClass = "hover:bg-[#0A66C2] border-[#0A66C2]";
                    baseClass = "bg-[#0A66C2] border-[#0A66C2]";
                    break;
                  default:
                    colorClass = "hover:bg-green-700 border-gray-700";
                    baseClass = "bg-green-700 border-gray-700";
                }
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`transition-colors ${baseClass} ${colorClass}`}
                    asChild
                  >
                    <Link href={social.url}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <div className="text-sm text-gray-400">
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <div className="text-sm text-gray-400">{contactInfo.phone}</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <div className="text-sm text-gray-400">{contactInfo.email}</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Politeknik Negeri Samarinda. Teknologi Informasi. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            {/* <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link> */}
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          Dibuat oleh Rahmat Wahyudi dan Muhammad Taufikul Hakim
        </div>
      </div>
    </footer>
  )
}
