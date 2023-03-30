<script lang="ts">
    import { supabase } from "$lib/supabase";

    let message: string | undefined
    let border: "border-gray-600" | "border-default-green"
    let opacity: 30 | 100

    const date = new Date()

    function onMessageSend() {
        if (message) {
            if (message.trim()) {
                supabase
                    .from("messages")
                    .insert({content: message, date: date.toLocaleString()})
                    .then((value) => console.log(value.statusText))

                message = undefined
            }
        }
    }

    $: opacity = message ? 100 : 30
    $: border = message ? "border-default-green" : "border-gray-600"
</script>

<div class="w-screen">
    <div class="p-3 m-5 rounded-lg bg-default-dark border {border} flex justify-between">
        <form class="w-full">
            <input class="placeholder-gray-600 text-default-white w-full" on:submit={onMessageSend} bind:value={message} type="text" placeholder="Click here to start typing...">
        </form>
        <button on:click={onMessageSend}>
            <img class="opacity-{opacity} pl-1 " src="/send_white_24dp.svg" alt="">
        </button>
    </div>
</div>