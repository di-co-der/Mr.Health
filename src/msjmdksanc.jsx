





<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.3 }}
style={{ display: activeTab === "upcoming" ? "block" : "none" }}
>
{["inClinic", "online", "lab"].map((section) => (
  <div key={section}>
    <button
      className="w-full text-left font-medium mt-3 flex justify-between items-center outline-none"
      onClick={() => toggleSection(section)}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}{" "}
      Appointments
      <span
        className={`transform transition-transform duration-500 ${
          collapsedSections[section] ? "rotate-180" : "rotate-0"
        }`}
      >
        <img src={AboveArrowIcon} alt="AboveArrowIcon" />
      </span>
    </button>
    <motion.div
      initial="collapsed"
      animate={collapsedSections[section] ? "collapsed" : "open"}
      className="mt-4"
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{ duration: 0.3 }}
    >
      {appointmentsData[activeTab][section].length > 0 ? (
        appointmentsData[activeTab][section].map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))
      ) : (
        <NoAppointmentCard />
      )}
    </motion.div>
    <div className="w-full border-y-[#d9d9d9] border rounded-xl"></div>
  </div>
))}
</motion.div>
