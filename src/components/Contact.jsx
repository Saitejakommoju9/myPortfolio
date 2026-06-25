function Contact() {
  return (
    <div className="my-22 mx-3 ">
      <h1 className="text-2xl font-bold text-center">Contact Me</h1>

      <div className="flex flex-col md:flex-row mt-10 md:justify-center ">
        <div className="w-1/2 my-10">
            <h1 className="text-lg font-bold">Let's Connect</h1>
          <p className="py-2 w-screen md:w-1/2">Open to frontend or java full stack internship roles.</p>
          

          <div className="w-screen md:w-80 bg-cyan-50 p-2 hover:bg-cyan-100 rounded-lg">

            <h1 className="text-lg text-gray-900 font-semibold">
              Connect With Me
            </h1>

            {/* Email */}
            <a href="mailto:kommojusaiteja71@gmail.com">
            <div className="flex p-2 -ml-1 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-red-500 "
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.24l7.4 6.17a1 1 0 0 0 1.2 0L20 8.24V18H4z" />
              </svg>

              <div className="mx-1">
                <div>Email</div>
                <div className="text-sm">
                  kommojusaiteja71@gmail.com
                </div>
              </div>
            </div>
            </a>

            {/* LinkedIn */}
            <a
              className="my-3"
              href="https://linkedin.com/in/saiteja-kommoju-503170301"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <div className="flex px-2  hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin "
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>

                <div className="mx-2" >
                  <div>LinkedIn</div>
                  <div className="text-sm">
                    Connect with me
                  </div>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              className="my-3 mx-6"
              href="https://github.com/Saitejakommoju9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <div className="flex px-2  hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github "
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>

                <div className="mx-2">
                  <div>GitHub</div>
                  <div className="text-sm">
                   Let's Code
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>
        <div>
        <div className="mt-10 w-screen md:w-80 bg-emerald-50 h-50 rounded-lg hover:bg-emerald-100 cursor-pointer ">
          <h1 className="font-bold text-xl p-2 mx-3">Info</h1>
          <div className="flex px-2 mx-5  my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

                <div className="mx-2">
                  <div>Location</div>
                  <div className="text-sm text-gray-500">
                   Anakapalli,AP,India
                  </div>
                </div>
              </div>

              <div className="flex px-2 mx-5 my-3">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar"
                aria-hidden="true"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
                <div className="mx-2">
                  <div>Availability</div>
                  <div className="text-sm text-gray-500">
                   Internships roles
                  </div>
                </div>
              </div>
        </div>
        
        
      </div>
      </div>
      
    </div>
  );
}

export default Contact;