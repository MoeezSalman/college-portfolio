"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
  FiSend,
} from "react-icons/fi";
import Reveal from "@/components/ui/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setSubmitted(true);

    reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <Reveal>
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            Contact Us
          </span>

          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              Touch
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            We'd love to hear from prospective students, parents, and visitors.
            Feel free to contact us for admissions, academic programs, campus
            visits, or any other inquiries.
          </p>
        </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* LEFT */}

          <Reveal className="lg:col-span-2" delay={0.1}>
          <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Contact Information
            </h2>

            <p className="mb-10 leading-7 text-gray-600 dark:text-gray-300">
              Our admissions office is always ready to answer your questions.
              Reach out using the information below or send us a message through
              the contact form.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25">
                  <FiMapPin size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Address
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    123 University Avenue
                    <br />
                    Lahore, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25">
                  <FiPhone size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25">
                  <FiMail size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    admissions@college.edu.pk
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25">
                  <FiClock size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Office Hours
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Friday
                    <br />
                    9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg shadow-blue-600/25">
              <h3 className="mb-3 text-xl font-semibold">
                Schedule a Campus Visit
              </h3>

              <p className="leading-7 text-blue-100">
                Experience our vibrant campus, meet faculty members, and explore
                our state-of-the-art facilities by scheduling a guided campus
                tour.
              </p>
            </div>
          </div>
          </Reveal>

          {/* RIGHT */}

          <Reveal className="lg:col-span-3" delay={0.2}>
          <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              Send Us a Message
            </h2>

            {submitted && (
              <div className="mb-8 rounded-xl border border-green-200 bg-green-100 p-4 text-green-700 dark:border-green-800 dark:bg-green-900/40 dark:text-green-300">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium">
                    Full Name
                  </label>

                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-600/10 focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-800/60 dark:placeholder:text-slate-500 dark:focus:bg-slate-800"
                    placeholder="John Doe"
                  />

                  <p className="mt-2 text-sm text-red-500">
                    {errors.name?.message}
                  </p>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-600/10 focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-800/60 dark:placeholder:text-slate-500 dark:focus:bg-slate-800"
                    placeholder="john@example.com"
                  />

                  <p className="mt-2 text-sm text-red-500">
                    {errors.email?.message}
                  </p>
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Subject
                </label>

                <input
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-600/10 focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-800/60 dark:placeholder:text-slate-500 dark:focus:bg-slate-800"
                  placeholder="Admission Inquiry"
                />

                <p className="mt-2 text-sm text-red-500">
                  {errors.subject?.message}
                </p>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-600/10 focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-800/60 dark:placeholder:text-slate-500 dark:focus:bg-slate-800"
                  placeholder="Write your message here..."
                />

                <p className="mt-2 text-sm text-red-500">
                  {errors.message?.message}
                </p>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}