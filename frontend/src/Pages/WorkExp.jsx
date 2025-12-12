import LeftSidebar from '../Components/LeftSidebar'
import Navbar from '../Components/Navbar'
import ResumeButton from '../Components/ResumeButton'
import ScrollIndicator from '../Components/ScrollIndicator'
import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import ResumeNavbar from '../Components/ResumeNavbar'
import { TimelineDemo } from './TimelineDemo'

function WorkExp() {
    const { theme, setTheme } = useContext(ThemeContext);
    const workExpPgae = 'WorkExp'
    return (
        <div
            className={`min-h-screen flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8 ${theme === "Dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900"
                }`}
        >
            {/* Sidebar */}
            <LeftSidebar />
            <ScrollIndicator />

            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-12 p-2 sm:p-6 md:p-8">
                <Navbar />

                {/* Resume Intro */}
                <section className="text-center md:text-left">
                    <p className={`text-lg md:text-xl mb-6 font-medium  {${theme} === "Dark" ? "bg-black text-white" : "bg-gray-50 text-black-500"`}>
                        👉 Want to know more about my experience and skills? Feel free to
                        download my resume. Explore my technical expertise and experience in detail.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <ResumeButton />
                    </div>
                    <ResumeNavbar></ResumeNavbar>
                    <section>
        
                        <TimelineDemo workExpPgae={workExpPgae} />
                    </section>
                </section>
            </div>

        </div>



    )
}
export default WorkExp