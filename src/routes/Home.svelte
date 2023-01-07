<script>
    import { Link } from 'svelte-navigator';
</script>

<main class="my-10 w-full gap-5 font-semibold lg:grid lg:grid-cols-5 pt-10">
    <div
        class="col-span-3 flex w-full items-center text-5xl text-gray-900 dark:text-gray-100 sm:text-7xl md:text-8xl lg:justify-start lg:pl-16 lg:text-7xl xl:pl-24 xl:text-8xl"
    >
        <div class="flex w-full flex-col gap-3 lg:w-auto">
            <div class="flex items-center justify-center gap-4 lg:block text-6xl">
                <div
                    class="inline"
                >
                Welcome to
                </div>
                <div
                    class="inline bg-gradient-to-r text-[#4E6C50] py-2 dark:from-cyan-500 dark:to-green-400"
                >
                 Chronos 
                </div>
                <div class="text-2xl mt-8 font-medium">
                    Chronos is a learning  platform which adopts the idea of Educational gaming. 
This project offers you the opportunity to test your historical knowledge and develop it.
                </div>
                <div class="flex flex-row gap-10 mt-8">
                    <Link to="/game">
                        <div class="rounded-md hover:scale-105 transition-all text-xl text-dev-light-color bg-[#A98B55] py-3 px-8">Play</div>
                    </Link>
                    <Link to="/learn">
                        <div class="rounded-md hover:scale-105 transition-all text-xl text-dev-light-color bg-[#395144] py-3 px-8">Learn</div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <div
        class="flex items-center justify-center md:mt-10 lg:mt-0 lg:ml-14 xl:ml-32 scale-[2.3]"
    >
        <img src="src/assets/kbira.svg" class="animate-spin-left" alt="">
        <img src="src/assets/sghira.svg" class="-ml-[129px] animate-spin-right" alt="">
    </div>
</main>