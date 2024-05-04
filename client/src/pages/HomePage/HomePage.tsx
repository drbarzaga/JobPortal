import {
  BookmarkIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Divider from "@/components/core-ui/Divider";
import PortalLayout from "@/components/layouts/portal/PortalLayout";

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

const HomePage = () => {
  return (
    <PortalLayout title="Home">
      <aside className="sticky top-24 hidden w-80 shrink-0 xl:block">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            <h4 className="text-lg font-semibold text-gray-900">Filters</h4>

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
                    <label htmlFor={item.id} className="text-sm text-gray-900">
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
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-1/2"
                  placeholder="Min"
                />
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-1/2"
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

            <button
              type="button"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search
            </button>
          </div>
        </div>
        {/* Jobs Search Area Mix Search Input with Location Dropdown & Search Button End */}

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Search Results
          </h3>

          {/* Search Results Count */}
          <div className="flex items-center gap-x-2">
            <span className="text-sm text-gray-500">20,000 Results Found</span>
          </div>
        </div>

        {/* Jobs List Grid extra-large - 5 columns , large - 4 columns, medium - 3 columns, small - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
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
                    <CurrencyDollarIcon className="h-6 w-6 text-indigo-600" />
                    <span className="text-sm text-gray-500 fs-7">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                purus sit amet nisl tincidunt tincidunt. Nullam ut lacinia
                mauris. Nullam in nunc nec nunc ultricies fermentum. Nullam nec
                libero at odio ultricies lacinia. Nullam nec libero at odio
                ultricies lacinia. Nullam nec libero at odio ultricies lacinia.
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
    </PortalLayout>
  );
};

export default HomePage;
