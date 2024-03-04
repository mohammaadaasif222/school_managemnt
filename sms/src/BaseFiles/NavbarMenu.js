import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoMdNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import schoollogo from "../Static/basic/schoollogo.png";
import { RxDividerVertical } from "react-icons/rx";
import {
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarMenu() {
  return (
    <>
      <div className="w-full ">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 shadow-lg">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 ">
                      <div className="flex justify-between">
                        <img
                          className="h-8 w-8"
                          src={schoollogo}
                          alt="Your Company"
                        />
                        <Typography
                          as="a"
                          href="#"
                          variant="h6"
                          className=" cursor-pointer py-1.5"
                        >
                          GNK School Management
                        </Typography>
                      </div>
                    </div>

                    <div className="hidden lg:block"></div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <div className="flex flex-wrap items-center justify-between gap-y-4">
                        <div className="relative flex w-full gap-2 md:w-max">
                          <Input
                            type="search"
                            label="Type here..."
                            className="pr-20"
                            containerProps={{
                              className: "min-w-[288px]",
                            }}
                          />
                          <Button
                            size="sm"
                            color="white"
                            className="!absolute right-1 top-1 rounded"
                          >
                            Search
                          </Button>
                        </div>
                        <div className="ml-5 flex gap-1 md:mr-4 ;">
                          <IconButton variant="text">
                            <FaMessage className="h-4 w-4 " />
                          </IconButton>
                          <IconButton variant="text">
                            <IoMdNotifications className="h-4 w-4" />
                          </IconButton>
                        </div>
                      </div>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex lg:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:text-white ">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6 text-gray-900"
                          aria-hidden="true"
                        />
                      ) : (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="flex flex-wrap items-center justify-between gap-y-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 ml-2 cursor-pointer py-1.5"
                  >
                    GNK Khalsa
                  </Typography>
                  <div className="ml-auto flex gap-1 md:mr-4">
                    <IconButton variant="text">
                      <FaMessage className="h-4 w-4" />
                    </IconButton>
                    <IconButton variant="text">
                      <IoMdNotifications className="h-4 w-4" />
                    </IconButton>
                  </div>
                  <div className="relative flex w-full gap-2 md:w-max">
                    <Input
                      type="search"
                      label="Type here..."
                      className="pr-20"
                      containerProps={{
                        className: "min-w-[288px]",
                      }}
                    />
                    <Button
                      size="sm"
                      className="!absolute right-1 top-1 rounded"
                    >
                      Search
                    </Button>
                  </div>
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      </div>
    </>
  );
}
