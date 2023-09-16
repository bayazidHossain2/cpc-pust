import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer class="bg-slate-100">
                <div class="flex flex-col mx-auto max-w-screen-xl space-y-8 px-4 py-4 sm:px-6 lg:space-y-16 lg:px-8">
                    <div class="flex flex-col justify-between items-center lg:flex-row lg:space-x-10">
                        <div className='flex flex-col text-center my-8'>
                            <a class="flex flex-col text-center" href='/home'>


                                <svg className="h-20" alt="logo" viewBox="0 0 10240 10240">
                                    <path xmlns="http://www.w3.org/2000/svg" d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z"></path>
                                </svg>
                                <h2 className='text-sky-600 text-2xl font-bold'>
                                    Computer Programming Club
                                </h2>

                            </a>
                            <a className='cursor-pointer self-center text-sky-400 text-2xl font-semibold'>
                                Pabna University of Science and Technology
                            </a>
                        </div>

                        <div className="flex flex-col">
                            <h2 className='text-2xl font-bold self-center'>About PUST CPC</h2>
                            <p class="mt-4 max-w-xs text-justify text-gray-500">
                                CPC PUST is the most primitive and extensive club of our University.
                                We work together to explore every field of Computer Science. Join us to know more.
                            </p>
                        </div>
                        <div className="flex flex-col my-8">
                            <h2 className='text-2xl font-bold self-center'>Find Us On</h2>

                            <ul class="mt-8 flex gap-6">
                                <li>
                                    <a
                                        href="https://www.facebook.com/PUST.PC"
                                        rel="noreferrer"
                                        target="_blank"
                                        class="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span class="sr-only">Facebook</span>

                                        <svg
                                            class="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        class="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span class="sr-only">Instagram</span>

                                        <svg
                                            class="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://github.com/bayazidHossain2/cpc-pust"
                                        rel="noreferrer"
                                        target="_blank"
                                        class="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span class="sr-only">GitHub</span>

                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        class="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span class="sr-only">Youtube</span>

                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px" y="0px" viewBox="0 0 100 100">
                                            <path d="M 50 22 C 37.749877 22 28.374518 22.479105 21.255859 23.144531 C 16.283683 23.60844 12.284881 27.386293 11.441406 32.296875 C 10.595033 37.218381 10 43.123318 10 50 C 10 56.876682 10.594125 62.782761 11.439453 67.705078 L 11.441406 67.705078 C 12.285931 72.615385 16.283959 76.390487 21.255859 76.855469 C 28.375333 77.519877 37.749877 78 50 78 C 62.250123 78 71.625482 77.520895 78.744141 76.855469 C 83.716317 76.39156 87.715119 72.613707 88.558594 67.703125 C 89.404967 62.781619 90 56.876682 90 50 C 90 43.123318 89.405875 37.217239 88.560547 32.294922 L 88.558594 32.294922 C 87.714116 27.384615 83.716041 23.609513 78.744141 23.144531 C 71.62462 22.480123 62.250123 22 50 22 z M 50 24 C 62.197877 24 71.512114 24.477174 78.558594 25.134766 C 82.632693 25.515784 85.892415 28.591072 86.587891 32.634766 C 87.414563 37.448448 88 43.238682 88 50 C 88 56.761318 87.415517 62.552741 86.587891 67.365234 C 85.893366 71.408652 82.632417 74.48319 78.558594 74.863281 C 71.513252 75.521855 62.197877 76 50 76 C 37.802123 76 28.487886 75.522826 21.441406 74.865234 C 17.367307 74.484216 14.107585 71.408928 13.412109 67.365234 C 12.585437 62.551552 12 56.761318 12 50 C 12 43.238682 12.584483 37.447259 13.412109 32.634766 C 14.106634 28.591348 17.367583 25.51681 21.441406 25.136719 C 28.486748 24.478145 37.802123 24 50 24 z M 50 27 C 39.541577 27 30.289863 27.358775 22.455078 28.060547 A 0.5000688 0.5000688 0 1 0 22.544922 29.056641 C 30.340141 28.358413 39.564423 28 50 28 C 55.511778 28 60.675977 28.102135 65.480469 28.298828 A 0.50005 0.50005 0 1 0 65.519531 27.300781 C 60.700025 27.103474 55.524222 27 50 27 z M 68.474609 27.4375 A 0.50005 0.50005 0 0 0 68.474609 28.435547 C 70.192133 28.523367 71.850954 28.627409 73.464844 28.742188 A 0.50026033 0.50026033 0 1 0 73.535156 27.744141 C 71.915048 27.628919 70.249867 27.525678 68.525391 27.4375 A 0.50005 0.50005 0 0 0 68.474609 27.4375 z M 76.441406 27.974609 A 0.50030896 0.50030896 0 0 0 76.457031 28.974609 C 76.792032 29.002949 77.134648 29.028141 77.455078 29.056641 A 0.5000688 0.5000688 0 1 0 77.544922 28.060547 C 77.213352 28.031047 76.869968 28.006176 76.542969 27.978516 A 0.50005 0.50005 0 0 0 76.492188 27.974609 A 0.50030896 0.50030896 0 0 0 76.441406 27.974609 z M 42.511719 38 A 0.50005 0.50005 0 0 0 42 38.5 L 42 61.5 A 0.50005 0.50005 0 0 0 42.75 61.933594 L 62.75 50.433594 A 0.50005 0.50005 0 0 0 62.75 49.566406 L 42.75 38.066406 A 0.50005 0.50005 0 0 0 42.511719 38 z M 43 39.365234 L 61.496094 50 L 43 60.634766 L 43 39.365234 z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p class="text-xs self-center pb-5 text-gray-500">
                        &copy; 2023. CPC PUST. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
