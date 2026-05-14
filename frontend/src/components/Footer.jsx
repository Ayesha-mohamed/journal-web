import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 px-8 md:px-20 py-10 mt-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              JournalHub
            </h2>

            <p className="max-w-sm text-gray-400">
              A modern journal platform for readers, researchers, and writers.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Articles</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">
              Follow Us
            </h3>

            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Tiktok</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © 2026 JournalHub. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
