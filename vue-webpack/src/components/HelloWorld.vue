<template>
    <div>
        <p>{{ greeting }} world!</p>
    </div>
</template>

<script>
export default {
    data: () => ({ greeting: 'hello' })
}
</script>

<style>
p {
    font-size: 40px;
    color: white;
}
</style>
