"use client";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Abhishek Dhupar",
      role: "Founder & Creative Director",
      image: "/team/member1.jpg" // Replace with actual image paths
    },
    {
      name: "Priya Sharma",
      role: "Lead Cinematographer",
      image: "/team/member2.jpg"
    },
    {
      name: "Rahul Mehta",
      role: "Video Editor",
      image: "/team/member3.jpg"
    },
    {
      name: "Ananya Singh",
      role: "Photography Head",
      image: "/team/member4.jpg"
    }
  ];

  return (
    <section className="relative z-10 bg-black text-white pt-16  md:py-24" id="team">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Heading */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            The Team Behind ADF
          </h2>
        </div>

        {/* Subheading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Together, we turn bold ideas into powerful visual stories for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[3/4] bg-gray-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}