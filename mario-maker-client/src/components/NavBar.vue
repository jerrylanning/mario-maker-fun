<template>
    <div class="rating">
        <ul class="list">
            <li v-for="star in maxStars" :class="{ 'active': star <= stars }" class="star">
                <icon :name="star <= stars ? 'star' : 'star-of-david'"/>
            </li>
        </ul>
        <span>3 of 5</span>
    </div>
</template>

<script>
    import 'vue-awesome/icons/star'
    import 'vue-awesome/icons/star-of-david'

    import Icon from 'vue-awesome/components/Icon'

    export default {
        components: { Icon },
        data() {
            return {
                stars: 3,
                maxStars: 5
            }
        },
        methods: {
            rate(star) {
                // do stuff
            }
        }
    }
</script>

<style scoped>
    .active {
        color: red;
    }
</style>