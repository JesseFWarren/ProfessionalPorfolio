import Image from "next/image";

import { projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RecaptchaProject() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
        Computer Vision Recaptcha Solver
      </h1>
      <p className="text-muted-foreground mb-6">{projects[0].description}</p>
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/projects/nlp/main.png"
          alt="Recaptcha"
          fill
          className="object-cover"
        />
      </div>

      {/* Project Description */}
      <section className="space-y-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
          This application  automates the interaction with a reCAPTCHA
          challenge found on a webpage, and is specifically designed to handle Google’s reCAPTCHA system. 
          It utilizes the Selenium WebDriver for browser automation, PIL for image manipulation, and a YOLOv5 deep learning model
          that is retrained and tuned on an extensive hand curated dataset of recaptcha images for the purpose of object detection within the reCAPTCHA images.
          </p>
        </div>
      </section>
      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Computer Vision", "AWS", "Python", "Yolo", "Selenium", "Feature Engineering", "Data Collection"].map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Key Features
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Custom dataset curation</li>
          <li>Object detection with Yolov5</li>
          <li>Chrome extention allowing webpage automatic solving</li>
          <li>Performance metrics to evaluate performance and challenges in the model</li>
        </ul>
      </section>

      {/* GitHub Link */}
      <section>
        <Button asChild>
          <a
            href="https://github.com/JesseFWarren/Computer-Vision-Recaptcha-Solver"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            View on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </div>
  );
}
