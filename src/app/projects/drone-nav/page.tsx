import Image from "next/image";

import { projects } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DroneNavProject() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-2 tracking-tight">
        Vehicle Detection For Biker Safety
      </h1>
      <p className="text-muted-foreground mb-6">{projects[1].description}</p>
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/projects/drone/main.jpg"
          alt="Drone Navigation"
          fill
          className="object-cover"
        />
      </div>

      {/* Project Description */}
      <section className="space-y-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
          Skillion HawkEye is a mounted bike camera that warns the bike rider of any approaching vehicles. 
          It takes in the camera data of the surrounding environment and runs inference on-device  to determine a hazard level. 
          Then, it communicates the information to the user via a mobile app running on a phone mounted to the handlebars. 
          Recognizing the multifaceted nature of road hazards, we developed multiple AI models capable of identifying potential dangers such as vehicles, pedestrians, and other obstacles in differing light and weather conditions.
          </p>
        </div>
      </section>
      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-3">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Computer Visison", "Python", "Tensorflow", "Amazon Sagemaker", "Jupyter Notebook", "Hardware Integration", "Data Collection"].map((tech) => (
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
          <li>Real-time obstacle detection</li>
          <li>Integration with hardware and mobile application</li>
          <li>Data augmentation techniques to expand and diversify training dataset</li>
          <li>Model development and training</li>
        </ul>
      </section>

      {/* GitHub Link */}
      <section>
        <Button asChild>
          <a
            href="https://github.com/jamesgasek/skillion-capstone"
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
