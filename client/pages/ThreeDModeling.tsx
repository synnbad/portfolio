import Layout from "@/components/Layout";

const ThreeDModeling = () => {
  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark-text mb-6">
              3D Modeling Portfolio
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I use Blender to create immersive 3D environments and assets for
              storytelling and experimentation.
            </p>
          </div>

          {/* Featured Render */}
          <div className="mb-16">
            <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <p className="text-lg font-medium">Featured 3D Render</p>
                <p className="text-sm">Hero showcase piece</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center group hover:bg-gray-300 transition-colors"
              >
                <div className="text-center text-gray-400">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center group-hover:bg-gray-400 transition-colors">
                    <span className="text-lg">🖼️</span>
                  </div>
                  <p className="text-sm font-medium">3D Render {index}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sketchfab Embed Placeholder */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-heading font-semibold text-portfolio-dark-text mb-4 text-center">
              Interactive 3D Model
            </h3>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <p className="text-lg font-medium">Sketchfab Embed</p>
                <p className="text-sm">Interactive 3D viewer placeholder</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4">
              🎨{" "}
              <a
                href="https://sketchfab.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-primary"
              >
                View more on Sketchfab
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThreeDModeling;
