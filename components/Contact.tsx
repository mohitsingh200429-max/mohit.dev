'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, LeadFormData } from "@/lib/schemas/leadSchema";
import { createLead } from "@/lib/services/leadService";

export default function Contact() {

  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema)
  });

  const onSubmit = async (data: LeadFormData) => {
    try {
      await createLead(data);
      setSuccess(true);
      reset();
    } catch (error) {
      console.error("Lead submission failed:", error);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-[1200px] mx-auto">
      <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-[0px_4px_12px_rgba(0,0,0,0.05)] border border-black/5">

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[36px] md:text-[44px] font-semibold tracking-tight mb-4">
              Need a Website That Brings Customers?
            </h2>

            <p className="text-[16px] md:text-[18px] text-[#7B7B7B] mb-12">
              Let's build a modern website that grows your business.
              Fill out the form and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">

              <div>
                <p className="text-[14px] font-medium text-[#7B7B7B] mb-1">
                  Email
                </p>

                <a
                  href="mailto:mohitsingh200429@gmail.com"
                  className="text-[18px] font-medium hover:text-[#7B7B7B]"
                >
                  mohitsingh200429@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[14px] font-medium text-[#7B7B7B] mb-1">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/919315941574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] font-medium hover:text-[#7B7B7B]"
                >
                  +91 93159 41574
                </a>
              </div>

            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <div className="grid grid-cols-2 gap-6">

              <div>
                <label className="text-[14px] font-medium">Name</label>

                <input
                  {...register("name")}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#F8F8F8] border border-black/5 rounded-[12px]"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-[14px] font-medium">Email</label>

                <input
                  {...register("email")}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-[#F8F8F8] border border-black/5 rounded-[12px]"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

            </div>

            <div>
              <label className="text-[14px] font-medium">Business Type</label>

              <input
                {...register("businessType")}
                placeholder="Dental Clinic, Law Firm"
                className="w-full px-4 py-3 bg-[#F8F8F8] border border-black/5 rounded-[12px]"
              />

              {errors.businessType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.businessType.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-[14px] font-medium">Project Details</label>

              <textarea
                rows={4}
                {...register("projectDetails")}
                placeholder="Tell me about your project goals..."
                className="w-full px-4 py-3 bg-[#F8F8F8] border border-black/5 rounded-[12px] resize-none"
              />

              {errors.projectDetails && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.projectDetails.message}
                </p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              className="w-full py-4 bg-[#222222] text-white rounded-[12px] font-medium hover:bg-black transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600 text-sm">
                Message sent successfully. I'll contact you soon.
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}