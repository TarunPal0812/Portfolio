import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState,useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactSection = () => {

    const {toast} = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const form = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsSubmitting(true)
        
        emailjs
          .sendForm(
            "service_7sp8itv",
            "template_enyum9e",
            form.current,
            "t4kwLXQwNk_1Zroyq",
          )
          .then(
            () => {
              toast({
                title: "Message sent!",
                description:
                  "Thank you for your message. I'll get back to you soon.",
              });
              form.current.reset();
              setIsSubmitting(false);
            },
            () => {
              toast({
                title: "Something went wrong!",
                description: "Please try again or email me directly.",
                variant: "destructive",
              });
              setIsSubmitting(false);
            },
          );
    }

  return (
    <section id="contact" className="py-24 px-4 relative  bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Looking to build something impactful or collaborate on an idea? I’m
          open to freelance work, internships, and exciting tech challenges.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-5">
            <div>
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-muted-foreground text-sm">Feel free to reach out through any of these channels.</p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4 mt-2">

              {/* Email */}
              <a
                href="mailto:tarunpal0812@gmail.com"
                className="group flex items-center gap-5 p-4 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">tarunpal0812@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:8158988834"
                className="group flex items-center gap-5 p-4 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-0.5">Phone</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">+91 81589 88834</p>
                </div>
              </a>

              {/* Location */}
              <div className="group flex items-center gap-5 p-4 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-sm font-semibold text-foreground">Baruipur, South 24 Parganas, 700145</p>
                </div>
              </div>

            </div>

            {/* Social links */}
            <div className="pt-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">Connect With Me</p>
              <div className="flex gap-3 justify-center">
                <a
                  href="https://www.linkedin.com/in/tarun-pal-35a7b2275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-card/60 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/itzz_tarun08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-card/60 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label="X (Twitter)"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/____6174____/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-card/60 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/tarun.pal.667062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-card/60 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Tarun Pal"
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="exemple@gmail.com"
                />
              </div>
              <div className="">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, i'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection