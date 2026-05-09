import { Button } from "@/components/ui/button";

const projects = [1, 2, 3, 4];

const ProjectsSection = () => {
  return (
    <section id="project" className="w-full flex justify-center my-6 md:my-8 lg:my-10">
      <div className="w-[95%] md:w-[85%]">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Featured <span className="text-orange-500">Project’s</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mt-6">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5 py-2 text-sm">
            Case Studies
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-5 py-2 text-sm border-gray-300 text-gray-600"
          >
            Live Project
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {projects.map((_, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden border border-gray-200 bg-white"
            >
              {/* Image */}
              <div className="h-44 bg-gray-200"></div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  Project Title
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Short description here...
                </p>

                <Button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm h-9">
                  View Case Study ↗
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;