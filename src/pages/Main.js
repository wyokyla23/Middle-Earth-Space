import ContactSection from "../components/layouts/ContactSection"
import ProfileSection from "../components/layouts/ProfileSection"
import InterestsSection from "../components/layouts/InterestsSection"
import BlurbsSection from "../components/layouts/BlurbsSection"
import ConnectionsSection from "../components/layouts/ConnectionsSection"


const Main = () => {

  return (
    <div className="min-h-screen bg-blue-500 grid grid-cols-12">
      <div className="bg-gray-100 col-span-12 lg:col-span-5 space-y-8 px-4 pt-8">
        <ProfileSection />
        <ContactSection />
        <InterestsSection />
      </div>
      <div className="bg-gray-100 col-span-12 lg:col-span-7 space-y-8 px-4 pt-8">
        <BlurbsSection />
        <ConnectionsSection />
      </div>
    </div>
  )
}

export default Main