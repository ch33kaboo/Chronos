<script>
    import { Link } from 'svelte-navigator';
</script>

<main class="my-10 w-full gap-5 font-semibold lg:grid lg:grid-cols-5 pt-20">
    <div
        class="col-span-3 flex w-full items-center text-5xl text-gray-900 dark:text-gray-100 sm:text-7xl md:text-8xl lg:justify-start lg:pl-16 lg:text-7xl xl:pl-24 xl:text-8xl"
    >
        <div class="flex w-full flex-col gap-3 lg:w-auto">
            <div class="flex items-center justify-center gap-4 lg:block text-6xl">
                <div
                    class="inline"
                >
                Let’s play with  
                </div>
                <div
                    class="inline bg-gradient-to-r text-[#4E6C50] py-2 dark:text-cyan-500"
                >
                Griffin 
                </div>
                <div class="text-2xl mt-8 font-medium">
                    Greetings, Time Traveler. 
Keep in mind that time is money in this situation, and that
your only weapon is knowledge. By starting the game, you
enter a magical world where you can travel through history
and stroll on holy pathways. Throughout time.
                </div>
                <div class="flex flex-row gap-10 mt-8">
                    <Link to="/play">
                        <div class="rounded-md hover:scale-105 transition-all text-xl text-dev-light-color bg-[#A98B55] py-3 px-8">Start</div>
                    </Link>

        <label for="my-modal-how" class="rounded-md hover:scale-105 transition-all text-xl text-dev-light-color bg-[#395144] py-3 px-8 cursor-pointer">
            How to Play?
        </label>
        <input type="checkbox" id="my-modal-how" class="modal-toggle" />

        <div class="modal">
        <div class="modal-box text-gray-50 text-base">
            <h3 class="font-bold text-lg">Hi time traveler!</h3>
            <p class="py-4">Griffin is a competetive game. In one room many players will compete to solve diverse historical Quizzes, each player will have a specific amount of time, but remember that in the Griffin world the time is as valuable as gold. In this game your knowledge is your sword, so use it carefully. <br><br>In order to win the game, you should guess the right word using the hints given. For each correct guess, you'll get extra 5 seconds, for each wrong guess you will lose 5 seconds, the last games to stay alive is the winner.</p>
            <div class="modal-action">
            <label for="my-modal-how" class="btn">Ok, Got It.</label>
            </div>
        </div>
        </div>

                </div>
            </div>
        </div>
    </div>
    <div
        class="flex items-center justify-center md:mt-10 lg:mt-0 lg:ml-14 xl:ml-32 scale-[2.3]"
    >
        <img src="src/assets/kbira.svg" class="animate-spin-left" alt="">
        <img src="src/assets/griffin.svg" class="-ml-[134px] -mt-1 scale-[0.55]" alt="">
    </div>
</main>