import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

const jobApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience level"),
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Here you would typically:
      // 1. Save to database
      // 2. Send email notification
      // 3. Log the submission
      
      console.log("Contact form submission:", {
        name: validatedData.fullName,
        email: validatedData.email,
        subject: validatedData.subject,
        timestamp: new Date().toISOString(),
      });
      
      res.status(200).json({ 
        success: true, 
        message: "Message sent successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Career application submission
  app.post("/api/careers/apply", async (req, res) => {
    try {
      const validatedData = jobApplicationSchema.parse(req.body);
      
      // Here you would typically:
      // 1. Save to database
      // 2. Send email to HR team
      // 3. Send confirmation email to applicant
      // 4. Log the application
      
      console.log("Job application submission:", {
        name: validatedData.fullName,
        email: validatedData.email,
        position: validatedData.position,
        experience: validatedData.experience,
        timestamp: new Date().toISOString(),
      });
      
      res.status(200).json({ 
        success: true, 
        message: "Application submitted successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Career application error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.status(200).json({ 
      status: "healthy", 
      timestamp: new Date().toISOString() 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
