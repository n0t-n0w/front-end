<template>
    <div class="course-feed">
        <div class="section main">
            <h3 class="sec-title">Курс</h3>
            <h1 class="course-title">Супер-пупер название курса бла бла бла бла бла</h1>
            <h2 class="course-teacher">Преподаватель: <span> Антон Очень Антон</span></h2>
            <button class="enter-course">Вступить</button>
        </div>
        <div class="section info">
            <h3 class="sec-title">Описание</h3>
            <p class="sec-text">На этом курсе Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="section">
            <h3 class="sec-title">Занятия</h3>
            <div class="list-holder">
                <div class="shadowed"></div>
                <ol class="lessons">
                    <li>
                        <h4>Что-то тут тема какая-то</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>
                    <li>
                        <h4>Тут тоже</h4>
                    </li>

                </ol>
            </div>
        </div>
        <div class="section">
            <h3 class="sec-title">Материалы уроков</h3>
            <div class="list-holder">
                <ol class="materials-list">
                    <li>
                        <input type="checkbox">
                        <h4 class="arrow">⯈</h4>
                            <h4>Материалы к уроку 1</h4>

                        <ul class="links-list">
                            <li><a>ФАйЛ.файл</a></li>
                            <li><a>ссылка.ссылка</a></li>
                            <li><a href="vk.com">ссылка.ссылка</a></li>
                        </ul>
                    </li>
                    <li>
                        <h4 class="arrow">⯈</h4>
                        <h4>Материалы к уроку 1</h4>
                    </li>
                    <li>
                        <h4 class="arrow">⯈</h4>
                        <h4>Материалы к уроку 1</h4>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.course-feed {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 2%;
    grid-row-gap: 2%;
    width: 90%;
    height: auto;
    margin: auto;
    margin-top: 120px;
    position: relative;

}

.course-feed>.section {
    min-height: 300px;
    -webkit-box-shadow: 0px 1px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 1px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 1px 10px 2px rgba(34, 60, 80, 0.2);
    border-radius: 5px;
    position: relative;
    padding-bottom: 30px;
}

.course-feed>.section.info {
    height: auto;
}

.course-feed>.section>.sec-title {
    color: rgb(179, 179, 179);
    margin: 3% 5%;
    font-size: 15px;
}

.course-feed>.section>.course-title {
    font-size: 30px;
    margin: 5% 5%
}

.course-feed>.section>.course-teacher {
    font-size: 20px;
    color: var(--green-color);
    margin: 5% 5%;
}

.course-feed>.section>.course-teacher>span {
    color: black;
}

.course-feed>.section>.sec-text {
    font-size: 20px;
    color: black;
    margin: 5% 5%

}
.section.main {
    position: relative;
}
.course-feed>.section>.enter-course {
    border: none;
    background-color: var(--green-color);
    color: white;
    font-size: 20px;
    padding: 7px 15px;
    border-radius: 4px;
    position: absolute;
    right: 6%;
    bottom: 30px;
    transition: 0.2s ease-in-out;
}

.course-feed>.section>.enter-course:hover {
    background-color: rgb(134, 224, 60);
    cursor: pointer;
}

.lessons {
    counter-reset: li;
    list-style: none;
    *list-style: decimal;

    margin: 3% 5%;
}

.lessons>li {
    width: 100%;
    background-color: rgb(235, 235, 235);

    height: auto;
    margin: 5px 5px;
    padding: 5px 0;
    position: relative;
    border-radius: 3px;
    transition: 0.2s ease-in-out;
}

.lessons>li:hover {
    background-color: rgb(213, 213, 213);
    cursor: pointer;
    margin: 5px 0px;
    width: calc(100% + 10px);
}

.lessons>li>h4 {
    margin: 4px 50px;
    padding: 0% 0%;
    font-size: 20px;
    font-weight: 300;
}

.lessons>li::before {
    content: counter(li);
    counter-increment: li;
    position: absolute;
    font-size: 20px;
    margin: 4px 20px;
}

.list-holder {
    width: 90%;
    height: 200px;
    margin: 40px auto;
    background-color: rgb(249, 249, 249);
    padding: 10px 10px;

    overflow-y: scroll;
    scrollbar-width: thin;

}

.materials-list {
    counter-reset: li;
    list-style: none;


    margin: 3% 5%;

}

.materials-list>li {
    width: 100%;
    background-color: rgb(235, 235, 235);

    height: auto;
    margin: 5px 5px;
    padding: 5px 0;
    position: relative;
    border-radius: 3px;
    transition: 0.2s ease-in-out;
}

.materials-list>li>.arrow {

    position: absolute;
    font-size: 20px;
    margin: 4px 20px;
    color: var(--blue-color);
    transition: 0.1s ease-in-out;
}

.materials-list>li:hover {
    background-color: rgb(213, 213, 213);
    cursor: pointer;
    margin: 5px 0px;
    width: calc(100% + 10px);
}

.materials-list>li>h4 {
    margin: 4px 50px;
    padding: 0% 0%;
    font-size: 20px;
    font-weight: 300;
}

.materials-list>li>input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;

    opacity: 0;

}

.materials-list>li>input:hover {
    cursor: pointer;
}

.links-list {
    margin: 0 10%;
    list-style: none;
    height: 0;
    overflow: hidden;
}

.materials-list>li>input:checked ~ .links-list {
    height: auto;
    overflow: visible;
}

.materials-list>li>input:checked ~ .arrow {
    transform: rotate(90deg);
}
@media screen and (max-width: 800px) {
    .course-feed {
        grid-template-columns: 1fr;
    }
}

</style>