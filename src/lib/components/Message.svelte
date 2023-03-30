<script lang="ts">
    export let content: string
    export let date: string
</script>

<div class="w-full p-2 bg-default-dark drop-shadow-sm flex rounded-lg gap-3">
    <div class="flex flex-col justify-start">
        <span class="text-gray-500 text-xs">{date}</span>
        <span class="text-default-white text-sm">{content}</span>
    </div>
</div>