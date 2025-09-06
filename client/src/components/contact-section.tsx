import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const interests = [
    "Exploring New Technologies",
    "Open-source Contributions", 
    "DSA Problems",
    "Java Communities"
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-animation">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to contribute to innovative teams and deliver impactful software solutions. Let's build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="reveal-animation">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 group" data-testid="contact-email">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <i className="fas fa-envelope text-primary-foreground"></i>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-muted-foreground">narasimharajubaddika225@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group" data-testid="contact-phone">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <i className="fas fa-phone text-primary-foreground"></i>
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-muted-foreground">+91-7207369225</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group" data-testid="contact-linkedin">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <i className="fab fa-linkedin text-primary-foreground"></i>
                </div>
                <div>
                  <h4 className="font-bold">LinkedIn</h4>
                  <p className="text-muted-foreground">linkedin.com/in/narasimha-rao-baddika</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group" data-testid="contact-github">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <i className="fab fa-github text-primary-foreground"></i>
                </div>
                <div>
                  <h4 className="font-bold">GitHub</h4>
                  <p className="text-muted-foreground">github.com/baddikanarasimha</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-4 text-accent">Interests</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span 
                    key={interest}
                    className="px-4 py-2 bg-muted rounded-full text-sm"
                    data-testid={`interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-animation">
            <form className="glass-morphism rounded-xl p-8" onSubmit={handleSubmit} data-testid="form-contact">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300" 
                    placeholder="Your name"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300" 
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300" 
                    placeholder="Subject"
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5} 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none" 
                    placeholder="Your message..."
                    data-testid="textarea-message"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 neon-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane ml-2"></i>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
