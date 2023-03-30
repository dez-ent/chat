<script lang="ts">
    import Chatbar from "$lib/components/Chatbar.svelte"
    import Message from "$lib/components/Message.svelte"
    import { supabase } from "$lib/supabase";

    interface Message {
        id: number
        date: string
        content: string
    }

    let messages: Array<Message> = []

    supabase
        .from("messages")
        .select("*")
        .order("id", { ascending: false })
        .then((value) => messages = value.data as Array<Message>)

    supabase
        .channel("messages_channel")
        .on("postgres_changes", { event: "*", schema: "public", table: "messages" }, (payload) => {
            messages = [payload.new as Message, ...messages]
        })
        .subscribe()
</script>

<div class="w-screen h-screen flex flex-col items-center justify-end">
    <div class="flex-1 w-full p-3 h-full flex flex-col gap-3 overflow-y-auto">
        {#each messages as message}
            <Message content={message.content} date={message.date}/>
        {/each}
    </div>
    <Chatbar/>
</div>