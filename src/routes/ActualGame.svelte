<script>
    import { rooms } from '../stores/rooms';
    import { Route, useNavigate } from 'svelte-navigator';
    import Room from '../routes/Room.svelte'
    const navigate = useNavigate();


    let roomName
    let nickName
    let selectedRoom
    let createRoom = () => {
        $rooms = [...$rooms, roomName] 
        roomName = ""
    }

    let joinRoom = (nickName, selectedRoom) => {
      navigate(`${selectedRoom}`);
      console.log(nickName);
      console.log(selectedRoom);
    }
</script>
<Route path="/">
<main class="flex items-center justify-center p-5 w-full h-full">
    <div class="flex items-center justify-center w-full rounded-2xl bg-dev-dark-green bg-opacity-25 dark:bg-opacity-25 dark:bg-dev-light-color text-gray-900 gap-7 py-4 dark:text-gray-100"> 
        <label for="my-modal" class="btn btn-primary">Create a New Room</label>
        
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
        <div class="modal-box bg-gray-200">
            <h3 class="font-bold text-lg">Create a New Room & invite your friends!</h3>
            <div class="py-4 flex flex-col gap-2">
                

                <div class="form-control">
                    <label class="label">
                      <span class="label-text text-gray-800">Room's Name</span>
                    </label>
                    <label class="input-group">
                      <span class="text-gray-200 w-28">Name</span>
                      <input type="text" placeholder="DevFest Room" class="input input-bordered text-white" bind:value={roomName} />
                    </label>
                </div>

                <div class="form-control">
                    <label class="label">
                      <span class="label-text text-gray-800">Players Limit</span>
                    </label>
                    <label class="input-group">
                      <span class="text-gray-200 w-28">Number</span>
                      <input type="number" placeholder="2" class="input input-bordered text-white" />
                    </label>
                </div>

                <label class="label">
                    <span class="label-text text-gray-800 -mb-3">Difficulty</span>
                </label>
                <div class="form-control">
                    <div class="input-group text-gray-200">
                      <select class="select select-bordered w-36">
                        <option disabled selected>Pick category</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                      </select>
                      <button class="btn">Go</button>
                    </div>
                </div>


            </div>
            <div class="modal-action">
            <label for="my-modal" class="btn" on:click={createRoom}>Create</label>
            </div>
        </div>
        </div>

        <label for="my-modal-join" class="btn btn-primary">Join a Room</label>

        <input type="checkbox" id="my-modal-join" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box bg-gray-200">
            <h3 class="font-bold text-lg">It's fun time!!</h3>
            <div class="py-4 flex flex-col gap-2">

                

              <div class="form-control">
                <label class="label">
                  <span class="label-text text-gray-800">Choose a Nickname</span>
                </label>
                <label class="input-group">
                  <span class="text-gray-200 w-28">Name</span>
                  <input type="text" placeholder="ch33kaboo" class="input input-bordered text-white" bind:value={nickName} />
                </label>
            </div>

            <label class="label">
                <span class="label-text text-gray-800 -mb-3">Choose an existing Room</span>
            </label>
            <div class="form-control">
                <div class="input-group text-gray-200">
                  <select class="select select-bordered w-36" bind:value={selectedRoom}>
                    <option disabled selected>Pick Room</option>
                    {#each $rooms as room}
                      <option >{room}</option>
                    {/each}
                  </select>
                  <button class="btn">Go</button>
                </div>
            </div>


        
            </div>
            <div class="flex flex-row gap-3 w-full justify-end">
              <div class="modal-action">
                <label for="my-modal-join" class="btn">Cancel</label>
              </div>
              <div class="modal-action">
                <label for="my-modal-join" class="btn" on:click={ () => {joinRoom(nickName, selectedRoom)}}>Join</label>
              </div>
            </div>

          </div>
        </div>  


        <label for="my-modal-how" class="btn btn-info">
            How to Play?
        </label>
        <input type="checkbox" id="my-modal-how" class="modal-toggle" />

        <div class="modal">
        <div class="modal-box text-gray-50">
            <h3 class="font-bold text-lg">Hi time traveler!</h3>
            <p class="py-4">Griffin is a competetive game. In one room many players will compete to solve diverse historical Quizzes, each player will have a specific amount of time, but remember that in the Griffin world the time is as valuable as gold. In this game your knowledge is your sword, so use it carefully. <br><br>In order to win the game, you should guess the right word using the hints given. For each correct guess, you'll get extra 5 seconds, for each wrong guess you will lose 5 seconds, the last games to stay alive is the winner.</p>
            <div class="modal-action">
            <label for="my-modal-how" class="btn">Ok, Got It.</label>
            </div>
        </div>
        </div>


    </div>
</main>
</Route>

<Route {selectedRoom}>
  <Room {nickName} />
</Route>
