import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
   <section className="relative overflow-hidden py-10 bg-gray-900 text-white border-t border-gray-700">
  <div className="relative z-10 mx-auto max-w-7xl px-4">
    <div className="-m-6 flex flex-wrap">
      <div className="w-full p-6 md:w-1/2 lg:w-5/12">
        <div className="flex h-full flex-col justify-between">
          <div className="mb-4 inline-flex items-center">
            <Logo width="100px" noPadding/>
          </div>
          <div>
            <p className="text-sm text-gray-400">
              &copy; Copyright 2023. All Rights Reserved by DevUI.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <div className="h-full">
          <h3 className="tracking-widest mb-6 text-xs font-semibold uppercase text-gray-400">
            Company
          </h3>
          <ul>
            <li className="mb-3">
              <Link className="text-base hover:text-white" to="/">
                Features
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-base hover:text-white" to="/">
                Pricing
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-base hover:text-white" to="/">
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link className="text-base hover:text-white" to="/">
                Press Kit
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <div className="h-full">
          <h3 className="tracking-widest mb-6 text-xs font-semibold uppercase text-gray-400">
            Support
          </h3>
          <ul>
            <li className="mb-3">
              <Link className="text-base hover:text-white" to="/">
                Account
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-base hover:text-white" to="/">
                Help
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-base hover:text-white" to="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="text-base hover:text-white" to="/">
                Customer Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-3/12">
        <div className="h-full">
          <h3 className="tracking-widest mb-6 text-xs font-semibold uppercase text-gray-400">
            Legals
          </h3>
          <ul>
            <li className="mb-3">
              <Link className="text-base hover:text-white" to="/">
                Terms &amp; Conditions
              </Link>
            </li>
            <li className="mb-3">
              <Link className="text-base hover:text-white" to="/">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-base hover:text-white" to="/">
                Licensing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Footer
