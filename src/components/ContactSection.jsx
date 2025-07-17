import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState,useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactSection = () => {

    const {toast} = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    // const form = useRef();
    // const [sent, setSent] = useState(false);
    // const [error, setError] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(()=>{
            // emailjs
            //   .sendForm(
            //     "your_service_id", // e.g., "service_abcd1234"
            //     "your_template_id", // e.g., "template_xyz789"
            //     form.current,
            //     "your_public_key" // e.g., "abcDEF123456789"
            //   )
            //   .then(
            //     (result) => {
            //       console.log(result.text);
            //       setSent(true);
            //       setError(false);
            //       form.current.reset();
            //     },
            //     (error) => {
            //       console.log(error.text);
            //       setError(true);
            //     }
            //   );
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon."
            })
            setIsSubmitting(false);
        },1500)
        
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
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:tarunpal0812@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors "
                  >
                    tarunpal0812@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:8158988834"
                    className="text-muted-foreground hover:text-primary transition-colors "
                  >
                    8158988834
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors ">
                    Baruipur, South 24 Parganas, 700145
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="" target="_blank">
                  <Linkedin />
                </a>
                <a href="" target="_blank">
                  <Twitter />
                </a>
                <a href="" target="_blank">
                  <Instagram />
                </a>
                <a href="" target="_blank">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            {/* ref={form} */}
            <form className="space-y-6" onSubmit={handleSubmit}>
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
            {/* {sent && (
              <p className="text-green-600 mt-4 text-center">
                ✅ Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-600 mt-4 text-center">
                ❌ Oops! Something went wrong. Please try again.
              </p>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection