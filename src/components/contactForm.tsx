import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { Globe } from "./ui/globe";
import { GlobeDemo } from "./Globe";

interface FormValues {
  username: string;
  email: string;
  Entity: string;
  Message: string;
}

const ContactForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const pageVariant = {
    hidden: { opacity: 0, y: 50 }, // Initial state (off-screen, faded out)
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    }, // Final state (onscreen, faded in)
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariant}
      className="w-full py-20 lg:py-32"
    >
      <div className="container mx-auto p-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="mx-full flex flex-col gap-10">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-4">
                <div>
                  <Badge variant="outline" className="text-zinc-700 ">
                    Reach Us
                  </Badge>
                </div>

                <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
                  Speak with Our Friendly Team
                </h1>
                <p className="text-lg text-muted-foreground">
                  We are always looking for ways to improve our services.
                  Contact us and let us know how we can help you.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="flex flex-col justify-center items-center">
                  <p className="mb-2 text-lg font-semibold">Email Us</p>
                  <a href="#" className="hover:underline">
                    Info@dpa.gov.so
                  </a>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="mb-2 text-lg font-semibold">Visit Us</p>
                  <a href="#" className=" hover:underline">
                    Aden Adde Airport, Road
                  </a>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="mb-2 text-lg font-semibold"> Call Us</p>
                  <a href="#" className="hover:underline">
                    +452
                  </a>
                </div>
              </div>
            </div>
            <div>
              <GlobeDemo />
            </div>
          </div>

          <section className="mx-full border border-gray-300/60 rounded-lg p-6">
            <Form {...form}>
              <form className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  rules={{
                    required: "Username is required",
                    minLength: {
                      value: 2,
                      message: "Username must be at least 2 characters",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Entity"
                  rules={{
                    required: "subject is required",
                    minLength: {
                      value: 2,
                      message: "subject must be at least 2 characters",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="MOCT" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Message"
                  rules={{
                    required: "Message is required",
                    minLength: {
                      value: 2,
                      message: "subject must be at least 2 characters",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button size="lg" type="submit">
                  Submit
                </Button>
              </form>
            </Form>
          </section>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
