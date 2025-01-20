<script>
    import "../app.css";
    import { onMount } from 'svelte';
    export const prerender = true;
    import { base } from '$app/paths';
    onMount(() => {
        document.title = "Big Black Cars Japan";
    });
</script>

<slot />

<div class="bg-black">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 lg:pb-16">
            <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#black-gray-white-gradient)" fill-opacity="0.7" />
                <defs>
                    <radialGradient id="black-gray-white-gradient">
                        <stop offset="0%" stop-color="black" />
                        <stop offset="50%" stop-color="gray" />
                        <stop offset="100%" stop-color="white" />
                    </radialGradient>
                </defs>
            </svg>

            <div class="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
                <!-- Flex container for the image and h2 only -->
                <div class="lg:flex lg:items-center lg:gap-6 lg:justify-start">
                    <!-- Image beside the h2 -->
                    <img class="w-24 h-24 object-cover rounded-md bg-white/5 ring-1 ring-white/10 lg:w-32 lg:h-32 mt-8"
                         src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/473687430_122107575086715759_972940679675600646_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VMhJdKGYC8EQ7kNvgFARyus&_nc_zt=23&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AFGAyFyPrFXNNsV_EtXCv-g&oh=00_AYAaiDgRD6u-3kwrczHNBtbpWh32HsC735jC9BKQEkzpXw&oe=6793D20A"
                         alt="">

                    <!-- Heading beside the image -->
                    <h2 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl mt-8">Under Construction</h2>
                </div>

                <!-- Paragraph and link, stacked below the h2 -->
                <p class="mt-6 text-pretty text-lg/8 text-gray-300">Big Black Cars Japan is here to take your group travel to the next level! Whether it's a family reunion, corporate retreat, or just a squad adventure, we’ve got you covered.</p>

                <!-- Add margin-top here for spacing before the link -->
                <div class="mt-8 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a href="https://www.facebook.com/bigblackcarsjp"
                       class="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-blue-600 bg-white rounded-lg">
                        <!-- Facebook Icon (Official Facebook SVG) -->
                        <svg class="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.497v-9.294h-3.14v-3.63h3.14V8.41c0-3.1 1.835-4.836 4.657-4.836 1.35 0 2.764.246 2.764.246v3.03h-1.56c-1.532 0-2.014.951-2.014 1.924v2.314h3.274l-.522 3.63h-2.752V24h5.393c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
                        </svg>

                        <!-- Text inside the button -->
                        <span>Visit our Facebook Page</span>

                        <!-- Right Arrow -->
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>

            <!-- Image section with margin at the top -->
            <div class="relative mt-16 h-80 lg:mt-8">
                <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 mt-8"
                     src="https://c4.wallpaperflare.com/wallpaper/778/537/81/bmw-wallpaper-preview.jpg"
                     alt="" width="1824" height="1080">
            </div>
        </div>

        <!-- Small text for email directly below the card -->
        <div class="text-right mt-4 text-xs text-white">
            <p><a href="mailto:official@bigblackcarsjp.com">official@bigblackcarsjp.com</a></p>
        </div>
    </div>
</div>
