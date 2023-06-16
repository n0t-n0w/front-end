<template>
    <div class="center-feed">
        <div class="pre-section">
            <h2 class="theme-title">Курсы - </h2>
            <p class="theme-definition">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div class="courses-list">
            <Course v-for="course in courses" :data="course"></Course>
        </div>
    </div>
</template>

<script>
import Course from "@/components/Course.vue"

export default {

    components: {
        Course
    },
    data() {
        return {
            courses: [
                { id: 0, type: "Физика", title: "Курс по физике 1", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15,color : "red" },
                { id: 1, type: "Химия", title: "Курс по химии 1", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15 , color: "#619de1" },
                { id: 2, type: "Физика", title: "Курс по физике 2", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15 , color: "#619de1" },
                { id: 3, type: "Физика", title: "Курс по физике 3", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15 , color: "#619de1" },
            ]
        }
    }

}
</script>

<style scoped>
.theme-title {
    color: var(--green-color);
    margin-bottom: 5%;
    font-size: 40px;

}

.theme-definition {
    color: rgb(154, 154, 154);
    font-size: 19px;
}

.pre-section {
    margin: 130px auto;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    border-radius: 8px;
    padding: 5% 5%;
}

.courses-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2%;
    grid-row-gap: 2%;
}


@media screen and (max-width: 1000px) {

    .courses-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2%;
        grid-row-gap: 2%;
    }

}

@media screen and (max-width: 500px) {
    .courses-list {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 2%;
        grid-row-gap: 2%;
    }

}</style>