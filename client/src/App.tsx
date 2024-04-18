import {
  BellIcon,
  HomeIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  ShareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LocationSelect from "./components/LocationSelect";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon },
  { name: "Find Jobs", href: "#", icon: BriefcaseIcon },
  { name: "My Jobs", href: "#", icon: DocumentTextIcon },
  { name: "Saved Jobs", href: "#", icon: BookmarkIcon },
  { name: "Messages", href: "#", icon: ChatBubbleLeftRightIcon },
];

const jobs = [
  {
    id: 1,
    title: "UX/UI Designer",
    company: "Google",
    location: "Mountain View, California",
    tags: ["Remote", "Full-time", "5+ years"],
    salary: "$100k - $120k/yr",
    time: "5min ago",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Facebook",
    location: "Menlo Park, California",
    tags: ["Remote", "Full-time", "5+ years"],
    salary: "$100k - $120k/yr",
    time: "5min ago",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Amazon",
    location: "Seattle, Washington",
    tags: ["Remote", "Full-time", "5+ years"],
    salary: "$100k - $120k/yr",
    time: "5min ago",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Microsoft",
    location: "Redmond, Washington",
    tags: ["Remote", "Full-time", "5+ years"],
    salary: "$100k - $120k/yr",
    time: "5min ago",
  },
  {
    id: 5,
    title: "UX/UI Designer",
    company: "Google",
    location: "Mountain View, California",
    tags: ["Remote", "Full-time", "5+ years"],
    salary: "$100k - $120k/yr",
    time: "5min ago",
  },
  {
    id: 6,
    title: "Software Engineer",
    company: "Facebook",
    location: "Menlo Park, California",
    tags: ["Remote", "Full-time", "5+ years"],
    salary: "$100k - $120k/yr",
    time: "5min ago",
  },
  {
    id: 7,
    title: "Product Manager",
    company: "Amazon",
    location: "Seattle, Washington",
    tags: ["Remote", "Full-time", "5+ years"],
    salary: "$100k - $120k/yr",
    time: "5min ago",
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "Microsoft",
    location: "Redmond, Washington",
    tags: ["Remote", "Full-time", "5+ years"],
    salary: "$100k - $120k/yr",
    time: "5min ago",
  },
  {
    id: 9,
    title: "UX/UI Designer",
    company: "Google",
    location: "Mountain View, California",
    tags: ["Remote", "Full-time", "5+ years"],
    salary: "$100k - $120k/yr",
    time: "5min ago",
  },
];

function Divider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="shrink-0 border-b border-gray-200 bg-white sticky top-0 z-10">
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-x-2"
            >
              {item.icon && <item.icon className="h-6 w-6" />}
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end flex items-center gap-x-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-800"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Post a Job
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

const footerNavigation = [
  {
    name: "Facebook",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {footerNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Wrapper() {
  return (
    <div className="flex flex-col bg-gray-50">
      <Header />

      <div className="mx-auto flex w-full items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <aside className="sticky top-24 hidden w-80 shrink-0 xl:block">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Filters
              </h4>

              <div className="py-5">
                <Divider />
              </div>

              {/* Sort By [Most Recent, A-Z, Top Salary, Trending] Radio Groups Grid */}
              <div className="">
                <h5 className="text-sm font-semibold text-gray-900 mb-2">
                  Sort By
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "most-recent", name: "Most Recent" },
                    { id: "a-z", name: "A-Z" },
                    { id: "top-salary", name: "Top Salary" },
                    { id: "trending", name: "Trending" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center gap-x-2">
                      <input
                        id={item.id}
                        name="sort-by"
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor={item.id}
                        className="text-sm text-gray-900"
                      >
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {/* Sort By [Most Recent, A-Z, Top Salary, Trending] Radio Groups Grid End */}

              <div className="py-5">
                <Divider />
              </div>

              {/* Job Salary Filter Inputs */}
              <div>
                <h5 className="text-sm font-semibold text-gray-900 mb-2">
                  Salary
                </h5>
                <div className="flex gap-x-4">
                  <input
                    type="text"
                    className="flex-1 h-10 px-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm w-1/2"
                    placeholder="Min"
                  />
                  <input
                    type="text"
                    className="flex-1 h-10 px-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm w-1/2"
                    placeholder="Max"
                  />
                </div>
              </div>
              {/* Job Salary Filter Inputs End */}

              <div className="py-5">
                <Divider />
              </div>

              {/* Job Type [Full-time, Part-time, Remote] Checkbox Group */}
              <div>
                <h5 className="text-sm font-semibold text-gray-900 mb-2">
                  Job Type
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  {["Full-time", "Part-time", "Remote", "Voluntier"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-x-2">
                        <div className="relative flex items-start">
                          <div className="flex h-6 items-center">
                            <input
                              id="comments"
                              aria-describedby="comments-description"
                              name="comments"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          </div>
                          <div className="ml-3 text-sm leading-6">
                            <label
                              htmlFor="comments"
                              className="font-md text-gray-900"
                            >
                              {item}
                            </label>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              {/* Job Type [Full-time, Part-time, Remote] Checkbox Group End */}

              <div className="py-5">
                <Divider />
              </div>

              {/* Job Experience [1-3 years, 3-5 years, 5+ years] Checkbox Group */}
              <div>
                <h5 className="text-sm font-semibold text-gray-900 mb-2">
                  Experience
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  {["1-3 years", "3-5 years", "5+ years"].map((item) => (
                    <div key={item} className="flex items-center gap-x-2">
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="comments"
                            aria-describedby="comments-description"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="font-md text-gray-900"
                          >
                            {item}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Job Experience [1-3 years, 3-5 years, 5+ years] Checkbox Group End */}

              <div className="py-5">
                <Divider />
              </div>

              {/* Job Location [Remote, On-site, Hybrid] Checkbox Group */}
              <div>
                <h5 className="text-sm font-semibold text-gray-900 mb-2">
                  Location
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  {["Remote", "On-site", "Hybrid"].map((item) => (
                    <div key={item} className="flex items-center gap-x-2">
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="comments"
                            aria-describedby="comments-description"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="font-md text-gray-900"
                          >
                            {item}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Job Location [Remote, On-site, Hybrid] Checkbox Group End */}
            </div>
          </div>
        </aside>

        <main className="flex-1">
          {/* Jobs Search Area Mix Search Input with Location Dropdown & Search Button */}
          <div className="flex gap-x-4 justify-between">
            <div className="flex gap-x-4 mb-4">
              <div className="relative rounded-md shadow-sm w-80">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full h-10 rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Search Jobs"
                />
              </div>

              <LocationSelect />

              <button
                type="button"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Search
              </button>
            </div>

            {/* Search Results Count */}
            <div className="flex items-center gap-x-2">
              <span className="text-sm text-gray-500">
                20,000 Results Found
              </span>
            </div>
          </div>
          {/* Jobs Search Area Mix Search Input with Location Dropdown & Search Button End */}

          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Search Results
          </h3>

          {/* Jobs List Grid extra-large - 5 columns , large - 4 columns, medium - 3 columns, small - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className={`overflow-hidden rounded-lg bg-white shadow cursor-pointer ${
                  index === 0 ? "border border-indigo-600" : ""
                }`}
              >
                <div className="px-4 py-5 sm:p-6">
                  {/* Job Title, Company, Location */}
                  <div className="flex gap-x-4 justify-between">
                    <div className="flex gap-x-2">
                      <div className="rounded w-12 h-12 bg-gray-200 flex items-center justify-center">
                        <BriefcaseIcon className="h-6 w-6 text-indigo-600" />
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {job.title}
                        </h4>
                        <p className="text-sm text-gray-500">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location}</p>
                      </div>
                    </div>

                    {/* Save Job Action */}
                    <div className="flex items-start">
                      <button
                        type="button"
                        className="text-sm font-semibold text-gray-900  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
                      >
                        <BookmarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                    {/* Save Job Action End */}
                  </div>
                  {/* Job Title, Company, Location End */}

                  {/* Tags */}
                  <div className="flex gap-x-2 mt-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs text-gray-700 ring-1 ring-inset ring-gray-600/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Tags End */}

                  {/* Salary & Time */}
                  <div className="flex items-center gap-x-2 mt-2 justify-between">
                    <div className="flex items-center gap-x-2">
                      <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        {job.salary}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">{job.time}</span>
                  </div>
                  {/* Salary & Time End */}
                </div>
              </div>
            ))}
          </div>
          {/* Jobs List Scrollable End */}
        </main>

        <aside className="sticky top-24 hidden w-80 shrink-0 xl:block">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6 gap-4">
              {/* Job Details */}
              <div className="flex gap-x-4 justify-between">
                <div className="rounded w-16 h-16 bg-gray-200 flex items-center justify-center">
                  <BriefcaseIcon className="h-10 w-10 text-indigo-600" />
                </div>

                {/* Share Job & Save Job Actions */}
                <div className="flex gap-4 items-start">
                  <button
                    type="button"
                    className=" text-sm font-semibold text-gray-900  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
                  >
                    <ShareIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className="text-sm font-semibold text-gray-900  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
                  >
                    <BookmarkIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-2">
                <h2 className="text-lg font-semibold text-gray-900">
                  UX/UI Designer
                </h2>
                <p className="text-sm text-gray-500">
                  Google - Mountain View, California
                </p>
              </div>
              {/* Job Details End */}

              {/* Applications Numbers */}
              <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs mt-2 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                1000+ Applications
              </span>
              {/* Applications Numbers End */}

              <div className="py-5">
                <Divider />
              </div>

              {/* Job Details, Job Type, Experience, Posted Date */}
              <div className="flex gap-4 flex-col">
                <div className="flex gap-x-4 justify-between">
                  <div>
                    <h3 className="text-sm text-gray-900 font-semibold mb-2">
                      Job Type
                    </h3>
                    <p className="text-sm text-gray-400">Full-time</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-900 font-semibold mb-2">
                      Experience
                    </h3>
                    <p className="text-sm text-gray-400">5+ years</p>
                  </div>
                </div>
                <div className="flex gap-x-4 justify-between">
                  <div>
                    <h3 className="text-sm text-gray-900 font-semibold mb-2">
                      Position
                    </h3>
                    <p className="text-sm text-gray-400">UX/UI Designer</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-900 font-semibold mb-2">
                      Date Posted
                    </h3>
                    <p className="text-sm text-gray-400">5min ago</p>
                  </div>
                </div>
              </div>
              {/* Job Details, Job Type, Experience, Posted Date End */}

              <div className="py-5">
                <Divider />
              </div>

              {/* Job Description */}
              <div>
                <h3 className="text-sm text-gray-900 font-semibold mb-2">
                  Description
                </h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac purus sit amet nisl tincidunt tincidunt. Nullam ut lacinia
                  mauris. Nullam in nunc nec nunc ultricies fermentum. Nullam
                  nec libero at odio ultricies lacinia. Nullam nec libero at
                  odio ultricies lacinia. Nullam nec libero at odio ultricies
                  lacinia.
                </p>
              </div>
              {/* Job Description End */}

              <div className="py-5">
                <Divider />
              </div>

              {/* Base Salary  & Apply Button */}
              <div className="flex gap-4 flex-col">
                <div className="flex gap-x-4 justify-between">
                  <div>
                    <h3 className="text-sm text-gray-900 font-semibold mb-2">
                      Base Salary
                    </h3>
                    <p className="text-sm text-gray-400">$100k - $120k/yr</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Apply Now
                </button>
              </div>
              {/* Base Salary  & Apply Button End */}
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return <Wrapper />;
}

export default App;
