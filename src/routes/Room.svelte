<script>

import {ConfettiCannon} from 'svelte-canvas-confetti';
    import {tick} from 'svelte';


    const makeConfettiCannon = async () => {
		confettiCannon = false;
		await tick();
		confettiCannon = true;
	}

  let confettiCannon = false;


    import { score } from "../stores/scoreStore";
    import data from "../data"
    let num = Math.floor(Math.random() * 6);
    let age = data[num]
    let qs = age.Question
    console.log(qs);
    let qsIndex = 0

    let handleInputChange = (e) => {
		if (e.key == 'Enter') {
            if (e.target.value.toLowerCase() == qs[qsIndex].correct_answer.toLowerCase()) {
                myScore++
                qsIndex++
                makeConfettiCannon()
                e.target.value = ""
            } else {
                e.target.value = ""
                e.target.placeholder = "wrong answer, try again."
            }
		}
	}



    let startGame = () => {
        timer.start()
    }

    let updateLeaderBoard = (myScore, nickName) => {
        $score = [...$score, {name: nickName, score: myScore}]
    }

    import { onMount } from "svelte";
    onMount( () => {
        myScore = 0
    } )

    export let nickName
    import { timer, time, isComplete } from "../stores/countdown-timer";

    let myScore = 0

</script>

<main class="flex items-center justify-center w-full h-full">
    <div class="bg-white rounded-3xl flex flex-col items-center justify-center gap-6 p-7">
        <div class="text-center text-xl font-bold text-gray-900">
            Let's go {nickName}, guess the word!
        </div>
        

        <div class="countdown text-lg text-gray-900">Timer: {$time}</div>

        <div class="mt-8 text-gray-900 text-xl">{qs[qsIndex].content}</div>

        <div class="flex flex-row w-full justify-around items-center gap-2">
            <div class="border-dev-dark-green rounded-md text-gray-900 p-2 border-2">{qs[qsIndex].hint1}</div>
            <div class="border-dev-dark-green rounded-md text-gray-900 p-2 border-2">{qs[qsIndex].hint2}</div>
        </div>

        {#if $isComplete}
        <input type="text" on:keydown={(e) => handleInputChange(e)} placeholder="Type here" class="input w-full max-w-xs mb-8 text-white" disabled />
        {:else}
        <input type="text" on:keydown={(e) => handleInputChange(e)} placeholder="Type here" class="input w-full max-w-xs mb-8 text-white" />
        {/if}
        <div class="flex flex-row w-full justify-between items-center">
            <button class="btn btn-primary" on:click={startGame}>start Game</button>
              {#if $isComplete}
                    <button class="btn" on:click={() => updateLeaderBoard(myScore, nickName)}>end game</button>
              {/if}
        </div>
      

    </div>
</main>

{#if confettiCannon}
	<ConfettiCannon
		origin={[window.innerWidth / 2, window.innerHeight]}
		angle={-90}
		spread={35}
		force={35}
	/>
{/if}
