<template>
    <!--<div class = "background">
        <svg viewBox="0 0 200 200" class="css-lld9th"><g transform="translate(100 100)"><path  d="M40.6,-70.3C53.4,-62.9,65.1,-53.6,71.1,-41.6C77,-29.5,77.3,-14.8,76.7,-0.39999999999999997C76,14.1,74.5,28.1,68.3,39.7C62.1,51.3,51.1,60.4,38.9,67.2C26.8,74,13.4,78.6,-0.2,78.8C-13.7,79.1,-27.4,75.1,-39.6,68.3C-51.9,61.6,-62.8,52.1,-70.2,40.2C-77.5,28.4,-81.3,14.2,-82.7,-0.8C-84.1,-15.8,-83.1,-31.6,-75.3,-42.7C-67.6,-53.9,-53.1,-60.3,-39.4,-67.2C-25.7,-74,-12.8,-81.3,0.5,-82.2C13.9,-83.1,27.8,-77.7,40.6,-70.3Z"></path></g></svg>
    </div>
    -->
    <div class="center-feed">
        <div class="left-block">
            <h1>Онлайн-курсы что-то там</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua</p>
            <button class="learn-more">Узнать подробнее</button>
        </div>
        <div class="right-block">

        </div>
    </div>
    <section class="more-about">
        <img src="@/img/Science.png">
    </section>
    <div class = 'm-h-dist'></div>
    <section class="for-who">
        <h1>Кому подойдут наши курсы</h1>
    </section>
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
                { id: 0, type: "Физика", title: "Курс по физике 1", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15, color: "red" },
                { id: 1, type: "Химия", title: "Курс по химии 1", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15, color: "#619de1" },
                { id: 2, type: "Физика", title: "Курс по физике 2", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15, color: "#619de1" },
                { id: 3, type: "Физика", title: "Курс по физике 3", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15, color: "#619de1" },
            ]
        }
    }, 
    mounted() {
        document.querySelector(".learn-more").addEventListener("click", function (e) {
            document.querySelector(".more-about").scrollIntoView({ block: "center", behavior: "smooth" });
        });
    }
}



</script>
<style scoped>
.center-feed {
    height: calc(100vh - 400px);
}

.left-block {
    width: 450px;
    height: auto;
    float: left;
}

.right-block {
    width: 500px;
    height: auto;
    float: right;
}

.more-about {
    width: 70%;
    height: 70vh;
    margin-left: 5%;
    border-radius: 10px;
    background-color: var(--green-color);
    position: relative;

}
.more-about> img {
    position: absolute;
    right: -33%;
    top: -25%;
    width: 70%;
}

.for-who {
    width: 100%;
    height: auto;
    min-height: 400px;
    margin-top: 200px;
    background-color: var(--blue-color);
}
.m-h-dist {
    width: 100%;
    height: 400px;
    position: absolute;
    transform: translate(0,-100px);
}
.for-who {
    min-height: 500px;
    padding: 50px 0;
}
.for-who h1 {
    color: white;
    text-align: center;
    font-size: 30px;
    margin: 0 auto;
    padding: 10px 20px;
    width: 450px;
    background-color: #4a8bd5;
    border-radius: 5px;
}

.center-feed>.left-block>h1 {
    font-size: 40px;
    color: rgb(96, 96, 96);
    font-weight: 400;
    margin: 30px 0px;
}

.center-feed>.left-block>p {
    font-size: 19px;
    color: rgb(96, 96, 96);
    font-weight: 200;
    margin: 30px 0px;
}

.center-feed>.left-block>.learn-more {
    width: 55%;
    height: 50px;
    background-color: var(--blue-color);
    font-size: 15px;
    font-weight: 800;
    color: white;
    border: none;
    border-radius: 5px;
    margin: 10px 0px;
    transition: 0.2s ease-in-out;
    text-align: center;
    display: inline-block;
    text-transform: capitalize;
    overflow: hidden;
    text-decoration: none;

}

.center-feed>.left-block>.learn-more::after {
    content: "➜";
    color: rgb(255, 255, 255);

    font-size: 15px;
    position: absolute;
    opacity: 0;
    height: 30px;
    width: 40px;
    transition: all 0.2s linear 0s;
    text-indent: -20px;

}

.center-feed>.left-block>.learn-more:hover {
    text-indent: -20px;
    cursor: pointer;
}

.center-feed>.left-block>.learn-more:hover::after {
    opacity: 1;
    text-indent: 20px;
}


@media screen and (max-width: 1000px) {
    .center-feed>.left-block>.learn-more {
        width: 100%;
    }

    .center-feed {
        width: 90%;

    }

    .left-block {
        width: 100%;
        height: auto;
    }
}
</style>