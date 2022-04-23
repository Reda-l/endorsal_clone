<template>
  <div>
    <nav class="bg-indigo-900 border-b border-gray-200 fixed z-30 w-full">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              class="
                lg:hidden
                mr-2
                text-gray-600
                hover:text-gray-900
                cursor-pointer
                p-2
                hover:bg-gray-100
                focus:bg-gray-100 focus:ring-2 focus:ring-gray-100
                rounded
              "
            >
              <svg
                id="toggleSidebarMobileHamburger"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                class="w-6 h-6 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <a href="#" class="text-xl font-bold flex items-center lg:ml-2.5">
              <img
                src="https://endorsal.io/assets/img/endorsal-logo-white@2x.png"
                class="h-6 mr-2"
                alt="Logo"
              />
            </a>
          </div>
          <div class="flex items-center">
            <!-- User's AVATAR -->
            <div class="lg:flex items-center">
              <div class="relative inline-block">
                <router-link :to = "{path : '/profile'}">
                <img
                  class="inline-block object-cover w-12 h-12 rounded-full hover:ring-2 ring-white"
                  src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                  alt="Profile image"
                />
                <span
                  class="
                    absolute
                    bottom-0
                    right-0
                    inline-block
                    w-3
                    h-3
                    bg-green-600
                    border-2 border-white
                    rounded-full
                  "
                ></span>
                </router-link>
              </div>
            </div>
            <!-- User's AVATAR -->
            <a
              href="#"
              class="
                hidden
                sm:inline-flex
                ml-5
                text-white
                bg-cyan-600
                hover:bg-cyan-700
                focus:ring-4 focus:ring-cyan-200
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
                items-center
                mr-3
              "
            >
              <svg
                class="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="gem"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                ></path>
              </svg>
              Chi7aja
            </a>
          </div>
        </div>
      </div>
    </nav>
    <!-- NAV ENDS HERE AZWIN -->
    <aside
      id="sidebar"
      class="
        fixed
        hidden
        z-20
        h-full
        top-0
        left-0
        pt-16
        flex
        lg:flex
        flex-shrink-0 flex-col
        w-64
        transition-width
        duration-75
      "
      aria-label="Sidebar"
    >
      <div
        class="
          relative
          flex-1 flex flex-col
          min-h-0
          border-r border-gray-200
          bg-white
          pt-0
        "
      >
        <div class="flex-1 flex flex-col bg-white pt-5 pb-4 overflow-y-auto">
          <div class="flex-1 px-3 bg-white divide-y space-y-1">
            <ul class="space-y-2 pb-2">
              <li>
                <router-link
                  :to="{ path: '/' }"
                  class="
                    text-base text-gray-900
                    font-normal
                    rounded-lg
                    flex
                    items-center
                    p-2
                    hover:bg-gray-100
                    group
                  "
                >
                  <svg
                    class="
                      w-6
                      h-6
                      text-gray-500
                      group-hover:text-gray-900
                      transition
                      duration-75
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path
                      d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Home</span>
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ path: '/testimonials' }"
                  class="
                    text-base text-gray-900
                    font-normal
                    rounded-lg
                    hover:bg-gray-100
                    flex
                    items-center
                    p-2
                    group
                  "
                >
                  <svg
                    class="
                      w-6
                      h-6
                      text-gray-500
                      flex-shrink-0
                      group-hover:text-gray-900
                      transition
                      duration-75
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap"
                    >Testimonials</span
                  >
                </router-link>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  class="
                    text-base text-gray-900
                    font-normal
                    rounded-lg
                    hover:bg-gray-100
                    flex
                    items-center
                    p-2
                    group
                  "
                >
                  <svg
                    class="
                      w-6
                      h-6
                      text-gray-500
                      flex-shrink-0
                      group-hover:text-gray-900
                      transition
                      duration-75
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                    ></path>
                    <path
                      d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">EndoForms</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="
                    text-base text-gray-900
                    font-normal
                    rounded-lg
                    hover:bg-gray-100
                    flex
                    items-center
                    p-2
                    group
                  "
                >
                  <svg
                    class="
                      w-6
                      h-6
                      text-gray-500
                      flex-shrink-0
                      group-hover:text-gray-900
                      transition
                      duration-75
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Contact</span>
                </a>
              </li>
              <li>
                <router-link
                  :to="{ path: '/integrations' }"
                  class="
                    text-base text-gray-900
                    font-normal
                    rounded-lg
                    hover:bg-gray-100
                    flex
                    items-center
                    p-2
                    group
                  "
                >
                  <svg
                    class="
                      w-6
                      h-6
                      text-gray-500
                      flex-shrink-0
                      group-hover:text-gray-900
                      transition
                      duration-75
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap"
                    >Integrations</span
                  >
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ path: '/sign' }"
                  class="
                    text-base text-gray-900
                    font-normal
                    rounded-lg
                    hover:bg-gray-100
                    flex
                    items-center
                    p-2
                    group
                  "
                >
                  <svg
                    class="
                      w-6
                      h-6
                      text-gray-500
                      flex-shrink-0
                      group-hover:text-gray-900
                      transition
                      duration-75
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">SignIn</span>
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{ path: '/register' }"
                  class="
                    text-base text-gray-900
                    font-normal
                    rounded-lg
                    hover:bg-gray-100
                    flex
                    items-center
                    p-2
                    group
                  "
                >
                  <svg
                    class="
                      w-6
                      h-6
                      text-gray-500
                      flex-shrink-0
                      group-hover:text-gray-900
                      transition
                      duration-75
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 flex-1 whitespace-nowrap">Sign Up</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
    <div
      class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
      id="sidebarBackdrop"
    ></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>