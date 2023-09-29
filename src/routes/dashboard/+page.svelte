<script lang="ts">
  import type { PageData } from "./$types"

  export let data: PageData

  $: ({ articles } = data )
</script>

<!-- Invoice -->
    <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
      <div class="sm:w-11/12 lg:w-3/4 mx-auto">
        <!-- Card -->
        <div class="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
          <!-- Grid -->
          <div class="flex justify-between">
            <div>
              <svg class="w-10 h-10" width="26" height="26" viewBox="2.167 .438 251.038 259.969"><g fill="none" fill-rule="evenodd"><path d="m221.503 210.324c-105.235 50.083-170.545 8.18-212.352-17.271-2.587-1.604-6.984.375-3.169 4.757 13.928 16.888 59.573 57.593 119.153 57.593 59.621 0 95.09-32.532 99.527-38.207 4.407-5.627 1.294-8.731-3.16-6.872zm29.555-16.322c-2.826-3.68-17.184-4.366-26.22-3.256-9.05 1.078-22.634 6.609-21.453 9.93.606 1.244 1.843.686 8.06.127 6.234-.622 23.698-2.826 27.337 1.931 3.656 4.79-5.57 27.608-7.255 31.288-1.628 3.68.622 4.629 3.68 2.178 3.016-2.45 8.476-8.795 12.14-17.774 3.639-9.028 5.858-21.622 3.71-24.424z" fill="#f90" fill-rule="nonzero"/><path d="m150.744 108.13c0 13.141.332 24.1-6.31 35.77-5.361 9.489-13.853 15.324-23.341 15.324-12.952 0-20.495-9.868-20.495-24.432 0-28.75 25.76-33.968 50.146-33.968zm34.015 82.216c-2.23 1.992-5.456 2.135-7.97.806-11.196-9.298-13.189-13.615-19.356-22.487-18.502 18.882-31.596 24.527-55.601 24.527-28.37 0-50.478-17.506-50.478-52.565 0-27.373 14.85-46.018 35.96-55.126 18.313-8.066 43.884-9.489 63.43-11.718v-4.365c0-8.018.616-17.506-4.08-24.432-4.128-6.215-12.003-8.777-18.93-8.777-12.856 0-24.337 6.594-27.136 20.257-.57 3.037-2.799 6.026-5.835 6.168l-32.735-3.51c-2.751-.618-5.787-2.847-5.028-7.07 7.543-39.66 43.36-51.616 75.43-51.616 16.415 0 37.858 4.365 50.81 16.795 16.415 15.323 14.849 35.77 14.849 58.02v52.565c0 15.798 6.547 22.724 12.714 31.264 2.182 3.036 2.657 6.69-.095 8.966-6.879 5.74-19.119 16.415-25.855 22.393l-.095-.095" fill="#000"/><path d="m221.503 210.324c-105.235 50.083-170.545 8.18-212.352-17.271-2.587-1.604-6.984.375-3.169 4.757 13.928 16.888 59.573 57.593 119.153 57.593 59.621 0 95.09-32.532 99.527-38.207 4.407-5.627 1.294-8.731-3.16-6.872zm29.555-16.322c-2.826-3.68-17.184-4.366-26.22-3.256-9.05 1.078-22.634 6.609-21.453 9.93.606 1.244 1.843.686 8.06.127 6.234-.622 23.698-2.826 27.337 1.931 3.656 4.79-5.57 27.608-7.255 31.288-1.628 3.68.622 4.629 3.68 2.178 3.016-2.45 8.476-8.795 12.14-17.774 3.639-9.028 5.858-21.622 3.71-24.424z" fill="#f90" fill-rule="nonzero"/><path d="m150.744 108.13c0 13.141.332 24.1-6.31 35.77-5.361 9.489-13.853 15.324-23.341 15.324-12.952 0-20.495-9.868-20.495-24.432 0-28.75 25.76-33.968 50.146-33.968zm34.015 82.216c-2.23 1.992-5.456 2.135-7.97.806-11.196-9.298-13.189-13.615-19.356-22.487-18.502 18.882-31.596 24.527-55.601 24.527-28.37 0-50.478-17.506-50.478-52.565 0-27.373 14.85-46.018 35.96-55.126 18.313-8.066 43.884-9.489 63.43-11.718v-4.365c0-8.018.616-17.506-4.08-24.432-4.128-6.215-12.003-8.777-18.93-8.777-12.856 0-24.337 6.594-27.136 20.257-.57 3.037-2.799 6.026-5.835 6.168l-32.735-3.51c-2.751-.618-5.787-2.847-5.028-7.07 7.543-39.66 43.36-51.616 75.43-51.616 16.415 0 37.858 4.365 50.81 16.795 16.415 15.323 14.849 35.77 14.849 58.02v52.565c0 15.798 6.547 22.724 12.714 31.264 2.182 3.036 2.657 6.69-.095 8.966-6.879 5.74-19.119 16.415-25.855 22.393l-.095-.095" fill="#000"/></g></svg>
  
              <h1 class="mt-2 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">Amazon .Co</h1>
            </div>
            <!-- Col -->
  
            <div class="text-right">
              <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">Invoice #</h2>
              <span class="mt-1 block text-gray-500">3682303</span>
  
              <address class="mt-4 not-italic text-gray-800 dark:text-gray-200">
                45 Roker Terrace<br>
                Latheronwheel<br>
                KW5 8NW, London<br>
                United Kingdom<br>
              </address>
            </div>
            <!-- Col -->
          </div>
          <!-- End Grid -->
  
          <!-- Grid -->
          <div class="mt-8 grid sm:grid-cols-2 gap-3">
            <div>
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Bill to:</h3>
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Fred Gachago</h3>
              <address class="mt-2 not-italic text-gray-500">
                Old Nation House,<br>
                1st floor, Stall number B26,<br>
                Nairobi Kenya<br>
              </address>
            </div>
            <!-- Col -->
  
            <div class="sm:text-right space-y-2">
              <!-- Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl class="grid sm:grid-cols-5 gap-x-3">
                  <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Invoice date:</dt>
                  <dd class="col-span-2 text-gray-500">09/25/2023</dd>
                </dl>
                <dl class="grid sm:grid-cols-5 gap-x-3">
                  <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Due date:</dt>
                  <dd class="col-span-2 text-gray-500">09/26/2023</dd>
                </dl>
              </div>
              <!-- End Grid -->
            </div>
            <!-- Col -->
          </div>
          <!-- End Grid -->
  
          <!-- Table -->
          <div class="mt-6">
            <div class="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
              <div class="hidden sm:grid sm:grid-cols-5">
                <div class="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">Item</div>
                <div class="text-left text-xs font-medium text-gray-500 uppercase">Qty</div>
                <div class="text-left text-xs font-medium text-gray-500 uppercase">Price</div>
                <div class="text-right text-xs font-medium text-gray-500 uppercase">Amount</div>
              </div>
  
              <div class="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>
  
              <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                <div class="col-span-full sm:col-span-2">
                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
                  <p class="font-medium text-gray-800 dark:text-gray-200">Lenovo T14</p>
                </div>
                <div>
                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Qty</h5>
                  <p class="text-gray-800 dark:text-gray-200">1</p>
                </div>
                <div>
                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
                  <p class="text-gray-800 dark:text-gray-200">5</p>
                </div>
                <div>
                  <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                  <p class="sm:text-right text-gray-800 dark:text-gray-200">$500</p>
                </div>
              </div>
  
              
            </div>
          </div>
          <!-- End Table -->
  
          <!-- Flex -->
          <div class="mt-8 flex sm:justify-end">
            <div class="w-full max-w-2xl sm:text-right space-y-2">
              <!-- Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl class="grid sm:grid-cols-5 gap-x-3">
                  <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Subtotal:</dt>
                  <dd class="col-span-2 text-gray-500">$500.00</dd>
                </dl>
  
                <dl class="grid sm:grid-cols-5 gap-x-3">
                  <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Total:</dt>
                  <dd class="col-span-2 text-gray-500">$500.00</dd>
                </dl>
  
                <dl class="grid sm:grid-cols-5 gap-x-3">
                  <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Tax:</dt>
                  <dd class="col-span-2 text-gray-500">$39.00</dd>
                </dl>
  
                <dl class="grid sm:grid-cols-5 gap-x-3">
                  <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Amount paid:</dt>
                  <dd class="col-span-2 text-gray-500">$539.00</dd>
                </dl>
  
                <dl class="grid sm:grid-cols-5 gap-x-3">
                  <dt class="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Due balance:</dt>
                  <dd class="col-span-2 text-gray-500">$0.00</dd>
                </dl>
              </div>
              <!-- End Grid -->
            </div>
          </div>
          <!-- End Flex -->
  
          <div class="mt-8 sm:mt-12">
            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">Thank you!</h4>
            <p class="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>
            <div class="mt-2">
              <p class="block text-sm font-medium text-gray-800 dark:text-gray-200">amazon.com</p>
              <p class="block text-sm font-medium text-gray-800 dark:text-gray-200">+1 (888) 280 4331</p>
            </div>
          </div>
  
          <p class="mt-5 text-sm text-gray-500">© 2023 Amazon.</p>
        </div>
        <!-- End Card -->
  
        <!-- Buttons -->
        <div class="mt-6 flex justify-end gap-x-3">
          <a class="inline-flex justify-center items-center gap-x-3 text-sm text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
            </svg>
            PDF
          </a>
          <a class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
              <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
            </svg>
            Print details
          </a>
        </div>
        <!-- End Buttons -->
      </div>
    </div>