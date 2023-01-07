<script>
  import { score } from "../stores/scoreStore";
  let i = 1
</script>

<main class="flex items-center justify-center p-5 w-full h-full">
    <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>score</th>
            </tr>
          </thead>
          <tbody>
            {#each $score as one}
            <tr>
              <th>{$score.indexOf(one) + 1}</th>
              <td>{one.name}</td>
              <td>{one.score}</td>
            </tr>
            {:else}
            <th></th>
            <td>leaderboard</td>
            <td>empty</td>
            {/each}
          </tbody>
        </table>
      </div>
</main>